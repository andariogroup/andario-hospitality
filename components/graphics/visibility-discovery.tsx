import Image from 'next/image';

/** Conceptual search discovery: hospitality photo + phone UI. Not a real SERP or third-party brand. */
export function VisibilityDiscoveryVisual({
  image,
  imageAlt,
  searchLabel,
  searchQuery,
  resultName,
  resultMeta,
  caption,
}: {
  image: string;
  imageAlt: string;
  searchLabel: string;
  searchQuery: string;
  resultName: string;
  resultMeta: string;
  caption: string;
}) {
  return (
    <figure className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div className="relative overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)]">
        <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
        </div>

        <div className="absolute inset-x-4 bottom-4 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[58%] lg:w-[54%]">
          <div className="overflow-hidden rounded-[1.35rem] border-[5px] border-ink bg-white shadow-[0_24px_48px_-20px_rgb(16_33_43/0.55)]">
            <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-ink/20" aria-hidden="true" />
            <div className="space-y-3 p-3.5 sm:p-4">
              <p className="text-[10px] font-semibold tracking-[0.14em] text-teal uppercase">{searchLabel}</p>
              <div className="flex items-center gap-2 rounded-full border border-sand-deep bg-sand px-3 py-2">
                <span
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-wash text-teal"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="M16.5 16.5 20 20" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="truncate text-xs font-medium text-ink">“{searchQuery}”</span>
              </div>
              <div className="overflow-hidden rounded-2xl border border-sand-deep/80 bg-white">
                <div className="relative aspect-[16/10]">
                  <Image src={image} alt="" fill sizes="220px" className="object-cover" />
                </div>
                <div className="space-y-1 p-3">
                  <p className="text-sm font-semibold text-ink">{resultName}</p>
                  <p className="text-[11px] leading-4 text-muted">{resultMeta}</p>
                  <span className="mt-1 inline-flex rounded-full bg-teal px-2.5 py-1 text-[10px] font-semibold text-white">
                    {searchLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs leading-5 text-muted sm:text-left">{caption}</figcaption>
    </figure>
  );
}
