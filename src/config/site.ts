export const siteConfig = {
  name: "Ongedierte Buddy",
  shortName: "Ongedierte Buddy",
  slug: "ongedierte-buddy",
  domain: "ongediertebuddy.nl",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ongediertebuddy.nl",
  tagline: "Direct hulp bij ongedierte.",
  descriptor: "Landelijke ongediertehulp voor woningen en bedrijven, met duidelijke uitleg en nazorg volgens afspraak.",
  legalName: "Klussenbedrijf van Oostveen",
  tradeName: "Ongedierte Buddy",
  legalDescription: "Ongedierte Buddy is een handelsnaam van Klussenbedrijf van Oostveen.",
  email: "info@ongediertebuddy.nl",
  leadEmail: "leads@ongediertebuddy.nl",
  privacyEmail: "privacy@ongediertebuddy.nl",
  phoneDisplay: "085 - 00 00 000",
  phoneE164: "+31850000000",
  whatsappDisplay: "085 - 00 00 000",
  whatsappE164: "31850000000",
  address: "Pieter Calandlaan 515",
  postalCode: "1068 NN",
  city: "Amsterdam",
  chamberOfCommerce: "42108612",
  country: "Nederland",
  locale: "nl-NL",
  openingHours: "Bereikbaar via telefoon, WhatsApp en formulier",
  available24Hours: false,
  responseTime: "Snel contact",
  nationwide: true,
  resultGuarantee: false,
  serviceArea: "Heel Nederland",
  socials: {
    facebook: "",
    instagram: "",
    linkedin: ""
  },
  seo: {
    title: "Ongedierte Buddy | Direct hulp bij ongedierte",
    description:
      "Ongedierte in huis of bedrijf? Ongedierte Buddy helpt landelijk met duidelijke uitleg, professionele opvolging en preventieadvies.",
    ogImage: "/brand/social/ongedierte-buddy-og-brand-1200x630.png"
  },
  assets: {
    logoHeader: "/brand/logo/ongedierte-buddy-logo-header.svg",
    logoHorizontal: "/brand/logo/ongedierte-buddy-logo-horizontal.svg",
    logoHorizontalWhite: "/brand/logo/ongedierte-buddy-logo-horizontal-white.svg",
    logoStacked: "/brand/logo/ongedierte-buddy-logo-stacked.svg",
    logoWordmark: "/brand/logo/ongedierte-buddy-wordmark.svg",
    logoMark: "/brand/logo/ongedierte-buddy-mark.svg",
    faviconSvg: "/brand/icons/favicon.svg",
    appleTouchIcon: "/brand/icons/apple-touch-icon.png",
    icon192: "/brand/icons/icon-192.png",
    icon512: "/brand/icons/icon-512.png",
    maskableIcon: "/brand/icons/maskable-icon.svg"
  },
  claims: {
    response: "Snel contact",
    availability: "Telefonisch, via WhatsApp en formulier",
    guarantee: "Nazorg volgens afspraak",
    nationwide: "Landelijke dekking"
  },
  reviews: {
    rating: 0,
    count: 3,
    visible: true,
    verified: false,
    includeInStructuredData: false
  },
  featureFlags: {
    visitorConfirmationEmail: process.env.SEND_VISITOR_CONFIRMATION === "true",
    reviewStructuredData: false
  },
  legalContentVerified: false
} as const;

export const telHref = `tel:${siteConfig.phoneE164}`;
export const whatsappHref = `https://wa.me/${siteConfig.whatsappE164}?text=${encodeURIComponent(
  "Hallo Ongedierte Buddy, ik wil graag hulp bij ongedierte."
)}`;

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}
