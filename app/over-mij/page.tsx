import { CtaBand } from "@/components/CtaBand";
import { Fill } from "@/components/Fill";
import { PageIntro } from "@/components/PageIntro";
import { about } from "@/content/site";
import { pageMetadata, withLocation } from "@/lib/seo";

export const metadata = pageMetadata({
  title: withLocation("Over je bijlesdocent wiskunde"),
  description:
    "Maak kennis met je bijlesdocent wiskunde: wie ik ben, hoe ik lesgeef en waar de lessen plaatsvinden.",
  path: "/over-mij",
});

export default function OverMijPage() {
  return (
    <>
      <PageIntro title={about.title} lead={<Fill text={about.intro} />} />

      <section aria-labelledby="feiten" className="border-y border-grid bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[16rem_1fr]">
          {/* Vervang dit vlak door een foto met next/image, bijv. <Image src="/foto.jpg" alt="..." /> */}
          <div
            role="img"
            aria-label="Plek voor een foto van de docent"
            className="grid aspect-[4/5] w-full max-w-64 place-items-center border-2 border-dashed border-ink bg-paper p-4 text-center"
          >
            <Fill text="[Foto van jou]" />
          </div>
          <div>
            <h2 id="feiten" className="text-3xl">
              In het kort
            </h2>
            <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {about.facts.map((fact) => (
                <div key={fact.label} className="border-t border-grid pt-3">
                  <dt className="font-semibold">{fact.label}</dt>
                  <dd className="mt-1 text-muted">
                    <Fill text={fact.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section aria-labelledby="aanpak" className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 id="aanpak" className="text-3xl sm:text-4xl">
          {about.approachHeading}
        </h2>
        <ul className="mt-6 space-y-4 text-lg">
          {about.approach.map((point) => (
            <li key={point} className="flex gap-3">
              <span aria-hidden="true" className="mt-3 h-1 w-4 shrink-0 bg-marker-dark" />
              <Fill text={point} />
            </li>
          ))}
        </ul>
      </section>

      <CtaBand heading="Benieuwd of het klikt? Vraag een eerste les aan." />
    </>
  );
}
