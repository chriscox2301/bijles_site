"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";

export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex gap-5 text-[0.9375rem] sm:gap-7">
      {nav.map((item) => {
        const current = pathname === item.href;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              className={`inline-block py-2 font-semibold underline-offset-[6px] hover:underline ${
                current ? "text-ink underline decoration-marker-dark decoration-[3px]" : "text-graphite"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
