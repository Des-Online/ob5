import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { cities, provinces, serviceCityPages } from "@/content/regions";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/diensten", "/regios", "/werkwijze", "/particulieren", "/bedrijven", "/tarieven", "/over-ons", "/contact", "/privacyverklaring", "/cookieverklaring", "/algemene-voorwaarden", "/disclaimer", "/klachten"];
  const paths = [
    ...staticPaths,
    ...services.map((service) => `/diensten/${service.slug}`),
    ...provinces.map((province) => `/regios/${province.slug}`),
    ...cities.map((city) => `/ongediertebestrijding/${city.slug}`),
    ...serviceCityPages.map((page) => `/ongediertebestrijding/${page.citySlug}/${page.serviceSlug}`)
  ];
  return paths.map((path) => ({ url: absoluteUrl(path), lastModified: new Date("2026-06-30"), changeFrequency: "weekly", priority: path === "/" ? 1 : 0.7 }));
}
