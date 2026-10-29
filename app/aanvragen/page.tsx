import { ContactLink } from "@/components/ContactLink";
import { Fill } from "@/components/Fill";
import { PageIntro } from "@/components/PageIntro";
import { RequestForm } from "@/components/RequestForm";
import { site } from "@/content/site";
import { pageMetadata, withLocation } from "@/lib/seo";

export const metadata = pageMetadata({
  title: withLocation("Bijles wiskunde aanvragen"),
  description:
    "Vraag bijles wiskunde aan voor de middelbare school of het hbo. Vul het korte formulier in, dan neem ik snel contact met je op.",
  path: "/aanvragen",
});

export default function AanvragenPage() {
  return (
    <>
      <PageIntro
        title="Les aanvragen"
        lead={
          <>
            Vertel kort wie je bent en waar je hulp bij zoekt. Je krijgt <Fill text={site.responseTime} /> antwoord.
            Een aanvraag is vrijblijvend.
          </>
        }
        showCta={false}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_18rem]">
        <section aria-label="Aanvraagformulier" className="max-w-2xl">
          <RequestForm />
        </section>
        <aside aria-labelledby="direct-contact" className="h-fit border-t-2 border-ink pt-4">
          <h2 id="direct-contact" className="text-2xl">
            Liever direct contact?
          </h2>
          <ul className="mt-3 space-y-2">
            <li>
              <span className="font-semibold">E-mail: </span>
              <ContactLink type="email" className="text-ink underline underline-offset-4" />
            </li>
            {site.phone && (
              <li>
                <span className="font-semibold">Telefoon: </span>
                <ContactLink type="phone" className="text-ink underline underline-offset-4" />
              </li>
            )}
          </ul>
        </aside>
      </div>
    </>
  );
}
