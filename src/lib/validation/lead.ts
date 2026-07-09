export type LeadPayload = {
  formId: string;
  source: string;
  pageUrl?: string;
  pageType?: string;
  serviceSlug?: string;
  citySlug?: string;
  provinceSlug?: string;
  name?: string;
  phone: string;
  email?: string;
  postcode?: string;
  pest?: string;
  urgency?: string;
  message?: string;
  timestamp?: string;
  consentStatus?: string;
  company?: string;
};

export function validateLead(input: unknown): { ok: true; data: LeadPayload } | { ok: false; message: string } {
  if (!input || typeof input !== "object") return { ok: false, message: "Ongeldige aanvraag." };
  const record = input as Record<string, unknown>;
  if (typeof record.company === "string" && record.company.trim()) return { ok: false, message: "Ongeldige aanvraag." };
  const formId = stringValue(record.formId);
  const source = stringValue(record.source);
  const phone = stringValue(record.phone);
  if (!formId || !source) return { ok: false, message: "Formuliercontext ontbreekt." };
  if (!phone || phone.replace(/\D/g, "").length < 8) return { ok: false, message: "Vul een geldig telefoonnummer in." };
  const email = stringValue(record.email);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, message: "Vul een geldig e-mailadres in." };
  return {
    ok: true,
    data: {
      formId,
      source,
      phone: phone.trim().slice(0, 120),
      email: normalize(email),
      pageUrl: normalize(stringValue(record.pageUrl)),
      pageType: normalize(stringValue(record.pageType)),
      serviceSlug: normalize(stringValue(record.serviceSlug)),
      citySlug: normalize(stringValue(record.citySlug)),
      provinceSlug: normalize(stringValue(record.provinceSlug)),
      name: normalize(stringValue(record.name)),
      postcode: normalize(stringValue(record.postcode)),
      pest: normalize(stringValue(record.pest)),
      urgency: normalize(stringValue(record.urgency)),
      message: normalize(stringValue(record.message)),
      timestamp: normalize(stringValue(record.timestamp)),
      consentStatus: normalize(stringValue(record.consentStatus))
    }
  };
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value : "";
}

function normalize(value: string) {
  const clean = value.trim().slice(0, 1500);
  return clean || undefined;
}
