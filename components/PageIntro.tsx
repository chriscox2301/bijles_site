import { cta } from "@/content/site";
import { CtaButton } from "./CtaButton";

/** Kop en inleiding bovenaan een subpagina, met directe actie. */
export function PageIntro({ title, lead, showCta = true }: { title: string; lead: React.ReactNode; showCta?: boolean }) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 pb-8 sm:px-6 sm:pt-16">
      <h1 className="max-w-3xl text-4xl sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-[60ch] text-lg text-muted">{lead}</p>
      {showCta && (
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <CtaButton />
          <span className="text-sm text-muted">{cta.reassurance}</span>
        </div>
      )}
    </div>
  );
}
