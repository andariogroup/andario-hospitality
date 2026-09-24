/** Conceptual communication diagrams. They are not live chats, bookings or a real property. */

export function StepList({ steps }: { steps: string[] }) {
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

export function AndarioConnectHeroVisual({
  caption,
  guest,
  guestMsg,
  reply,
  replyMsg,
  action,
  engine,
  availability,
  reserve,
  label,
}: {
  caption: string;
  guest: string;
  guestMsg: string;
  reply: string;
  replyMsg: string;
  action: string;
  engine: string;
  availability: string;
  reserve: string;
  label: string;
}) {
  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5 shadow-[var(--shadow-soft)]">
      <figcaption className="text-xs font-semibold tracking-[0.12em] text-teal">ANDARIO CONNECT</figcaption>
      <p className="mt-1 text-sm font-semibold text-ink">{label}</p>
      <div className="mt-4 space-y-3">
        <div className="max-w-[16rem] rounded-2xl bg-sand px-3 py-2">
          <p className="text-xs font-semibold text-teal">{guest}</p>
          <p className="text-sm text-ink">“{guestMsg}”</p>
        </div>
        <div className="ml-auto max-w-[16rem] rounded-2xl bg-ink px-3 py-2 text-white">
          <p className="text-xs font-semibold text-white/70">{reply}</p>
          <p className="text-sm">“{replyMsg}”</p>
        </div>
        <p className="rounded-full bg-teal px-3 py-2 text-center text-sm font-semibold text-white">{action}</p>
        <p className="text-center text-sm font-semibold text-ink">
          {engine}
          <span className="mt-1 block font-normal text-muted">{availability}</span>
        </p>
        <p className="rounded-full border border-sand-deep px-3 py-2 text-center text-sm font-semibold text-ink">{reserve}</p>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{caption}</p>
    </figure>
  );
}

export function ConnectHub({
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
      <figcaption className="mt-4 text-sm leading-6 text-muted">{caption}</figcaption>
    </figure>
  );
}

export function ConnectConversationFlow({
  title,
  steps,
  note,
}: {
  title: string;
  steps: { who: string; line: string }[];
  note: string;
}) {
  return (
    <figure className="rounded-[var(--radius-card)] border border-sand-deep bg-white p-5">
      <figcaption className="font-semibold text-ink">{title}</figcaption>
      <ol className="mt-4 space-y-2">
        {steps.map((step) => (
          <li key={`${step.who}-${step.line}`} className="rounded-2xl bg-sand px-3 py-2">
            <p className="text-xs font-semibold text-teal">{step.who}</p>
            <p className="text-sm text-ink">{step.line}</p>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm leading-6 text-muted">{note}</p>
    </figure>
  );
}

export function ConnectBookingIntegration({
  connectLabel,
  connectPoints,
  engineLabel,
  enginePoints,
  note,
}: {
  connectLabel: string;
  connectPoints: string[];
  engineLabel: string;
  enginePoints: string[];
  note: string;
}) {
  return (
    <figure>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-[var(--radius-card)] bg-sand p-4">
          <p className="font-semibold text-ink">{connectLabel}</p>
          <ul className="mt-3 space-y-1">
            {connectPoints.map((point) => (
              <li key={point} className="text-sm text-muted">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[var(--radius-card)] bg-ink p-4 text-white">
          <p className="font-semibold">{engineLabel}</p>
          <ul className="mt-3 space-y-1">
            {enginePoints.map((point) => (
              <li key={point} className="text-sm text-white/80">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function ConnectHumanAutomation({
  autoTitle,
  auto,
  humanTitle,
  human,
  note,
}: {
  autoTitle: string;
  auto: string[];
  humanTitle: string;
  human: string[];
  note: string;
}) {
  return (
    <figure>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-[var(--radius-card)] bg-white p-4 shadow-[var(--shadow-soft)]">
          <p className="font-semibold text-ink">{autoTitle}</p>
          <ul className="mt-3 space-y-1">
            {auto.map((item) => (
              <li key={item} className="text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[var(--radius-card)] bg-sand p-4">
          <p className="font-semibold text-ink">{humanTitle}</p>
          <ul className="mt-3 space-y-1">
            {human.map((item) => (
              <li key={item} className="text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function ConnectLeadFlow({ steps, note }: { steps: string[]; note: string }) {
  return (
    <figure>
      <StepList steps={steps} />
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function ConnectConversationLifecycle({ title, steps }: { title: string; steps: string[] }) {
  return (
    <figure>
      <figcaption className="sr-only">{title}</figcaption>
      <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {steps.map((step, index) => (
          <li key={step} className="rounded-full bg-ink px-3 py-1.5 text-sm font-semibold text-white">
            {String(index + 1).padStart(2, '0')} {step}
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function ConnectAutomationBoundary({
  autoTitle,
  auto,
  humanTitle,
  human,
  note,
}: {
  autoTitle: string;
  auto: string[];
  humanTitle: string;
  human: string[];
  note: string;
}) {
  return <ConnectHumanAutomation autoTitle={autoTitle} auto={auto} humanTitle={humanTitle} human={human} note={note} />;
}

export function ConnectProcess({ steps }: { steps: { title: string; body: string }[] }) {
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

export function ConnectAIroadmap({
  badge,
  rules,
  note,
}: {
  badge: string;
  rules: string[];
  note: string;
}) {
  return (
    <figure className="rounded-[var(--radius-card)] border border-dashed border-teal bg-white p-5">
      <p className="text-xs font-semibold tracking-[0.12em] text-teal">{badge}</p>
      <ul className="mt-4 space-y-2">
        {rules.map((rule) => (
          <li key={rule} className="text-sm text-ink">
            {rule}
          </li>
        ))}
      </ul>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}

export function ConnectSecurity({ points, note }: { points: string[]; note: string }) {
  return (
    <figure>
      <ul className="grid gap-2 sm:grid-cols-2">
        {points.map((point) => (
          <li key={point} className="rounded-2xl bg-sand px-3 py-2 text-sm text-ink">
            {point}
          </li>
        ))}
      </ul>
      <figcaption className="mt-4 text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}
