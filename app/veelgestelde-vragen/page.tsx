import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata, withLocation } from "@/lib/seo";

export const metadata = pageMetadata({
  title: withLocation("Veelgestelde vragen over bijles wiskunde"),
  description:
    "Antwoorden op vragen over bijles wiskunde: niveaus, het verschil tussen wiskunde A, B, C en D, kosten, locatie en hoe snel je kunt beginnen.",
  path: "/veelgestelde-vragen",
});

export default function VragenPage() {
  return (
    <>
      <PageIntro
        title="Veelgestelde vragen"
        lead="Voor leerlingen, studenten en ouders. Staat je vraag er niet bij? Stel hem in het aanvraagformulier."
      />
      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <FaqList />
      </div>
      <CtaBand heading="Alles duidelijk? Vraag een les aan." />
    </>
  );
}
