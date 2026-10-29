const points = [
  { x: 80, y: 222, label: "Onderbouw", dx: 12, dy: 20, anchor: "start" },
  { x: 190, y: 150, label: "Havo en vwo", dx: 12, dy: 20, anchor: "start" },
  { x: 315, y: 48, label: "Hbo", dx: -12, dy: 4, anchor: "end" },
] as const;

/** Grafiek in de hero: de niveaus waarop bijles mogelijk is, als punten op een stijgende lijn. */
export function LevelGraph() {
  return (
    <svg
      viewBox="0 0 360 290"
      role="img"
      aria-label="Grafiek met een stijgende lijn langs drie niveaus: onderbouw, havo en vwo, en hbo."
      className="h-auto w-full max-w-md"
    >
      <g stroke="var(--color-graphite)" strokeWidth="1.5" fill="none">
        <path d="M24 270 H350 M344 264 L350 270 L344 276" />
        <path d="M30 276 V12 M24 18 L30 12 L36 18" />
      </g>
      <g fill="var(--color-muted)" fontSize="13" fontFamily="var(--font-body)">
        <text x="350" y="288" textAnchor="end">niveau</text>
      </g>
      <path
        className="draw-curve"
        pathLength={1}
        d="M30 255 C50 245 65 232 80 222 C120 195 155 172 190 150 C240 118 280 80 315 48"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <text
        x="300"
        y="96"
        fill="var(--color-ink)"
        fontSize="20"
        fontStyle="italic"
        fontFamily="var(--font-display)"
        aria-hidden="true"
      >
        f(x)
      </text>
      {points.map((point, index) => (
        <g key={point.label} className="draw-point" style={{ animationDelay: `${0.5 + index * 0.45}s` }}>
          <circle cx={point.x} cy={point.y} r="7" fill="var(--color-marker)" stroke="var(--color-ink)" strokeWidth="2.5" />
          <text
            x={point.x + point.dx}
            y={point.y + point.dy}
            textAnchor={point.anchor}
            fontSize="15"
            fontWeight="700"
            fill="var(--color-graphite)"
            fontFamily="var(--font-body)"
            paintOrder="stroke"
            stroke="#fff"
            strokeWidth="4"
          >
            {point.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
