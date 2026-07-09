import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function pageMetadata({ title, description, path = "/", noIndex = false }: MetaInput): Metadata {
  const url = absoluteUrl(path);
  const previewNoIndex = process.env.VERCEL_ENV === "preview";
  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    robots: noIndex || previewNoIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: absoluteUrl(siteConfig.seo.ogImage), width: 1200, height: 630, alt: `${siteConfig.name} logo` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.seo.ogImage)]
    }
  };
}
