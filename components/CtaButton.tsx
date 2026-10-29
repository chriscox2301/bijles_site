import Link from "next/link";
import { cta } from "@/content/site";

type Props = {
  href?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
};

export function CtaButton({
  href = cta.href,
  children = cta.label,
  variant = "primary",
  size = "md",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md font-bold transition-colors touch-manipulation";
  const sizes = { md: "min-h-11 px-4 text-base", lg: "min-h-13 px-6 text-lg" };
  const variants = {
    primary:
      "bg-marker text-graphite shadow-[0_2px_0_var(--color-ink)] ring-1 ring-ink hover:bg-marker-dark",
    secondary: "text-ink underline decoration-2 underline-offset-4 hover:decoration-marker-dark",
  };
  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
