import Image from 'next/image';

/** Conceptual messaging UI. Not WhatsApp, not a live chat, not a real property. */
export function ConnectDiscoveryVisual({
  image,
  imageAlt,
  guestLabel,
  guestMessage,
  propertyLabel,
  propertyMessage,
  options,
  caption,
}: {
  image: string;
  imageAlt: string;
  guestLabel: string;
  guestMessage: string;
  propertyLabel: string;
  propertyMessage: string;
  options: string[];
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
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/15 to-transparent" />
        </div>

        <div className="absolute inset-x-4 bottom-4 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[62%] lg:w-[58%]">
          <div className="overflow-hidden rounded-[1.35rem] border-[5px] border-ink bg-sand shadow-[0_24px_48px_-20px_rgb(16_33_43/0.55)]">
            <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-ink/20" aria-hidden="true" />
            <div className="space-y-3 p-3.5 sm:p-4">
              <div className="max-w-[95%] rounded-2xl rounded-bl-md bg-white px-3 py-2.5 shadow-[var(--shadow-soft)]">
                <p className="text-[10px] font-semibold tracking-[0.08em] text-teal uppercase">{guestLabel}</p>
                <p className="mt-1 whitespace-pre-line text-xs leading-5 text-ink sm:text-sm">{guestMessage}</p>
              </div>
              <div className="ml-auto max-w-[95%] rounded-2xl rounded-br-md bg-teal px-3 py-2.5 text-white shadow-[var(--shadow-soft)]">
                <p className="text-[10px] font-semibold tracking-[0.08em] text-white/75 uppercase">{propertyLabel}</p>
                <p className="mt-1 whitespace-pre-line text-xs leading-5 sm:text-sm">{propertyMessage}</p>
              </div>
              <div className="grid grid-cols-2 gap-2" aria-hidden="true">
                {options.map((option) => (
                  <span
                    key={option}
                    className="rounded-full border border-teal/25 bg-white px-2 py-2 text-center text-[10px] font-semibold text-teal sm:text-[11px]"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs leading-5 text-muted sm:text-left">{caption}</figcaption>
    </figure>
  );
}
