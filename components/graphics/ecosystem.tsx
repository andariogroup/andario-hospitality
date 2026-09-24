function Node({ x, y, label, delay }: { x: number; y: number; label: string; delay: string }) {
  return (
    <g className="animate-dc-pop" style={{ animationDelay: delay }}>
      <rect x={x - 58} y={y - 18} width="116" height="36" rx="18" className="fill-sand stroke-sand-deep" />
      <text x={x} y={y + 5} textAnchor="middle" className="fill-ink text-[13px] font-semibold">
        {label}
      </text>
    </g>
  );
}

export function PropertyEcosystem({
  center,
  nodes,
  mobile,
  caption,
}: {
  center: string;
  nodes: string[];
  mobile: string[];
  caption: string;
}) {
  const spots = [
    { x: 280, y: 46 },
    { x: 78, y: 150 },
    { x: 482, y: 150 },
    { x: 104, y: 268 },
    { x: 456, y: 268 },
    { x: 168, y: 360 },
    { x: 392, y: 360 },
  ];
  const hub = { x: 280, y: 188 };

  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 shadow-[var(--shadow-soft)]">
      <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>
      <ul className="sr-only max-md:hidden">
        <li>{center}</li>
        {nodes.map((node) => (
          <li key={node}>{node}</li>
        ))}
      </ul>
      {nodes.length === spots.length ? (
        <svg viewBox="0 0 560 410" className="mt-4 hidden h-auto w-full md:block" aria-hidden="true">
          {spots.map((spot, index) => (
            <line
              key={`${spot.x}-${spot.y}`}
              x1={hub.x}
              y1={hub.y}
              x2={spot.x}
              y2={spot.y}
              className="animate-dc-draw stroke-teal/45"
              strokeWidth="1.5"
              strokeDasharray="180"
              strokeDashoffset="180"
              style={{ animationDelay: `${index * 0.08}s` }}
            />
          ))}
          {spots.map((spot, index) => {
            const label = nodes[index];
            if (!label) return null;
            return <Node key={label} x={spot.x} y={spot.y} label={label} delay={`${0.15 + index * 0.08}s`} />;
          })}
          <g className="animate-dc-pop">
            <rect x={hub.x - 74} y={hub.y - 22} width="148" height="44" rx="22" className="fill-teal" />
            <text x={hub.x} y={hub.y + 5} textAnchor="middle" className="fill-white text-[13px] font-semibold">
              {center}
            </text>
          </g>
        </svg>
      ) : null}
      <ol className="mt-4 grid gap-2 md:hidden">
        <li className="flex items-center gap-3">
          <span aria-hidden="true" className="h-7 w-7 shrink-0 rounded-full bg-ink" />
          <span className="text-sm font-semibold text-ink">{center}</span>
        </li>
        {mobile.map((step, index) => (
          <li key={step} className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-sm font-semibold text-ink">{step}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function NeedStrategy({ steps, caption }: { steps: string[]; caption: string }) {
  const [property, web, whatsapp, google, content, bookings, visibility, engine, growth] = steps;
  const ready = steps.length === 9 && property && engine && growth;

  return (
    <figure>
      <figcaption className="mb-4 text-sm leading-6 text-muted">{caption}</figcaption>
      {ready ? (
        <div className="flex flex-col items-center gap-3">
          <span className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white">{property}</span>
          <span aria-hidden="true" className="text-teal">
            ↓
          </span>
          <ul className="grid w-full gap-2 sm:grid-cols-3">
            {[web, whatsapp, google].map((item) => (
              <li key={item} className="rounded-full bg-sand px-3 py-2 text-center text-sm font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="text-teal">
            ↓
          </span>
          <ul className="grid w-full gap-2 sm:grid-cols-3">
            {[content, bookings, visibility].map((item) => (
              <li key={item} className="rounded-full border border-sand-deep bg-white px-3 py-2 text-center text-sm font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="text-teal">
            ↓
          </span>
          <span className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">{engine}</span>
          <span aria-hidden="true" className="text-teal">
            ↓
          </span>
          <span className="rounded-full bg-teal-wash px-4 py-2 text-sm font-semibold text-ink">{growth}</span>
        </div>
      ) : null}
    </figure>
  );
}
