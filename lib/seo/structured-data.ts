import { COMPANY, mapUrl, phoneLabel, site } from '@/lib/config/site';
import { href, type Locale, type RouteId } from '@/lib/i18n/routes';

type Crumb = { label: string; routeId: RouteId };

export function organizationJsonLd() {
  const telephone = phoneLabel(site.whatsapp);
  const sameAs = site.socials.map((item) => item.url);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: COMPANY.brand,
    legalName: COMPANY.parent,
    taxID: COMPANY.nit,
    url: site.url,
    logo: `${site.url}/brand/logo-horizontal.svg`,
    email: site.email ?? undefined,
    telephone: telephone ?? undefined,
    address:
      site.address || site.city || site.country
        ? {
            '@type': 'PostalAddress',
            streetAddress: site.address ?? undefined,
            addressLocality: site.city ?? undefined,
            addressCountry: site.country ?? undefined,
          }
        : undefined,
    parentOrganization: {
      '@type': 'Organization',
      name: COMPANY.parent,
      taxID: COMPANY.nit,
    },
    sameAs: sameAs.length > 0 ? sameAs : undefined,
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: COMPANY.brand,
    url: site.url,
    inLanguage: locale,
    publisher: { '@id': `${site.url}/#organization` },
  };
}

export function localBusinessJsonLd() {
  if (!site.address && !site.city) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: COMPANY.brand,
    url: site.url,
    image: `${site.url}/brand/isotipo.svg`,
    email: site.email ?? undefined,
    telephone: phoneLabel(site.whatsapp) ?? undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address ?? undefined,
      addressLocality: site.city ?? undefined,
      addressCountry: site.country ?? undefined,
    },
    geo: site.coordinates
      ? {
          '@type': 'GeoCoordinates',
          latitude: site.coordinates.latitude,
          longitude: site.coordinates.longitude,
        }
      : undefined,
    hasMap: mapUrl() ?? undefined,
    parentOrganization: { '@id': `${site.url}/#organization` },
  };
}

export function serviceJsonLd(input: { name: string; description: string; locale: Locale; routeId: RouteId }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: `${site.url}${href(input.locale, input.routeId)}`,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: {
      '@type': 'Country',
      name: 'Colombia',
    },
  };
}

export function breadcrumbJsonLd(locale: Locale, crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${site.url}${href(locale, crumb.routeId)}`,
    })),
  };
}

export function itemListJsonLd(locale: Locale, items: { name: string; routeId: RouteId }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${site.url}${href(locale, item.routeId)}`,
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
