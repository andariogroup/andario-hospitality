import type { ReactNode } from 'react';

export function RoutePath({ steps, caption }: { steps: string[]; caption: string }) {
  return (
    <figure>
      <figcaption className="mb-4 text-sm leading-6 text-muted">{caption}</figcaption>
      <ol className="flex flex-col gap-2">
        {steps.map((step, index) => (
          <li
            key={step}
            className="animate-dc-fade relative flex min-w-0 items-center gap-3"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="absolute top-7 left-[13px] h-[calc(100%+0.5rem)] w-px bg-teal/30" />
            ) : null}
            <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="min-w-0 rounded-2xl bg-white px-3 py-1.5 text-sm font-semibold text-ink">{step}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function MethodStack({
  diagnosis,
  row,
  rest,
  caption,
}: {
  diagnosis: ReactNode;
  row: ReactNode[];
  rest: ReactNode[];
  caption: string;
}) {
  return (
    <figure>
      <figcaption className="mb-4 text-sm leading-6 text-muted">{caption}</figcaption>
      <div className="flex flex-col items-center gap-3">
        <div>{diagnosis}</div>
        <span aria-hidden="true" className="text-teal">
          ↓
        </span>
        <ul className="grid w-full gap-2 sm:grid-cols-3">
          {row.map((item, index) => (
            <li key={index} className="flex justify-center">
              {item}
            </li>
          ))}
        </ul>
        {rest.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <span aria-hidden="true" className="text-teal">
              ↓
            </span>
            {item}
          </div>
        ))}
      </div>
    </figure>
  );
}

export function RelationPath({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col items-center gap-2">
      {steps.map((step, index) => (
        <li key={step} className="flex flex-col items-center gap-2">
          <span className="rounded-full border border-sand-deep bg-white px-4 py-2 text-sm font-semibold text-ink">{step}</span>
          {index < steps.length - 1 ? (
            <span aria-hidden="true" className="text-teal">
              ↕
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
