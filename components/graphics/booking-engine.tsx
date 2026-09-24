import type { ProductStatus } from '@/content/types';

function Pill({
  name,
  status,
  availableLabel,
  roadmapLabel,
}: {
  name: string;
  status: ProductStatus;
  availableLabel: string;
  roadmapLabel: string;
}) {
  const live = status === 'available';
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-sand-deep bg-white px-3 py-1.5 text-sm text-ink">
      {name}
      <span className={live ? 'rounded-full bg-teal-wash px-2 py-0.5 text-xs font-semibold text-teal-dark' : 'rounded-full bg-sand-deep px-2 py-0.5 text-xs font-semibold text-ink'}>
        {live ? availableLabel : roadmapLabel}
      </span>
    </span>
  );
}

export function EngineHub({
  caption,
  core,
  channels,
  outcomes,
  availableLabel,
  roadmapLabel,
}: {
  caption: string;
  core: string;
  channels: { name: string; status: ProductStatus }[];
  outcomes: string[];
  availableLabel: string;
  roadmapLabel: string;
}) {
  return (
    <figure className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6">
      <figcaption className="sr-only">{caption}</figcaption>
      <div className="flex flex-wrap gap-2">
        {channels.map((channel) => (
          <Pill key={channel.name} {...channel} availableLabel={availableLabel} roadmapLabel={roadmapLabel} />
        ))}
      </div>
      <div aria-hidden="true" className="mx-auto my-4 h-8 w-px bg-teal" />
      <div className="rounded-2xl bg-ink px-4 py-5 text-center text-white">
        <p className="text-xs font-semibold tracking-[0.16em] text-teal-wash">ANDARIO</p>
        <p className="mt-1 text-lg font-semibold">{core}</p>
      </div>
      <div aria-hidden="true" className="mx-auto my-4 h-8 w-px bg-teal" />
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {outcomes.map((item, index) => (
          <li
            key={item}
            className="animate-dc-fade rounded-2xl bg-sand px-3 py-3 text-center text-sm font-semibold text-ink"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </figure>
  );
}

export function BeforeAfter({
  beforeTitle,
  beforeCaption,
  beforeChannels,
  beforeResult,
  afterTitle,
  afterCaption,
  afterChannels,
  afterResult,
}: {
  beforeTitle: string;
  beforeCaption: string;
  beforeChannels: string[];
  beforeResult: string;
  afterTitle: string;
  afterCaption: string;
  afterChannels: string[];
  afterResult: string;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <figure className="rounded-[var(--radius-card)] border border-dashed border-sand-deep bg-sand p-5">
        <figcaption>
          <p className="font-semibold text-ink">{beforeTitle}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{beforeCaption}</p>
        </figcaption>
        <ul className="mt-5 flex flex-wrap gap-2">
          {beforeChannels.map((channel) => (
            <li key={channel} className="rounded-full bg-white px-3 py-1 text-sm text-ink">
              {channel}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm font-semibold text-ink">{beforeResult}</p>
      </figure>
      <figure className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
        <figcaption>
          <p className="font-semibold text-ink">{afterTitle}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{afterCaption}</p>
        </figcaption>
        <ul className="mt-5 flex flex-wrap gap-2">
          {afterChannels.map((channel) => (
            <li key={channel} className="rounded-full bg-teal-wash px-3 py-1 text-sm text-teal-dark">
              {channel}
            </li>
          ))}
        </ul>
        <div aria-hidden="true" className="mx-auto my-4 h-6 w-px bg-teal" />
        <p className="rounded-2xl bg-ink px-3 py-3 text-center text-sm font-semibold text-white">Booking Engine</p>
        <p className="mt-4 text-sm font-semibold text-teal-dark">{afterResult}</p>
      </figure>
    </div>
  );
}

export function BookingFlow({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2">
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

export function ReservationSketch({
  title,
  note,
  rows,
}: {
  title: string;
  note: string;
  rows: { label: string; value: string }[];
}) {
  return (
    <figure className="mx-auto max-w-md rounded-[var(--radius-card)] border border-sand-deep bg-white p-6 shadow-[var(--shadow-soft)]">
      <figcaption className="text-lg font-semibold text-ink">
        {title}
        {note ? <span className="mt-2 block text-sm font-normal leading-6 text-muted">{note}</span> : null}
      </figcaption>
      <dl className="mt-5 divide-y divide-sand-deep">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4 py-2 text-sm">
            <dt className="text-muted">{row.label}</dt>
            <dd className="font-semibold text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}

export function RoadmapTimeline({
  items,
  availableLabel,
  roadmapLabel,
}: {
  items: { label: string; status: ProductStatus }[];
  availableLabel: string;
  roadmapLabel: string;
}) {
  return (
    <ol className="relative space-y-3 border-l border-sand-deep pl-6">
      {items.map((item) => (
        <li key={item.label} className="relative">
          <span
            aria-hidden="true"
            className={item.status === 'available' ? 'absolute top-2 -left-[1.7rem] h-3 w-3 rounded-full bg-teal' : 'absolute top-2 -left-[1.7rem] h-3 w-3 rounded-full border-2 border-sand-deep bg-white'}
          />
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-ink">{item.label}</span>
            <span className={item.status === 'available' ? 'rounded-full bg-teal-wash px-2 py-0.5 text-xs font-semibold text-teal-dark' : 'rounded-full bg-sand-deep px-2 py-0.5 text-xs font-semibold text-ink'}>
              {item.status === 'available' ? availableLabel : roadmapLabel}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}
