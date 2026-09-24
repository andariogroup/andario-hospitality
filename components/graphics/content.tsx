/** Conceptual content diagrams. They are not photographs of a real property. */

export function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col gap-2">
      {steps.map((step, index) => (
        <li key={`${step}-${index}`} className="flex items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
            {index + 1}
          </span>
          <span className="rounded-full bg-sand px-3 py-1.5 text-sm font-semibold text-ink">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export function AndarioContentHeroVisual({ layers, caption, label }: { layers: string[]; caption: string; label: string }) {
  const [place, photos, words, video, experience, guest] = layers;
  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 shadow-[var(--shadow-soft)]">
      <figcaption className="text-sm font-semibold text-ink">{label}</figcaption>
      <div className="mt-4 grid gap-2 text-center">
        <p className="rounded-full bg-ink px-3 py-2 text-sm font-semibold text-white">{place}</p>
        <div className="grid grid-cols-3 gap-2">
          {[photos, words, video].map((item) => (
            <div key={item} className="rounded-2xl bg-sand px-2 py-6">
              <span className="mx-auto mb-3 block h-10 w-full rounded-xl bg-white" aria-hidden="true" />
              <p className="text-xs font-semibold text-ink">{item}</p>
            </div>
          ))}
        </div>
        <p className="rounded-2xl bg-teal px-3 py-2 text-sm font-semibold text-white">{experience}</p>
        <p className="text-sm font-semibold text-ink">{guest}</p>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{caption}</p>
    </figure>
  );
}

export function AccommodationContentSystem({
  caption,
  columns,
  parts,
  equals,
}: {
  caption: string;
  columns: { title: string; points: string[] }[];
  parts: string[];
  equals: string;
}) {
  return (
    <figure>
      <div className="grid gap-3 sm:grid-cols-3">
        {columns.map((column) => (
          <div key={column.title} className="rounded-[var(--radius-card)] bg-ink p-4 text-white">
            <p className="font-semibold">{column.title}</p>
            <ul className="mt-3 space-y-1">
              {column.points.map((point) => (
                <li key={point} className="text-sm text-white/80">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {parts.map((part) => (
          <li key={part} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink">
            {part}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-semibold text-ink">= {equals}</p>
      <figcaption className="mt-3 text-sm leading-6 text-muted">{caption}</figcaption>
    </figure>
  );
}

export function GuestDecisionJourney({ questions, steps, note }: { questions: { q: string; a: string }[]; steps: string[]; note: string }) {
  return (
    <figure>
      <ul className="grid gap-3 sm:grid-cols-2">
        {questions.map((item) => (
          <li key={item.q} className="rounded-[var(--radius-card)] bg-sand p-4">
            <p className="font-semibold text-ink">{item.q}</p>
            <p className="mt-1 text-sm text-muted">{item.a}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <StepList steps={steps} />
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function PhotographyShowcase({
  items,
  note,
}: {
  items: { title: string; body: string }[];
  note: string;
}) {
  return (
    <figure>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.title} className="overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)]">
            <div className="h-16 bg-sand" aria-hidden="true" />
            <div className="p-4">
              <p className="font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function GalleryStory({ steps, note }: { steps: string[]; note: string }) {
  return (
    <figure>
      <StepList steps={steps} />
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function EditorialPlanning({ steps, categories, note }: { steps: string[]; categories: string[]; note: string }) {
  return (
    <figure>
      <StepList steps={steps} />
      <ul className="mt-4 flex flex-wrap gap-2">
        {categories.map((item) => (
          <li key={item} className="rounded-full border border-sand-deep bg-white px-3 py-1 text-sm text-ink">
            {item}
          </li>
        ))}
      </ul>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function ContentBeforeAfter({
  label,
  beforeLabel,
  before,
  afterLabel,
  after,
  note,
}: {
  label: string;
  beforeLabel: string;
  before: string[];
  afterLabel: string;
  after: string[];
  note: string;
}) {
  return (
    <figure>
      <figcaption className="text-sm font-semibold text-teal">{label}</figcaption>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[var(--radius-card)] border border-sand-deep p-4">
          <p className="text-xs font-semibold text-muted">{beforeLabel}</p>
          <ul className="mt-3 space-y-1">
            {before.map((item) => (
              <li key={item} className="text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[var(--radius-card)] bg-ink p-4 text-white">
          <p className="text-xs font-semibold text-white/70">{afterLabel}</p>
          <ul className="mt-3 space-y-1">
            {after.map((item) => (
              <li key={item} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{note}</p>
    </figure>
  );
}

export function ContentReuseMatrix({
  center,
  around,
  columns,
  rows,
  note,
}: {
  center: string;
  around: string[];
  columns: string[];
  rows: { name: string; cells: string[] }[];
  note: string;
}) {
  return (
    <figure>
      <p className="text-center text-sm font-semibold text-teal">{center}</p>
      <ul className="mt-3 flex flex-wrap justify-center gap-2">
        {around.map((item) => (
          <li key={item} className="rounded-full bg-sand px-3 py-1.5 text-sm font-semibold text-ink">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6 grid gap-3">
        {rows.map((row) => (
          <div key={row.name} className="rounded-[var(--radius-card)] bg-white p-4 shadow-[var(--shadow-soft)]">
            <p className="font-semibold text-ink">{row.name}</p>
            <ul className="mt-2 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
              {row.cells.map((cell, index) => (
                <li key={`${row.name}-${columns[index]}`} className="text-sm text-muted">
                  <span className="font-semibold text-ink">{columns[index]}: </span>
                  {cell}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function ContentProcess({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-[var(--radius-card)] bg-white p-4 shadow-[var(--shadow-soft)]">
          <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')}</p>
          <p className="mt-1 font-semibold text-ink">{step.title}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function ContentAuthenticity({ points }: { points: string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {points.map((point) => (
        <li key={point} className="rounded-2xl bg-sand px-3 py-2 text-sm text-ink">
          {point}
        </li>
      ))}
    </ul>
  );
}

export function ContentEcosystem({ steps, note }: { steps: string[]; note: string }) {
  return (
    <figure>
      <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {steps.map((step, index) => (
          <li key={`${step}-${index}`} className="rounded-full border border-sand-deep bg-white px-3 py-1.5 text-sm font-semibold text-ink">
            {String(index + 1).padStart(2, '0')} {step}
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}
