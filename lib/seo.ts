import type { Metadata } from "next";
import { site } from "@/content/site";

/** Voegt de plaats toe aan titels en beschrijvingen, als die is ingevuld. */
export const withLocation = (text: string) => (site.location ? `${text} in ${site.location}` : text);

export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}
