import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const paths = [
  "",
  "/vantaggi-socio",
  "/sei-unazienda-diventa-partner",
  "/associazione",
  "/vision",
  "/organigramma",
  "/dicono-di-noi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-29");
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
