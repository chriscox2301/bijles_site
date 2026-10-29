import Link from "next/link";
import { levels, subjects } from "@/content/site";

/** Tabel: welk wiskundevak op welk niveau. */
export function SubjectMatrix({ caption }: { caption?: string }) {
  const columns = levels.filter((level) => level.id === "havo" || level.id === "vwo");
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[20rem] border-collapse bg-white text-left ring-1 ring-grid">
        {caption && <caption className="mb-3 text-left text-muted">{caption}</caption>}
        <thead>
          <tr className="border-b-2 border-ink">
            <th scope="col" className="px-4 py-3 font-semibold">
              Vak
            </th>
            {columns.map((level) => (
              <th key={level.id} scope="col" className="px-4 py-3 text-center font-semibold">
                {level.id === "havo" ? "Havo" : "Vwo"}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id} className="border-b border-grid last:border-b-0">
              <th scope="row" className="px-4 py-3 font-serif text-lg font-semibold text-ink">
                <Link href={`/aanbod#${subject.id}`} className="underline-offset-4 hover:underline">
                  {subject.name}
                </Link>
              </th>
              {columns.map((level) => {
                const offered = subject.levels.includes(level.id);
                return (
                  <td key={level.id} className="px-4 py-3 text-center">
                    {offered ? (
                      <span className="inline-grid size-8 place-items-center rounded-full bg-marker font-bold text-ink ring-1 ring-ink">
                        <span aria-hidden="true">✓</span>
                        <span className="sr-only">Ja</span>
                      </span>
                    ) : (
                      <span className="text-muted">
                        <span aria-hidden="true">–</span>
                        <span className="sr-only">Bestaat niet op dit niveau</span>
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
