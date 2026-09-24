/** Conceptual diagrams for Digital Check. Examples are labeled as illustrations, not client results. */

export function DigitalCheckOverview({
  caption,
  pieces,
  core,
  result,
}: {
  caption: string;
  pieces: string[];
  core: string;
  result: string[];
}) {
  return (
    <figure className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6">
      <figcaption className="sr-only">{caption}</figcaption>
      <ul className="flex flex-wrap gap-2">
        {pieces.map((piece) => (
          <li key={piece} className="rounded-full bg-sand px-3 py-1.5 text-sm font-semibold text-ink">
            {piece}
          </li>
        ))}
      </ul>
      <div aria-hidden="true" className="mx-auto my-4 h-8 w-px bg-teal" />
      <p className="rounded-2xl bg-ink px-4 py-4 text-center text-lg font-semibold text-white">{core}</p>
      <div aria-hidden="true" className="mx-auto my-4 h-8 w-px bg-teal" />
      <ol className="grid gap-2 sm:grid-cols-3">
        {result.map((item, index) => (
          <li key={item} className="rounded-2xl bg-teal-wash px-3 py-3 text-center text-sm font-semibold text-teal-dark">
            <span className="mb-1 block text-xs">{String(index + 1).padStart(2, '0')}</span>
            {item}
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function DigitalEcosystemMap({ caption, center, nodes }: { caption: string; center: string; nodes: string[] }) {
  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-sand p-5">
      <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>
      <p className="mx-auto mt-5 max-w-xs rounded-2xl bg-ink px-4 py-4 text-center font-semibold text-white">{center}</p>
      <ul className="mt-5 flex flex-wrap justify-center gap-2">
        {nodes.map((node) => (
          <li key={node} className="rounded-full bg-white px-3 py-1.5 text-sm text-ink">
            {node}
          </li>
        ))}
      </ul>
    </figure>
  );
}

export function DiagnosticMethodology({ steps }: { steps: { title: string; body: string }[] }) {
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

export function PriorityMatrix({
  example,
  impact,
  effort,
  zones,
  points,
}: {
  example: string;
  impact: string;
  effort: string;
  zones: { title: string; body: string }[];
  points: string[];
}) {
  return (
    <figure>
      <figcaption className="text-sm leading-6 text-muted">{example}</figcaption>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {zones.map((zone) => (
          <div key={zone.title} className="rounded-2xl bg-sand p-4">
            <p className="font-semibold text-ink">{zone.title}</p>
            <p className="mt-1 text-sm leading-6 text-muted">{zone.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs font-semibold tracking-wide text-teal">
        {impact} · {effort}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {points.map((point) => (
          <li key={point} className="rounded-full border border-dashed border-sand-deep px-3 py-1 text-sm text-ink">
            {point}
          </li>
        ))}
      </ul>
    </figure>
  );
}

export function FindingToAction({ example, steps }: { example: string; steps: { label: string; value: string }[] }) {
  return (
    <figure className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
      <figcaption className="text-sm leading-6 text-muted">{example}</figcaption>
      <ol className="mt-4 space-y-3">
        {steps.map((step, index) => (
          <li key={step.label}>
            {index > 0 ? <div aria-hidden="true" className="mb-3 h-4 w-px bg-teal" /> : null}
            <p className="text-xs font-semibold tracking-wide text-teal">{step.label}</p>
            <p className="mt-1 text-sm leading-6 text-ink">{step.value}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function DiagnosticReportMockup({
  note,
  brand,
  heading,
  rows,
  prioritiesTitle,
  priorities,
  nextTitle,
  next,
}: {
  note: string;
  brand: string;
  heading: string;
  rows: { label: string; value: string }[];
  prioritiesTitle: string;
  priorities: string[];
  nextTitle: string;
  next: string;
}) {
  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-6 shadow-[var(--shadow-soft)]">
      <figcaption>
        <p className="text-xs font-semibold tracking-[0.14em] text-teal">{brand}</p>
        <p className="mt-2 text-lg font-semibold text-ink">{heading}</p>
        <p className="mt-2 text-sm leading-6 text-muted">{note}</p>
      </figcaption>
      <dl className="mt-5 divide-y divide-sand-deep">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4 py-2 text-sm">
            <dt className="text-muted">{row.label}</dt>
            <dd className="font-semibold text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-xs font-semibold tracking-wide text-teal">{prioritiesTitle}</p>
      <ol className="mt-2 space-y-1">
        {priorities.map((item, index) => (
          <li key={item} className="text-sm text-ink">
            {String(index + 1).padStart(2, '0')} {item}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs font-semibold tracking-wide text-teal">{nextTitle}</p>
      <p className="mt-1 text-sm leading-6 text-ink">{next}</p>
    </figure>
  );
}

export function ServicePath({ services, close }: { services: string[]; close: string }) {
  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        {services.map((service) => (
          <li key={service} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink">
            {service}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm font-semibold text-ink">{close}</p>
    </div>
  );
}
