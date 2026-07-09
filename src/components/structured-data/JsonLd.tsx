import { absoluteUrl, siteConfig } from "@/config/site";
import type { FAQItem } from "@/content/types";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.tradeName,
    description: siteConfig.legalDescription,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "KvK",
      value: siteConfig.chamberOfCommerce
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      postalCode: siteConfig.postalCode,
      addressLocality: siteConfig.city,
      addressCountry: "NL"
    },
    areaServed: { "@type": "Country", name: "Nederland" },
    image: absoluteUrl(siteConfig.seo.ogImage)
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locale
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
}
