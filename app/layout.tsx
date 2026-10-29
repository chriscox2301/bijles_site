import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible_Next, STIX_Two_Text } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";
import { withLocation } from "@/lib/seo";
import "./globals.css";

const body = Atkinson_Hyperlegible_Next({
  variable: "--font-body",
  subsets: ["latin"],
  // Next.js heeft voor dit font geen fallback-metrics; gebruik een systeemfont als terugval.
  adjustFontFallback: false,
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const display = STIX_Two_Text({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${withLocation("Bijles wiskunde A, B, C en D")} | ${site.brand}`,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: site.brand,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f9fc",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${body.variable} ${display.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#inhoud"
          className="sr-only z-30 bg-marker px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        >
          Naar de inhoud
        </a>
        <SiteHeader />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
