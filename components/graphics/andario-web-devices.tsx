import Image from 'next/image';

/** Conceptual hospitality website shown inside laptop + phone. Not a real client. */
export function AndarioWebDevices({
  property,
  nav,
  reserve,
  label,
  heroImage,
}: {
  property: string;
  nav: string[];
  reserve: string;
  label: string;
  heroImage: string;
}) {
  return (
    <figure className="relative mx-auto w-full max-w-xl">
      <div className="relative">
        <div className="overflow-hidden rounded-[1.35rem] border border-ink/15 bg-ink shadow-[var(--shadow-soft)]">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-soft px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="ml-3 truncate rounded-full bg-white/10 px-3 py-0.5 text-[10px] text-white/70">
              {property.toLowerCase().replace(/\s+/g, '')}.com
            </span>
          </div>
          <div className="bg-white">
            <div className="flex items-center justify-between gap-3 border-b border-sand-deep px-4 py-3">
              <p className="text-sm font-semibold tracking-tight text-ink">{property}</p>
              <nav className="hidden items-center gap-3 text-[11px] font-medium text-muted sm:flex" aria-hidden="true">
                {nav.slice(0, 3).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </nav>
              <span className="rounded-full bg-teal px-3 py-1 text-[11px] font-semibold text-white">{reserve}</span>
            </div>
            <div className="relative aspect-[16/10]">
              <Image src={heroImage} alt="" fill sizes="(min-width: 1024px) 42vw, 90vw" className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-lg font-semibold tracking-tight sm:text-xl">{property}</p>
                <p className="mt-1 max-w-xs text-xs text-white/85">Una estancia pensada para descansar y descubrir.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 p-3" aria-hidden="true">
              {nav.slice(0, 3).map((item) => (
                <div key={item} className="rounded-xl bg-sand px-2 py-3 text-center">
                  <span className="block text-[10px] font-semibold text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute -right-1 -bottom-6 w-[34%] overflow-hidden rounded-[1.4rem] border-[5px] border-ink bg-white shadow-[var(--shadow-soft)] sm:-right-3 sm:bottom-[-1.25rem] sm:w-[32%]">
          <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-ink/20" />
          <div className="relative aspect-[9/16]">
            <Image src={heroImage} alt="" fill sizes="160px" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-2.5 text-white">
              <p className="text-[10px] font-semibold">{property}</p>
              <span className="mt-1 inline-flex rounded-full bg-teal px-2 py-0.5 text-[9px] font-semibold">{reserve}</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-8 text-center text-xs font-medium text-muted sm:mt-10">{label}</figcaption>
    </figure>
  );
}
