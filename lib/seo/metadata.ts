import type { Metadata } from 'next';
import { site } from '@/lib/config/site';
import { type Locale, type RouteId, languageAlternates } from '@/lib/i18n/routes';

type PageMetadataInput = {
  locale: Locale;
  routeId: RouteId;
  title: string;
  description: string;
};

const OG_LOCALE: Record<Locale, string> = {
  es: 'es_CO',
  en: 'en_US',
};

export function buildPageMetadata({
  locale,
  routeId,
  title,
  description,
}: PageMetadataInput): Metadata {
  const pathname = languageAlternates(routeId)[locale] ?? `/${locale}`;
  const absoluteTitle =
    routeId === 'home' ? title : `${title} | Andario Hospitality`;

  return {
    title: routeId === 'home' ? { absolute: title } : title,
    description,
    alternates: {
      canonical: pathname,
      languages: languageAlternates(routeId),
    },
    openGraph: {
      type: 'website',
      siteName: 'Andario Hospitality',
      locale: OG_LOCALE[locale],
      url: `${site.url}${pathname}`,
      title: absoluteTitle,
      description,
    },
    twitter: {
      card: 'summary',
      title: absoluteTitle,
      description,
    },
  };
}
