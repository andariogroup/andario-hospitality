import Image from 'next/image';

/** Editorial hero collage for Andario Content. Uses existing hospitality photos. */
export function ContentDiscoveryVisual({
  image,
  imageAlt,
  cards,
}: {
  image: string;
  imageAlt: string;
  cards: { label: string; image: string }[];
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
          <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/10" />
        </div>

        <ul className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2 sm:inset-x-4 sm:bottom-4 sm:gap-3">
          {cards.map((card) => (
            <li
              key={card.label}
              className="overflow-hidden rounded-2xl border border-white/40 bg-white/95 shadow-[var(--shadow-soft)] backdrop-blur-sm"
            >
              <div className="relative aspect-[16/10]">
                <Image src={card.image} alt="" fill sizes="160px" className="object-cover" />
              </div>
              <p className="px-2.5 py-2 text-center text-[11px] font-semibold tracking-[0.04em] text-ink sm:text-xs">
                {card.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
