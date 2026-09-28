export function MethodTimeline({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="mt-12 flex flex-col lg:flex-row lg:items-start">
      {steps.map((step, index) => (
        <li key={step.title} className="relative flex flex-1 gap-4 pb-8 last:pb-0 lg:flex-col lg:pb-0 lg:pr-8">
          {index < steps.length - 1 ? (
            <span aria-hidden="true" className="absolute top-3.5 left-[13px] h-[calc(100%-0.25rem)] w-px bg-teal/30 lg:top-[13px] lg:left-7 lg:h-px lg:w-[calc(100%-1.75rem)]" />
          ) : null}
          <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0 lg:mt-4">
            <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function DigitalCheckPanel({
  name,
  rows,
  label,
}: {
  name: string;
  rows: { label: string; mark: string; status: string }[];
  label: string;
}) {
  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-sand p-6 sm:p-8">
      <figcaption className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{name}</figcaption>
      <ul className="mt-6 divide-y divide-sand-deep">
        {rows.map((row) => (
          <li key={row.label} className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm font-semibold text-ink">{row.label}</span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal">
              <span aria-hidden="true">{row.mark}</span>
              <span className="text-muted">{row.status}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">{label}</p>
    </figure>
  );
}

export function DeliverableSheet({
  title,
  items,
  label,
}: {
  title: string;
  items: string[];
  label: string;
}) {
  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-6 sm:p-8">
      <figcaption className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">{title}</figcaption>
      <ol className="mt-6">
        {items.map((item, index) => (
          <li key={item} className="flex items-center gap-3 border-b border-sand-deep py-3 text-sm font-semibold text-ink last:border-b-0">
            <span aria-hidden="true" className="text-teal">
              {String(index + 1).padStart(2, '0')}
            </span>
            {item}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm text-muted">{label}</p>
    </figure>
  );
}
