function Chip({ children, tone = 'sand' }: { children: string; tone?: 'sand' | 'teal' | 'ink' }) {
  const styles = {
    sand: 'border border-sand-deep bg-sand text-ink',
    teal: 'bg-teal text-white',
    ink: 'bg-ink text-white',
  } as const;

  return (
    <span className={`inline-flex items-center justify-center justify-self-center rounded-full px-3 py-2 text-center text-sm font-semibold ${styles[tone]}`}>
      {children}
    </span>
  );
}

export function FlowSteps({
  steps,
  caption,
  chip = 'sand',
}: {
  steps: string[];
  caption?: string;
  chip?: 'sand' | 'white';
}) {
  return (
    <figure>
      {caption ? <figcaption className="mb-4 max-w-3xl text-sm leading-6 text-muted">{caption}</figcaption> : null}
      <ol className="flex flex-col gap-2">
        {steps.map((step, index) => (
          <li key={`${step}-${index}`} className="relative flex min-w-0 items-center gap-3">
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="absolute top-7 left-[13px] h-[calc(100%+0.5rem)] w-px bg-teal/30" />
            ) : null}
            <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={`min-w-0 rounded-2xl px-3 py-1.5 text-sm font-semibold text-ink ${chip === 'white' ? 'bg-white' : 'bg-sand'}`}>{step}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function SolutionsHeroMap({
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
  const [visibility, content, web, booking, connect, growth, check] = nodes;

  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 shadow-[var(--shadow-soft)]">
      <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>
      {nodes.length === 7 ? (
        <div className="mt-6 hidden grid-cols-3 items-center gap-3 md:grid" aria-hidden="true">
          <span />
          <Chip>{visibility}</Chip>
          <span />
          <Chip>{content}</Chip>
          <Chip tone="teal">{center}</Chip>
          <Chip>{web}</Chip>
          <span />
          <Chip>{booking}</Chip>
          <span />
          <Chip>{connect}</Chip>
          <span />
          <Chip>{growth}</Chip>
          <span />
          <Chip tone="ink">{check}</Chip>
          <span />
        </div>
      ) : null}
      <ol className="mt-6 grid gap-2 md:hidden">
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

export function BookingHub({
  title,
  branches,
  result,
  note,
}: {
  title: string;
  branches: { title: string; body: string }[];
  result: string;
  note: string;
}) {
  return (
    <figure className="rounded-[var(--radius-card)] border border-teal/30 bg-white p-5 shadow-[var(--shadow-soft)]">
      <figcaption className="sr-only">{note}</figcaption>
      <p className="text-center text-sm font-semibold tracking-[0.12em] text-teal">{title}</p>
      <ul className="mt-5 grid gap-3 md:grid-cols-3">
        {branches.map((branch) => (
          <li key={branch.title} className="rounded-2xl bg-sand p-4">
            <p className="font-semibold text-ink">{branch.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{branch.body}</p>
          </li>
        ))}
      </ul>
      <p aria-hidden="true" className="mt-4 text-center text-teal">
        ↓
      </p>
      <p className="mx-auto mt-2 w-fit rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">{result}</p>
      <p className="mt-4 text-sm leading-6 text-muted">{note}</p>
    </figure>
  );
}

export function BeforeAfter({
  beforeLabel,
  before,
  beforeNote,
  afterLabel,
  after,
  note,
}: {
  beforeLabel: string;
  before: string[];
  beforeNote?: string;
  afterLabel: string;
  after: string[];
  note: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-sand p-5">
        <figcaption className="font-semibold text-ink">{beforeLabel}</figcaption>
        <ul className="mt-4 flex flex-wrap gap-2">
          {before.map((item) => (
            <li key={item} className="rounded-full border border-sand-deep bg-white px-3 py-1.5 text-sm font-semibold text-ink">
              {item}
            </li>
          ))}
        </ul>
        {beforeNote ? <p className="mt-4 text-sm font-semibold text-ink">{beforeNote}</p> : null}
      </figure>
      <div className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5">
        <p className="mb-4 font-semibold text-ink">{afterLabel}</p>
        <FlowSteps steps={after} caption={note} />
      </div>
    </div>
  );
}

export function PillarGrid({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {items.map((item, index) => (
        <li key={item.title} className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-6 sm:p-7">
          <p aria-hidden="true" className="text-sm font-semibold text-teal">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
