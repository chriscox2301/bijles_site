import Link from "next/link";
import { site } from "@/content/site";
import { CtaButton } from "./CtaButton";
import { NavLinks } from "./NavLinks";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-grid bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 px-4 sm:px-6">
        <Link href="/" className="mr-auto py-3 font-serif text-xl font-semibold text-ink">
          {site.brand}
        </Link>
        <nav aria-label="Hoofdmenu" className="order-last w-full sm:order-none sm:w-auto">
          <NavLinks />
        </nav>
        <CtaButton className="my-2" />
      </div>
    </header>
  );
}
