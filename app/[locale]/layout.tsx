import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Manrope } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Analytics } from '@/components/analytics/analytics';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { JsonLd } from '@/components/seo/json-ld';
import { getDictionary } from '@/content';
import { site } from '@/lib/config/site';
import { isLocale, isRoutePublic, LOCALES, type Locale } from '@/lib/i18n/routes';
import { localBusinessJsonLd, organizationJsonLd, websiteJsonLd } from '@/lib/seo/structured-data';
import '../globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const headerItems = (
  ['solutions', 'accommodations', 'how-we-work', 'andario-booking-engine', 'cases', 'about'] as const
).filter(isRoutePublic);

export const viewport: Viewport = {
  themeColor: '#f8f5ef',
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return { metadataBase: new URL(site.url) };
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.pages.home.title,
      template: '%s | Andario Hospitality',
    },
    description: dict.meta.pages.home.description,
    applicationName: 'Andario Hospitality',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const business = localBusinessJsonLd();

  return (
    <html lang={dict.meta.htmlLang} className={manrope.variable}>
      <body className="min-h-dvh bg-white font-sans text-text antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          {dict.chrome.skip}
        </a>
        <Header
          locale={locale}
          items={headerItems.map((id) => ({ id, label: dict.nav[id] }))}
          cta={dict.chrome.primaryCta}
          menuLabel={dict.chrome.menu}
          closeLabel={dict.chrome.close}
          languageLabel={dict.chrome.language}
        />
        <main id="contenido">{children}</main>
        <Footer locale={locale} dict={dict} socials={site.socials} />
        {site.whatsapp ? (
          <WhatsAppButton
            phone={site.whatsapp}
            locale={locale}
            context="general"
            label={dict.chrome.footerWhatsappLabel}
            variant="float"
          />
        ) : null}
        <Analytics
          measurementId={site.measurementId}
          copy={{
            title: dict.chrome.analyticsTitle,
            body: dict.chrome.analyticsBody,
            accept: dict.chrome.analyticsAccept,
            reject: dict.chrome.analyticsReject,
          }}
        />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd(locale)} />
        {business ? <JsonLd data={business} /> : null}
      </body>
    </html>
  );
}
