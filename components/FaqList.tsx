import { faq } from "@/content/site";
import { Fill } from "./Fill";

export function FaqList({ onlyHome = false }: { onlyHome?: boolean }) {
  const items = onlyHome ? faq.filter((item) => item.onHome) : faq;
  return (
    <div className="divide-y divide-grid border-y border-grid">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-lg font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans text-lg text-graphite">{item.question}</h3>
            <span
              aria-hidden="true"
              className="mt-0.5 font-serif text-2xl leading-none text-ink transition-transform group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>
          <p className="max-w-[65ch] pb-5 text-muted">
            <Fill text={item.answer} />
          </p>
        </details>
      ))}
    </div>
  );
}
