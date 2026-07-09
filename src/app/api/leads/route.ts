import { NextRequest, NextResponse } from "next/server";
import { deliverLead } from "@/lib/leads/delivery";
import { validateLead } from "@/lib/validation/lead";

const rateMap = new Map<string, { count: number; reset: number }>();

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  const now = Date.now();
  const current = rateMap.get(ip);
  if (current && current.reset > now && current.count > 8) {
    return NextResponse.json({ message: "Te veel aanvragen. Probeer het later opnieuw." }, { status: 429 });
  }
  rateMap.set(ip, { count: current && current.reset > now ? current.count + 1 : 1, reset: now + 60_000 });

  const body = await request.json().catch(() => null);
  const validated = validateLead(body);
  if (!validated.ok) return NextResponse.json({ message: validated.message }, { status: 400 });

  const leadId = crypto.randomUUID();
  try {
    await deliverLead({ ...validated.data, leadId });
    return NextResponse.json({ ok: true, leadId });
  } catch (error) {
    const message = error instanceof Error && error.message === "LEAD_DELIVERY_NOT_CONFIGURED"
      ? "Leadverwerking is nog niet geconfigureerd. Bel of app ons direct."
      : "Verzenden lukte niet. Bel of app ons direct.";
    return NextResponse.json({ message }, { status: 503 });
  }
}
