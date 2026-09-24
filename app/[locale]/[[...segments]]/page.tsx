import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HomePage } from '@/components/pages/home-page';
import { RoutePage } from '@/components/pages/route-page';
import { getDictionary } from '@/content';
import { site } from '@/lib/config/site';
import { href, isLocale, isRoutePublic, LOCALES, resolveSegments, ROUTE_IDS } from '@/lib/i18n/routes';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    ROUTE_IDS.filter(isRoutePublic).map((routeId) => ({
      locale,
      segments: href(locale, routeId).split('/').filter(Boolean).slice(1),
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; segments?: string[] }>;
}): Promise<Metadata> {
  const { locale, segments } = await params;
  if (!isLocale(locale)) return {};
  const routeId = resolveSegments(locale, segments);
  if (!routeId || !isRoutePublic(routeId)) return {};
  const meta = getDictionary(locale).meta.pages[routeId];
  return buildPageMetadata({
    locale,
    routeId,
    title: meta.title,
    description: meta.description,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; segments?: string[] }>;
}) {
  const { locale, segments } = await params;
  if (!isLocale(locale)) notFound();
  const routeId = resolveSegments(locale, segments);
  if (!routeId || !isRoutePublic(routeId)) notFound();
  const dict = getDictionary(locale);

  if (routeId === 'home') {
    return <HomePage locale={locale} dict={dict} whatsapp={site.whatsapp} />;
  }

  return <RoutePage locale={locale} routeId={routeId} dict={dict} whatsapp={site.whatsapp} />;
}
