import { mapUrl, phoneLabel, site } from '@/lib/config/site';

export function LocationBlock({ mapLabel }: { mapLabel: string }) {
  const lines = [site.address, [site.city, site.country].filter(Boolean).join(', ')].filter(
    (line): line is string => Boolean(line),
  );
  const map = mapUrl();
  if (lines.length === 0 && !map) return null;

  return (
    <address className="not-italic">
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
      {map ? (
        <a href={map} className="mt-2 inline-block font-semibold text-teal" target="_blank" rel="noopener noreferrer">
          {mapLabel}
        </a>
      ) : null}
      {site.email ? (
        <p className="mt-2">
          <a className="font-semibold text-teal" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      ) : null}
      {site.whatsapp ? <p className="mt-1">{phoneLabel(site.whatsapp)}</p> : null}
    </address>
  );
}
