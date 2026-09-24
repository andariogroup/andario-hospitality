/** Conceptual measurement diagrams. They do not show a property’s numbers. */

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

export function GrowthDataLoop({ steps, note, label }: { steps: string[]; note: string; label: string }) {
  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 shadow-[var(--shadow-soft)]">
      <figcaption className="text-sm font-semibold text-ink">{label}</figcaption>
      <ol className="mt-4 grid gap-2">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
              {index + 1}
            </span>
            <span className="rounded-full bg-sand px-3 py-1.5 text-sm font-semibold text-ink">{step}</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm leading-6 text-muted">{note}</p>
    </figure>
  );
}

export function GrowthDecisionHub({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className="rounded-[var(--radius-card)] bg-ink p-4 text-white">
          <p className="font-semibold">{item.title}</p>
          <p className="mt-2 text-sm text-white/80">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function GrowthSourceScatter({ sources, note }: { sources: string[]; note: string }) {
  return (
    <figure>
      <ul className="flex flex-wrap gap-2">
        {sources.map((source) => (
          <li key={source} className="rounded-full border border-sand-deep bg-white px-3 py-1.5 text-sm font-semibold text-ink">
            {source}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm font-semibold text-teal">↓</p>
      <figcaption className="mt-2 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function GrowthEcosystem({
  caption,
  columns,
}: {
  caption: string;
  columns: { title: string; points: string[] }[];
}) {
  return (
    <figure>
      <div className="grid gap-3 lg:grid-cols-3">
        {columns.map((column) => (
          <div key={column.title} className="rounded-[var(--radius-card)] bg-white p-4 shadow-[var(--shadow-soft)]">
            <p className="font-semibold text-ink">{column.title}</p>
            <ul className="mt-3 space-y-1">
              {column.points.map((point) => (
                <li key={point} className="text-sm text-muted">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{caption}</figcaption>
    </figure>
  );
}

export function GrowthMeasureMap({
  groups,
  note,
}: {
  groups: { title: string; items: string[] }[];
  note: string;
}) {
  return (
    <figure>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title} className="rounded-[var(--radius-card)] bg-sand p-4">
            <p className="font-semibold text-ink">{group.title}</p>
            <ul className="mt-3 space-y-1">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
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

export function GrowthProcess({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
