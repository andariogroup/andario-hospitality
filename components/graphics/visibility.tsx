/** Conceptual visibility diagrams. They are not rankings, traffic or a real property. */

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col gap-2">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
            {index + 1}
          </span>
          <span className="rounded-full bg-sand px-3 py-1.5 text-sm font-semibold text-ink">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export function AndarioVisibilityHeroVisual({
  caption,
  query,
  layers,
}: {
  caption: string;
  query: string;
  layers: string[];
}) {
  const [person, google, web, profile, content, property, useful, next] = layers;
  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 shadow-[var(--shadow-soft)]">
      <figcaption className="sr-only">{caption}</figcaption>
      <ol className="flex flex-col items-center gap-2 text-center">
        <li className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">{person}</li>
        <li className="text-sm text-muted" aria-hidden="true">
          ↓
        </li>
        <li className="rounded-2xl bg-sand px-4 py-2 text-sm font-semibold text-ink">“{query}”</li>
        <li className="text-sm text-muted" aria-hidden="true">
          ↓
        </li>
        <li className="rounded-full border border-sand-deep px-4 py-2 text-sm font-semibold text-ink">{google}</li>
        <li className="grid w-full gap-2 sm:grid-cols-3">
          {[web, profile, content].map((item) => (
            <span key={item} className="rounded-2xl bg-sand px-2 py-3 text-xs font-semibold text-ink">
              {item}
            </span>
          ))}
        </li>
        <li className="rounded-2xl bg-teal px-4 py-2 text-sm font-semibold text-white">{property}</li>
        <li className="text-sm text-ink">{useful}</li>
        <li className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">{next}</li>
      </ol>
      <p className="mt-4 text-sm leading-6 text-muted">{caption}</p>
    </figure>
  );
}

export function VisibilitySystem({
  parts,
  equals,
  note,
  chain,
}: {
  parts: string[];
  equals: string;
  note: string;
  chain: string[];
}) {
  return (
    <figure>
      <ul className="flex flex-wrap gap-2">
        {parts.map((part, index) => (
          <li key={part} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink">
            {index > 0 ? '+ ' : ''}
            {part}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-lg font-semibold text-ink">= {equals}</p>
      <ol className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {chain.map((step, index) => (
          <li key={step} className="rounded-full border border-sand-deep bg-white px-3 py-1.5 text-sm font-semibold text-ink">
            {String(index + 1).padStart(2, '0')} {step}
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function TechnicalSEOMap({ items, caption }: { items: string[]; caption: string }) {
  const columns = [items.slice(0, 4), items.slice(4, 7), items.slice(7)];
  return (
    <figure>
      <div className="grid gap-3 sm:grid-cols-3">
        {columns.map((column) => (
          <ul key={column[0]} className="rounded-[var(--radius-card)] bg-sand p-4">
            {column.map((item) => (
              <li key={item} className="py-1 text-sm font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{caption}</figcaption>
    </figure>
  );
}

export function LocalSEOFlow({ steps, note }: { steps: string[]; note: string }) {
  return (
    <figure>
      <Flow steps={steps} />
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function GoogleUnderstanding({
  parts,
  note,
}: {
  parts: { title: string; body: string }[];
  note: string;
}) {
  return (
    <figure>
      <ul className="grid gap-3 sm:grid-cols-3">
        {parts.map((part) => (
          <li key={part.title} className="rounded-[var(--radius-card)] bg-white p-4 shadow-[var(--shadow-soft)]">
            <p className="font-semibold text-ink">{part.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{part.body}</p>
          </li>
        ))}
      </ul>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function SearchConsoleMockup({ rows, label }: { rows: string[]; label: string }) {
  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 shadow-[var(--shadow-soft)]">
      <p className="text-xs font-semibold tracking-[0.12em] text-teal">GOOGLE SEARCH CONSOLE</p>
      <figcaption className="mt-1 text-sm font-semibold text-ink">{label}</figcaption>
      <ul className="mt-4 divide-y divide-sand-deep">
        {rows.map((row) => (
          <li key={row} className="flex items-center justify-between py-2 text-sm text-ink">
            <span>{row}</span>
            <span className="h-2 w-16 rounded-full bg-sand" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </figure>
  );
}

export function SearchIntentFlow({
  steps,
  intents,
  note,
}: {
  steps: string[];
  intents: { query: string; intent: string }[];
  note: string;
}) {
  return (
    <figure>
      <Flow steps={steps} />
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {intents.map((item) => (
          <li key={item.query} className="rounded-[var(--radius-card)] bg-sand p-4">
            <p className="font-semibold text-ink">“{item.query}”</p>
            <p className="mt-1 text-sm text-muted">{item.intent}</p>
          </li>
        ))}
      </ul>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function VisibilityEcosystem({
  caption,
  columns,
}: {
  caption: string;
  columns: { title: string; points: string[] }[];
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
      <p className="mt-4 text-center text-sm font-semibold text-teal" aria-hidden="true">
        ↓
      </p>
      <figcaption className="mt-2 text-center text-sm leading-6 text-muted">{caption}</figcaption>
    </figure>
  );
}

export function DiscoveryToBookingFlow({ steps, note }: { steps: string[]; note: string }) {
  return (
    <figure>
      <Flow steps={steps} />
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function VisibilityFindingAction({ items }: { items: { label: string; value: string }[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <li key={item.label} className="rounded-[var(--radius-card)] bg-sand p-4">
          <p className="text-xs font-semibold text-teal">{String(index + 1).padStart(2, '0')} {item.label}</p>
          <p className="mt-2 text-sm leading-6 text-ink">{item.value}</p>
        </li>
      ))}
    </ol>
  );
}

export function VisibilityProcess({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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

export function VisibilityMatrix({
  center,
  points,
  note,
}: {
  center: string;
  points: string[];
  note: string;
}) {
  return (
    <figure>
      <div className="mx-auto grid max-w-xl gap-2">
        <p className="justify-self-center rounded-full bg-sand px-4 py-2 text-sm font-semibold text-ink">{points[0]}</p>
        <p className="justify-self-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-[var(--shadow-soft)]">
          {points[1]}
        </p>
        <div className="grid items-center gap-2 sm:grid-cols-[1fr_auto_1fr]">
          <p className="rounded-full bg-sand px-4 py-2 text-center text-sm font-semibold text-ink">{points[2]}</p>
          <p className="rounded-full bg-teal px-4 py-2 text-center text-sm font-semibold text-white">{center}</p>
          <p className="rounded-full bg-sand px-4 py-2 text-center text-sm font-semibold text-ink">{points[3]}</p>
        </div>
        <p className="justify-self-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-[var(--shadow-soft)]">
          {points[4]}
        </p>
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}
