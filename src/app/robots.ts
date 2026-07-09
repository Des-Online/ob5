import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const preview = process.env.VERCEL_ENV === "preview";
  return {
    rules: preview
      ? [{ userAgent: "*", disallow: "/" }]
      : [
          { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] }
        ],
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
