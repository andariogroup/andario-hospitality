/** Conceptual website diagrams. They are not screenshots of a real property. */

export function AndarioWebHeroVisual({ caption, nav, hero }: { caption: string; nav: string[]; hero: string }) {
  return (
    <figure className="overflow-hidden rounded-[var(--radius-card)] border border-sand-deep bg-white shadow-[var(--shadow-soft)]">
      <figcaption className="sr-only">{caption}</figcaption>
      <div className="flex items-center justify-between gap-3 bg-sand px-4 py-3">
        <span className="h-3 w-10 rounded-full bg-ink" />
        <span className="hidden gap-2 sm:flex">
          {nav.slice(0, 2).map((item) => (
            <span key={item} className="text-xs text-muted">
              {item}
            </span>
          ))}
        </span>
        <span className="rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">{nav[2] ?? ''}</span>
      </div>
      <div className="bg-ink px-6 py-8 text-white">
        <svg viewBox="0 0 220 72" className="h-14 w-36" aria-hidden="true">
          <path d="M16 44L64 14L112 44" fill="#E8DDCC" />
          <rect x="30" y="44" width="66" height="24" rx="3" fill="#F8F5EF" />
          <circle cx="168" cy="24" r="12" fill="#FFC857" />
        </svg>
        <p className="mt-4 max-w-xs text-lg font-semibold">{hero}</p>
        <span className="mt-4 inline-flex rounded-full bg-teal px-4 py-2 text-sm font-semibold">{nav[0]}</span>
      </div>
      <ul className="grid grid-cols-3 gap-2 p-4">
        {nav.slice(0, 3).map((item) => (
          <li key={item} className="rounded-2xl bg-sand px-2 py-3 text-center text-xs font-semibold text-ink">
            {item}
          </li>
        ))}
      </ul>
    </figure>
  );
}

export function WebsiteAnatomy({ caption, items }: { caption: string; items: { title: string; body: string }[] }) {
  return (
    <figure>
      <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>
      <ol className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <li key={item.title} className="rounded-[var(--radius-card)] bg-white p-4 shadow-[var(--shadow-soft)]">
            <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
            <p className="mt-1 font-semibold text-ink">{item.title}</p>
            <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function GuestJourney({ steps, note }: { steps: { title: string; body: string }[]; note: string }) {
  return (
    <figure>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-[var(--radius-card)] bg-sand p-4">
            <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
            <p className="mt-1 font-semibold text-ink">{step.title}</p>
            <p className="mt-1 text-sm leading-6 text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function WebsiteConversionFlow({ steps, around, note }: { steps: string[]; around: string[]; note: string }) {
  return (
    <figure>
      <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {steps.map((step, index) => (
          <li key={step} className="rounded-full bg-ink px-3 py-1.5 text-sm font-semibold text-white">
            {String(index + 1).padStart(2, '0')} {step}
          </li>
        ))}
      </ol>
      <ul className="mt-4 flex flex-wrap gap-2">
        {around.map((item) => (
          <li key={item} className="rounded-full border border-sand-deep px-3 py-1 text-sm text-ink">
            {item}
          </li>
        ))}
      </ul>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function WebsiteMockup({
  note,
  nav,
  hero,
  blocks,
}: {
  note: string;
  nav: string[];
  hero: string;
  blocks: string[];
}) {
  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 shadow-[var(--shadow-soft)]">
      <figcaption className="text-sm leading-6 text-muted">{note}</figcaption>
      <div className="mt-4 overflow-hidden rounded-2xl border border-sand-deep">
        <div className="flex items-center justify-between bg-sand px-4 py-3">
          <span className="h-2.5 w-8 rounded-full bg-ink" />
          <span className="rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">{nav[2]}</span>
        </div>
        <div className="bg-ink px-5 py-8 text-white">
          <p className="text-lg font-semibold">{hero}</p>
          <div className="mt-4 h-16 rounded-xl bg-white/10" />
        </div>
        <ul className="grid gap-2 p-4 sm:grid-cols-2">
          {blocks.map((block) => (
            <li key={block} className="rounded-xl bg-sand px-3 py-3 text-sm font-semibold text-ink">
              {block}
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}

export function WebsiteProcess({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-3">
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-4 rounded-[var(--radius-card)] bg-white p-4 shadow-[var(--shadow-soft)]">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-semibold text-white">
            {index + 1}
          </span>
          <span>
            <span className="block font-semibold text-ink">{step.title}</span>
            <span className="mt-1 block text-sm leading-6 text-muted">{step.body}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function WebsiteIntegrationMap({ steps, note }: { steps: string[]; note: string }) {
  return (
    <figure>
      <ol className="space-y-2">
        {steps.map((step, index) => (
          <li key={step} className="rounded-2xl bg-sand px-4 py-3 text-sm font-semibold text-ink">
            <span className="mr-2 text-teal">{String(index + 1).padStart(2, '0')}</span>
            {step}
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function BeforeAfterWeb({
  example,
  beforeLabel,
  beforeItems,
  afterLabel,
  afterItems,
}: {
  example: string;
  beforeLabel: string;
  beforeItems: string[];
  afterLabel: string;
  afterItems: string[];
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <figure className="rounded-[var(--radius-card)] border border-dashed border-sand-deep p-5">
        <figcaption className="font-semibold text-ink">{beforeLabel}</figcaption>
        <p className="mt-2 text-sm text-muted">{example}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {beforeItems.map((item) => (
            <li key={item} className="rounded-full bg-sand px-3 py-1 text-sm text-ink">
              {item}
            </li>
          ))}
        </ul>
      </figure>
      <figure className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
        <figcaption className="font-semibold text-ink">{afterLabel}</figcaption>
        <p className="mt-2 text-sm text-muted">{example}</p>
        <ul className="mt-4 space-y-2">
          {afterItems.map((item) => (
            <li key={item} className="rounded-2xl bg-teal-wash px-3 py-2 text-sm font-semibold text-teal-dark">
              {item}
            </li>
          ))}
        </ul>
      </figure>
    </div>
  );
}
