import type { MetadataRoute } from "next";
import { cta, nav, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...nav.map((item) => item.href), cta.href];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === cta.href ? 0.9 : 0.7,
  }));
}
