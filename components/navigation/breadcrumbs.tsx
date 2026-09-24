import Link from 'next/link';
import { href, type Locale, type RouteId } from '@/lib/i18n/routes';

export function Breadcrumbs({
  locale,
  items,
}: {
  locale: Locale;
  items: { label: string; routeId: RouteId }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.routeId} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span aria-current="page" className="text-ink">
                  {item.label}
                </span>
              ) : (
                <Link href={href(locale, item.routeId)} className="hover:text-teal">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
