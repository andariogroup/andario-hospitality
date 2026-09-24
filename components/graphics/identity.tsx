export function BrandTriad({
  brand,
  columns,
  lodging,
  caption,
}: {
  brand: string;
  columns: { title: string; detail: string }[];
  lodging: string;
  caption: string;
}) {
  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 shadow-[var(--shadow-soft)]">
      <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>
      <div className="mt-6 flex flex-col items-center">
        <p className="animate-dc-fade rounded-full bg-teal px-4 py-2 text-center text-sm font-semibold text-white">{brand}</p>
        <span aria-hidden="true" className="h-8 w-px bg-teal/35" />
        <div className="relative grid w-full gap-6 md:grid-cols-3">
          <span aria-hidden="true" className="absolute top-0 right-[16%] left-[16%] hidden h-px bg-teal/35 md:block" />
          {columns.map((column, index) => (
            <div
              key={column.title}
              className="animate-dc-fade flex flex-col items-center text-center"
              style={{ animationDelay: `${0.12 + index * 0.08}s` }}
            >
              <span aria-hidden="true" className="mb-3 hidden h-6 w-px bg-teal/35 md:block" />
              <p className="rounded-2xl bg-sand px-3 py-2 text-sm font-semibold text-ink">{column.title}</p>
              <span aria-hidden="true" className="my-2 h-6 w-px bg-teal/35" />
              <p className="rounded-2xl border border-sand-deep bg-white px-3 py-2 text-sm font-semibold text-ink">{column.detail}</p>
            </div>
          ))}
        </div>
        <span aria-hidden="true" className="mt-4 h-8 w-px bg-teal/35" />
        <p className="animate-dc-fade rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white" style={{ animationDelay: '0.45s' }}>
          {lodging}
        </p>
      </div>
    </figure>
  );
}

export function PathStack({
  steps,
  caption,
  chip = 'white',
}: {
  steps: string[];
  caption: string;
  chip?: 'white' | 'sand';
}) {
  const chipClass = chip === 'sand' ? 'bg-sand' : 'bg-white';
  return (
    <figure>
      <figcaption className="mb-4 text-sm leading-6 text-muted">{caption}</figcaption>
      <ol className="flex flex-col items-stretch gap-2">
        {steps.map((step, index) => (
          <li
            key={step}
            className="animate-dc-fade flex flex-col items-center"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <span className={`w-full rounded-2xl px-4 py-3 text-center text-sm font-semibold text-ink ${chipClass}`}>{step}</span>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="my-1 h-5 w-px bg-teal/40" />
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function RegionMark({
  origin,
  horizon,
  caption,
}: {
  origin: string;
  horizon: string;
  caption: string;
}) {
  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5">
      <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>
      <div className="relative mx-auto mt-4 aspect-[4/3] max-w-sm">
        <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden="true">
          <circle cx="118" cy="128" r="108" className="fill-none stroke-teal/25" strokeDasharray="3 8" />
          <circle cx="118" cy="128" r="68" className="fill-none stroke-teal/40" strokeDasharray="4 6" />
          <line x1="118" y1="128" x2="230" y2="62" className="animate-dc-draw stroke-teal/50" strokeWidth="1.5" strokeDasharray="140" strokeDashoffset="140" />
          <line x1="118" y1="128" x2="248" y2="150" className="animate-dc-draw stroke-teal/50" strokeWidth="1.5" strokeDasharray="140" strokeDashoffset="140" style={{ animationDelay: '0.15s' }} />
          <line x1="118" y1="128" x2="210" y2="210" className="animate-dc-draw stroke-teal/50" strokeWidth="1.5" strokeDasharray="140" strokeDashoffset="140" style={{ animationDelay: '0.3s' }} />
          <circle cx="118" cy="128" r="8" className="animate-dc-pop fill-teal" />
        </svg>
        <p className="absolute top-[46%] left-[18%] rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">{origin}</p>
        <p className="absolute top-3 right-2 rounded-full bg-sand px-3 py-1 text-xs font-semibold text-ink">{horizon}</p>
      </div>
    </figure>
  );
}

export function Formula({ parts, equals }: { parts: string[]; equals: string }) {
  return (
    <p className="mt-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-ink">
      {parts.map((part, index) => (
        <span key={part} className="inline-flex items-center gap-2">
          {index > 0 ? <span aria-hidden="true" className="text-teal">+</span> : null}
          <span className="rounded-full bg-sand px-3 py-1.5">{part}</span>
        </span>
      ))}
      <span aria-hidden="true" className="text-teal">=</span>
      <span className="rounded-full bg-teal px-3 py-1.5 text-white">{equals}</span>
    </p>
  );
}
