import { CtaBand } from "@/components/CtaBand";
import { CtaButton } from "@/components/CtaButton";
import { Fill } from "@/components/Fill";
import { PageIntro } from "@/components/PageIntro";
import { SubjectMatrix } from "@/components/SubjectMatrix";
import { levels, subjects } from "@/content/site";
import { pageMetadata, withLocation } from "@/lib/seo";

export const metadata = pageMetadata({
  title: withLocation("Aanbod bijles wiskunde A, B, C en D"),
  description:
    "Bijles wiskunde voor de onderbouw, havo, vwo en het hbo. Lees wat wiskunde A, B, C en D inhouden en op welk niveau je les kunt krijgen.",
  path: "/aanbod",
});

const groups = ["Middelbare school", "Hbo"] as const;

export default function AanbodPage() {
  return (
    <>
      <PageIntro
        title="Aanbod: bijles per niveau en per vak"
        lead="Van de brugklas tot het hbo. Zoek hieronder je niveau of je vak en vraag direct een les aan."
      />

      <section aria-labelledby="niveaus" className="border-y border-grid bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 id="niveaus" className="text-3xl sm:text-4xl">
            Per niveau
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {groups.map((group) => (
              <div key={group}>
                <h3 className="border-b-2 border-ink pb-2 text-2xl">{group}</h3>
                <dl className="mt-4 space-y-5">
                  {levels
                    .filter((level) => level.group === group)
                    .map((level) => (
                      <div key={level.id}>
                        <dt className="text-lg font-bold">{level.name}</dt>
                        <dd className="mt-1 text-muted">
                          <Fill text={level.text} />
                        </dd>
                      </div>
                    ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="vakken" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 id="vakken" className="text-3xl sm:text-4xl">
          Per vak
        </h2>
        <div className="mt-6 max-w-xl">
          <SubjectMatrix caption="Welk wiskundevak bestaat op welk niveau in de bovenbouw." />
        </div>

        <div className="mt-12 space-y-12">
          {subjects.map((subject) => (
            <article
              key={subject.id}
              id={subject.id}
              aria-labelledby={`vak-${subject.id}`}
              className="grid scroll-mt-28 gap-4 border-t border-grid pt-8 md:grid-cols-[14rem_1fr]"
            >
              <div>
                <h3 id={`vak-${subject.id}`} className="text-3xl">
                  {subject.name}
                </h3>
                <p className="mt-1 text-muted">
                  {subject.levels.length === 2 ? "Havo en vwo" : "Alleen vwo"}
                </p>
              </div>
              <div>
                <p className="max-w-[60ch] text-lg">{subject.summary}</p>
                <h4 className="mt-4 font-semibold">Onderwerpen waarbij ik help, onder andere:</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-ink">
                  {subject.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <CtaButton className="mt-5">Les aanvragen voor {subject.name}</CtaButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand heading="Je vak of niveau gevonden? Vraag een les aan." />
    </>
  );
}
