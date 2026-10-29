/** Toont tekst uit content/site.ts en markeert [nog in te vullen] stukken. */
export function Fill({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g).filter(Boolean);
  return parts.map((part, index) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <mark key={index} className="placeholder" title="Nog invullen in content/site.ts">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

export const isPlaceholder = (text: string) => /\[[^\]]+\]/.test(text);
