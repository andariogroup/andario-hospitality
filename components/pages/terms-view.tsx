import Link from 'next/link';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary, TermsViewContent } from '@/content/types';
import { COMPANY, phoneLabel, site } from '@/lib/config/site';
import { href, type Locale, type RouteId } from '@/lib/i18n/routes';
import { formatTermsUpdated } from '@/lib/legal/terms';
import { breadcrumbJsonLd } from '@/lib/seo/structured-data';

const textLink =
  'font-semibold text-ink underline decoration-teal/50 underline-offset-4 transition-colors duration-200 hover:decoration-teal';

function TocLinks({ sections }: { sections: TermsViewContent['sections'] }) {
  return (
    <ol>
      {sections.map((section, index) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="inline-flex min-h-11 items-center text-sm text-ink underline decoration-sand-deep underline-offset-4 transition-colors duration-200 hover:decoration-teal"
          >
            {index + 1}. {section.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

function Channels() {
  const phone = phoneLabel(site.whatsapp);
  return (
    <ul className="mt-3 space-y-1">
      {site.email ? (
        <li>
          <a href={`mailto:${site.email}`} className={`inline-flex min-h-11 items-center ${textLink}`}>
            {site.email}
          </a>
        </li>
      ) : null}
      {site.whatsapp && phone ? (
        <li>
          <a href={`tel:+${site.whatsapp}`} className={`inline-flex min-h-11 items-center ${textLink}`}>
            {phone}
          </a>
        </li>
      ) : null}
    </ul>
  );
}

function Identity({ line }: { line: string }) {
  const phone = phoneLabel(site.whatsapp);
  return (
    <address className="mt-4 text-sm leading-7 not-italic text-text sm:text-base">
      <p className="font-semibold text-ink">{COMPANY.brand}</p>
      <p>{line}</p>
      {site.address ? <p className="mt-3">{site.address}</p> : null}
      {site.city || site.country ? <p>{[site.city, site.country].filter(Boolean).join(', ')}</p> : null}
      {site.email ? (
        <p className="mt-3">
          <a href={`mailto:${site.email}`} className={`inline-flex min-h-11 items-center ${textLink}`}>
            {site.email}
          </a>
        </p>
      ) : null}
      {site.whatsapp && phone ? (
        <p>
          <a href={`tel:+${site.whatsapp}`} className={`inline-flex min-h-11 items-center ${textLink}`}>
            {phone}
          </a>
        </p>
      ) : null}
    </address>
  );
}

export function TermsView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const page = dict.termsView;
  const crumbs: { label: string; routeId: RouteId }[] = [
    { label: dict.nav.home, routeId: 'home' },
    { label: dict.nav.terms, routeId: 'terms' },
  ];

  return (
    <>
      <Section tone="sand" className="pb-12">
        <Container>
          <Breadcrumbs locale={locale} items={crumbs} />
          <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{page.h1}</h1>
          <p className="mt-6 max-w-[62ch] text-lg leading-8 text-text">{page.lead}</p>
          <p className="mt-3 max-w-[62ch] text-lg leading-8 text-text">{page.note}</p>
          <p className="mt-6 text-sm text-muted">
            {page.updatedLabel}: {formatTermsUpdated(locale)}
          </p>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container>
          <div className="lg:grid lg:grid-cols-[14rem_minmax(0,62ch)] lg:items-start lg:gap-16">
            <nav aria-label={page.tocLabel} className="hidden lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
              <p className="text-sm font-semibold text-ink">{page.tocLabel}</p>
              <div className="mt-2">
                <TocLinks sections={page.sections} />
              </div>
            </nav>

            <article>
              <details className="mb-10 rounded-2xl border border-sand-deep bg-sand px-4 lg:hidden">
                <summary className="flex min-h-11 cursor-pointer items-center text-sm font-semibold text-ink">
                  {page.tocLabel}
                </summary>
                <div className="pb-3">
                  <TocLinks sections={page.sections} />
                </div>
              </details>

              {page.sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={index === 0 ? 'scroll-mt-28' : 'mt-10 scroll-mt-28 border-t border-sand-deep pt-8'}
                >
                  <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                    {index + 1}. {section.title}
                  </h2>
                  {section.blocks.map((block, blockIndex) => {
                    if (block.kind === 'h3') {
                      return (
                        <h3 key={blockIndex} className="mt-6 text-base font-semibold text-ink">
                          {block.text}
                        </h3>
                      );
                    }
                    if (block.kind === 'list') {
                      return (
                        <ul key={blockIndex} className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-text sm:text-base">
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (block.kind === 'privacy') {
                      return (
                        <p key={blockIndex} className="mt-4">
                          <Link href={href(locale, 'privacy')} className={`inline-flex min-h-11 items-center ${textLink}`}>
                            {dict.nav.privacy}
                          </Link>
                        </p>
                      );
                    }
                    if (block.kind === 'channels') return <Channels key={blockIndex} />;
                    if (block.kind === 'identity') return <Identity key={blockIndex} line={dict.chrome.footerLine} />;
                    return (
                      <p key={blockIndex} className="mt-3 text-sm leading-7 text-text sm:text-base">
                        {block.text}
                      </p>
                    );
                  })}
                </section>
              ))}

              <p className="mt-12 text-sm leading-6 text-muted">{dict.legal.review}</p>
            </article>
          </div>
        </Container>
      </Section>

      <Section tone="sand" className="py-14 sm:py-16">
        <Container className="max-w-[62ch]">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">{page.closerTitle}</h2>
          <p className="mt-3 leading-7 text-text">{page.closerBody}</p>
          <Button asChild className="mt-6">
            <Link href={href(locale, 'contact')}>{dict.chrome.primaryCta}</Link>
          </Button>
        </Container>
      </Section>
    </>
  );
}
