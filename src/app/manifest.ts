import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F8F7F2",
    theme_color: "#073E32",
    lang: "nl-NL",
    icons: [
      { src: siteConfig.assets.icon192, sizes: "192x192", type: "image/png" },
      { src: siteConfig.assets.icon512, sizes: "512x512", type: "image/png" },
      { src: siteConfig.assets.maskableIcon, sizes: "512x512", type: "image/svg+xml", purpose: "maskable" }
    ]
  };
}
