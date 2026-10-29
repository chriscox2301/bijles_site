import Link from "next/link";
import { cta, nav, site } from "@/content/site";
import { ContactLink } from "./ContactLink";

export function SiteFooter() {
  return (
    <footer className="border-t border-grid">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-serif text-lg font-semibold text-ink">{site.brand}</p>
          <p className="mt-2 text-muted">
            Bijles wiskunde A, B, C en D, van brugklas tot hbo
            {site.location ? ` in ${site.location} en omgeving` : ""}.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-1">
            {[{ href: "/", label: "Home" }, ...nav, { href: cta.href, label: cta.label }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <address className="not-italic">
          <p className="font-semibold">Contact</p>
          <ul className="mt-1 space-y-1">
            <li>
              <ContactLink type="email" />
            </li>
            {site.phone && (
              <li>
                <ContactLink type="phone" />
              </li>
            )}
          </ul>
        </address>
      </div>
    </footer>
  );
}
