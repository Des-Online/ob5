import { siteConfig } from "@/config/site";
import type { LeadPayload } from "@/lib/validation/lead";

export async function deliverLead(lead: LeadPayload & { leadId: string }) {
  const tasks: Array<Promise<unknown>> = [];
  if (process.env.RESEND_API_KEY && process.env.LEAD_NOTIFICATION_EMAIL && process.env.LEAD_FROM_EMAIL) {
    tasks.push(sendResend(lead));
  }
  if (process.env.CRM_WEBHOOK_URL) {
    tasks.push(sendWebhook(lead));
  }
  if (!tasks.length) {
    throw new Error("LEAD_DELIVERY_NOT_CONFIGURED");
  }
  const results = await Promise.allSettled(tasks);
  if (results.every((result) => result.status === "rejected")) throw new Error("LEAD_DELIVERY_FAILED");
  return results;
}

async function sendResend(lead: LeadPayload & { leadId: string }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL,
      to: [process.env.LEAD_NOTIFICATION_EMAIL],
      subject: `Nieuwe aanvraag ${siteConfig.name} (${lead.formId})`,
      text: renderLeadText(lead)
    }),
    signal: AbortSignal.timeout(8000)
  });
  if (!response.ok) throw new Error("RESEND_FAILED");
}

async function sendWebhook(lead: LeadPayload & { leadId: string }) {
  const response = await fetch(process.env.CRM_WEBHOOK_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.CRM_WEBHOOK_SECRET ? { "X-Webhook-Secret": process.env.CRM_WEBHOOK_SECRET } : {})
    },
    body: JSON.stringify({ brand: siteConfig.name, lead }),
    signal: AbortSignal.timeout(8000)
  });
  if (!response.ok) throw new Error("CRM_WEBHOOK_FAILED");
}

function renderLeadText(lead: LeadPayload & { leadId: string }) {
  return [
    `Lead-ID: ${lead.leadId}`,
    `Bron: ${lead.source}`,
    `Pagina: ${lead.pageUrl || "-"}`,
    `Naam: ${lead.name || "-"}`,
    `Telefoon: ${lead.phone}`,
    `E-mail: ${lead.email || "-"}`,
    `Postcode: ${lead.postcode || "-"}`,
    `Ongedierte: ${lead.pest || "-"}`,
    `Urgentie: ${lead.urgency || "-"}`,
    `Bericht: ${lead.message || "-"}`
  ].join("\n");
}
