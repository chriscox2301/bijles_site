import { cta, site } from "@/content/site";
import { CtaButton } from "./CtaButton";
import { Fill } from "./Fill";

/** Afsluitende oproep onderaan elke pagina. */
export function CtaBand({
  heading = "Zullen we je volgende toets samen voorbereiden?",
}: {
  heading?: string;
}) {
  return (
    <section aria-labelledby="cta-band" className="grid-paper border-y border-grid">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl bg-white/90 p-6 ring-1 ring-grid sm:p-8">
          <h2 id="cta-band" className="text-3xl sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-muted">
            Vertel kort waar je hulp bij zoekt. Je krijgt <Fill text={site.responseTime} /> antwoord.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <CtaButton size="lg" />
            <span className="text-sm text-muted">{cta.reassurance}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
