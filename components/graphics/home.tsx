export function ShiftPairs({
  items,
  beforeWord,
  afterWord,
  note,
}: {
  items: { before: string; after: string }[];
  beforeWord: string;
  afterWord: string;
  note: string;
}) {
  return (
    <figure>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li
            key={item.before}
            className="grid items-center gap-3 rounded-[var(--radius-card)] border border-sand-deep bg-white p-4 sm:grid-cols-[1fr_auto_1fr]"
          >
            <p className="text-sm leading-6 text-muted">
              <span className="mb-1 block text-xs font-semibold tracking-wide text-ink-soft uppercase">{beforeWord}</span>
              {item.before}
            </p>
            <span aria-hidden="true" className="text-teal">
              →
            </span>
            <p className="text-sm font-semibold leading-6 text-ink">
              <span className="mb-1 block text-xs font-semibold tracking-wide text-teal uppercase">{afterWord}</span>
              {item.after}
            </p>
          </li>
        ))}
      </ul>
      <figcaption className="mt-4 max-w-3xl text-sm leading-6 text-muted">{note}</figcaption>
    </figure>
  );
}
