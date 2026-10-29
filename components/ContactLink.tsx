import { site } from "@/content/site";
import { Fill, isPlaceholder } from "./Fill";

/** E-mail of telefoon als klikbare link, of gemarkeerd zolang het nog niet is ingevuld. */
export function ContactLink({ type, className = "underline underline-offset-4" }: { type: "email" | "phone"; className?: string }) {
  const value = site[type];
  if (isPlaceholder(value)) return <Fill text={value} />;
  const href = type === "email" ? `mailto:${value}` : `tel:${value.replace(/[^\d+]/g, "")}`;
  return (
    <a href={href} className={className}>
      {value}
    </a>
  );
}
