import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { CtaButton } from "@/components/CtaButton";
import { FaqList } from "@/components/FaqList";
import { Fill } from "@/components/Fill";
import { LevelGraph } from "@/components/LevelGraph";
import { SubjectMatrix } from "@/components/SubjectMatrix";
import { cta, home, levels, site, steps } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="hero" className="grid-paper border-b border-grid">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.15fr_1fr] md:py-20">
          <div>
            <h1 id="hero" className="text-[2.5rem] leading-[1.05] sm:text-6xl">
              {site.location ? `Bijles wiskunde in ${site.location}, van brugklas tot hbo` : home.title}
            </h1>
            <p className="mt-5 max-w-[56ch] bg-white/85 text-lg sm:text-xl">{home.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <CtaButton size="lg" />
              <CtaButton href="/aanbod" variant="secondary">
                Bekijk het aanbod
              </CtaButton>
            </div>
            <p className="mt-4 text-sm text-muted">{cta.reassurance}</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <LevelGraph />
          </div>
        </div>
      </section>

      <section aria-labelledby="herkenbaar" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 id="herkenbaar" className="text-3xl sm:text-4xl">
          Herken je dit?
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {home.audiences.map((audience) => (
            <div key={audience.heading}>
              <h3 className="text-2xl">{audience.heading}</h3>
              <ul className="mt-4 space-y-3">
                {audience.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1 w-4 shrink-0 bg-marker-dark" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-[60ch] text-lg">
          Met bijles op jouw niveau krijg je weer grip op de stof.{" "}
          <Link href={cta.href} className="font-semibold text-ink underline underline-offset-4">
            Vraag een les aan
          </Link>{" "}
          en vertel waar je tegenaan loopt.
        </p>
      </section>

      <section aria-labelledby="aanbod" className="border-y border-grid bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <h2 id="aanbod" className="text-3xl sm:text-4xl">
              Bijles op jouw niveau
            </h2>
            <dl className="mt-6 space-y-5">
              {levels.map((level) => (
                <div key={level.id}>
                  <dt className="font-serif text-xl font-semibold text-ink">{level.name}</dt>
                  <dd className="mt-1 text-muted">
                    <Fill text={level.text} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="text-2xl">Wiskunde A, B, C en D</h3>
            <p className="mt-2 mb-5 text-muted">Welk vak bestaat op welk niveau:</p>
            <SubjectMatrix />
            <p className="mt-6">
              <Link href="/aanbod" className="font-semibold text-ink underline underline-offset-4">
                Lees wat elk vak inhoudt
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="werkwijze" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 id="werkwijze" className="text-3xl sm:text-4xl">
          Zo begin je
        </h2>
        <ol className="mt-8 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.heading} className="border-t-2 border-ink pt-4">
              <span aria-hidden="true" className="font-serif text-4xl text-ink">
                {index + 1}
              </span>
              <h3 className="mt-1 text-xl">{step.heading}</h3>
              <p className="mt-2 text-muted">
                <Fill text={step.text} />
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <CtaButton size="lg">Stap 1: les aanvragen</CtaButton>
        </div>
      </section>

      <section aria-labelledby="vragen" className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 sm:pb-20">
        <h2 id="vragen" className="mb-6 text-3xl sm:text-4xl">
          Veelgestelde vragen
        </h2>
        <FaqList onlyHome />
        <p className="mt-6">
          <Link href="/veelgestelde-vragen" className="font-semibold text-ink underline underline-offset-4">
            Alle vragen bekijken
          </Link>
        </p>
      </section>

      <CtaBand />
    </>
  );
}
