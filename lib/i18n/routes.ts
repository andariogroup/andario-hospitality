export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const SERVICE_IDS = [
  'digital-check',
  'andario-web',
  'andario-visibility',
  'andario-booking-engine',
  'andario-connect',
  'andario-content',
  'andario-growth',
] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];

export const ROUTE_IDS = [
  'home',
  'solutions',
  ...SERVICE_IDS,
  'accommodations',
  'how-we-work',
  'cases',
  'about',
  'faq',
  'contact',
  'privacy',
  'terms',
] as const;

export type RouteId = (typeof ROUTE_IDS)[number];

/** The cases page stays in the project. Set this to true when there is a case ready to publish. */
export const CASES_PUBLISHED = false;

export function isRoutePublic(routeId: RouteId): boolean {
  if (routeId === 'cases') return CASES_PUBLISHED;
  return true;
}

export const ACCOMMODATION_TYPES = [
  'hostel',
  'small-hotel',
  'posada',
  'apartment',
  'apart-hotel',
  'cabin',
  'villa',
  'rural',
  'other',
] as const;

export type AccommodationType = (typeof ACCOMMODATION_TYPES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function isServiceId(value: string): value is ServiceId {
  return (SERVICE_IDS as readonly string[]).includes(value);
}

const PATHS: Record<Locale, Record<RouteId, string>> = {
  es: {
    home: '',
    solutions: 'soluciones',
    'digital-check': 'soluciones/digital-check',
    'andario-web': 'soluciones/andario-web',
    'andario-visibility': 'soluciones/andario-visibility',
    'andario-booking-engine': 'soluciones/andario-booking-engine',
    'andario-connect': 'soluciones/andario-connect',
    'andario-content': 'soluciones/andario-content',
    'andario-growth': 'soluciones/andario-growth',
    accommodations: 'alojamientos',
    'how-we-work': 'como-trabajamos',
    cases: 'casos',
    about: 'nosotros',
    faq: 'faq',
    contact: 'contacto',
    privacy: 'privacidad',
    terms: 'terminos',
  },
  en: {
    home: '',
    solutions: 'solutions',
    'digital-check': 'solutions/digital-check',
    'andario-web': 'solutions/andario-web',
    'andario-visibility': 'solutions/andario-visibility',
    'andario-booking-engine': 'solutions/andario-booking-engine',
    'andario-connect': 'solutions/andario-connect',
    'andario-content': 'solutions/andario-content',
    'andario-growth': 'solutions/andario-growth',
    accommodations: 'accommodations',
    'how-we-work': 'how-we-work',
    cases: 'cases',
    about: 'about',
    faq: 'faq',
    contact: 'contact',
    privacy: 'privacy',
    terms: 'terms',
  },
};

export function href(locale: Locale, id: RouteId): string {
  const slug = PATHS[locale][id];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function resolveSegments(locale: Locale, segments: string[] | undefined): RouteId | null {
  const rest = (segments ?? []).join('/');
  const match = (Object.entries(PATHS[locale]) as [RouteId, string][]).find(
    ([, path]) => path === rest,
  );
  return match ? match[0] : null;
}

export function resolvePathname(pathname: string): { locale: Locale; routeId: RouteId } | null {
  const [maybeLocale, ...rest] = pathname.split('/').filter(Boolean);
  if (!maybeLocale || !isLocale(maybeLocale)) return null;
  const routeId = resolveSegments(maybeLocale, rest);
  if (!routeId) return null;
  return { locale: maybeLocale, routeId };
}

export function alternateHref(pathname: string, target: Locale): string {
  const current = resolvePathname(pathname);
  return href(target, current?.routeId ?? 'home');
}

export function languageAlternates(routeId: RouteId): Record<string, string> {
  return {
    es: href('es', routeId),
    en: href('en', routeId),
    'x-default': href('es', routeId),
  };
}

export function allLocalizedPaths(): { locale: Locale; routeId: RouteId; path: string }[] {
  return LOCALES.flatMap((locale) =>
    ROUTE_IDS.map((routeId) => ({
      locale,
      routeId,
      path: href(locale, routeId),
    })),
  );
}
