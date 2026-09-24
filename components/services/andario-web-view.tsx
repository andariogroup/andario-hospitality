import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import {
  AndarioWebHeroVisual,
  BeforeAfterWeb,
  GuestJourney,
  WebsiteAnatomy,
  WebsiteConversionFlow,
  WebsiteIntegrationMap,
  WebsiteMockup,
  WebsiteProcess,
} from '@/components/graphics/andario-web';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale } from '@/lib/i18n/routes';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

function LeadPair({
  locale,
  contactHref,
  primary,
  whatsapp,
  whatsappLabel,
  placement,
}: {
  locale: Locale;
  contactHref: string;
  primary: string;
  whatsapp: string | null;
  whatsappLabel: string;
  placement: string;
}) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <TrackedLink href={contactHref} event={{ name: 'andario_web_cta_click', placement }} cue>
        {primary}
      </TrackedLink>
      {whatsapp ? (
        <WhatsAppButton
          phone={whatsapp}
          locale={locale}
          context="andario-web"
          label={whatsappLabel}
          event={{ name: 'andario_web_whatsapp_click' }}
        />
      ) : null}
    </div>
  );
}

export function AndarioWebView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const service = dict.services['andario-web'];
  const page = dict.andarioWeb;
  const contactHref = href(locale, 'contact');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav.solutions, routeId: 'solutions' as const },
    { label: service.name, routeId: 'andario-web' as const },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          locale,
          routeId: 'andario-web',
        })}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <Section tone="sand" className="overflow-hidden">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="text-sm font-semibold tracking-[0.14em] text-teal">ANDARIO WEB · {service.subtitle}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{service.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{page.support}</p>
            <LeadPair
              locale={locale}
              contactHref={contactHref}
              primary={page.primaryCta}
              whatsapp={whatsapp}
              whatsappLabel={page.talkCta}
              placement="hero"
            />
            <p className="mt-4 max-w-xl text-sm text-muted">{page.audienceLine}</p>
          </div>
          <AndarioWebHeroVisual caption={page.heroCaption} nav={page.mockNav} hero={page.mockHero} />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{service.problemTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{service.problem}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.situations.map((item) => (
              <li key={item} className="rounded-[var(--radius-card)] bg-sand p-4 text-sm leading-6 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.valueTitle}</h2>
          <ul className="mt-8 flex flex-wrap gap-2">
            {page.valueParts.map((part) => (
              <li key={part} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink">
                {part}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg font-semibold text-ink">{page.valueEquals}</p>
          <div className="mt-10 max-w-3xl">
            <h2 className="text-2xl font-semibold text-ink">{page.whatTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.whatBody}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.anatomyTitle}</h2>
          <div className="mt-8">
            <WebsiteAnatomy caption={page.anatomyCaption} items={page.anatomy} />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.journeyTitle}</h2>
          <div className="mt-8">
            <GuestJourney steps={page.journey} note={page.journeyNote} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.includesTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.includesIntro}</p>
          <p className="mt-3 text-sm font-semibold text-teal">{page.scopeLabel}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {page.groups.map((group) => (
              <article key={group.title} className="rounded-[var(--radius-card)] bg-sand p-5">
                <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                {group.items.map((item) => (
                  <div key={item.name} className="mt-4">
                    <p className="font-semibold text-ink">{item.name}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      <span className="font-semibold text-ink">{page.whatLabel}. </span>
                      {item.what}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      <span className="font-semibold text-ink">{page.purposeLabel}. </span>
                      {item.purpose}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      <span className="font-semibold text-ink">{page.whyLabel}. </span>
                      {item.why}
                    </p>
                  </div>
                ))}
              </article>
            ))}
          </div>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.talkCta}
            whatsapp={whatsapp}
            whatsappLabel={page.whatsappCta}
            placement="scope"
          />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.designTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.designBody}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {page.designPoints.map((point) => (
                <li key={point} className="rounded-full bg-white px-3 py-1.5 text-sm text-ink">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.conversionTitle}</h2>
            <div className="mt-6">
              <WebsiteConversionFlow steps={page.conversionSteps} around={page.conversionAround} note={page.conversionNote} />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.bookingTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.bookingBody}</p>
            <div className="mt-6">
              <TrackedLink
                href={href(locale, 'andario-booking-engine')}
                event={{ name: 'andario_web_booking_click' }}
                variant="secondary"
              >
                {dict.services['andario-booking-engine'].name}
              </TrackedLink>
            </div>
            <LeadPair
              locale={locale}
              contactHref={contactHref}
              primary={page.connectCta}
              whatsapp={whatsapp}
              whatsappLabel={page.whatsappCta}
              placement="booking"
            />
          </div>
          <WebsiteIntegrationMap steps={page.bookingSteps} note={page.bookingNote} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.whatsappTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.whatsappBody}</p>
            <p className="mt-4 text-sm leading-6 text-muted">{page.whatsappNote}</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.seoTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.seoBody}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.seoPoints.map((point) => (
                <li key={point} className="rounded-full bg-white px-3 py-1 text-sm text-ink">
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-muted">{page.seoNote}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-3">
          <article>
            <h2 className="text-2xl font-semibold text-ink">{page.analyticsTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{page.analyticsBody}</p>
            <ul className="mt-3 space-y-1">
              {page.analyticsPoints.map((point) => (
                <li key={point} className="text-sm text-ink">
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-6 text-muted">{page.analyticsNote}</p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-ink">{page.performanceTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{page.performanceBody}</p>
            <ul className="mt-3 space-y-1">
              {page.performancePoints.map((point) => (
                <li key={point} className="text-sm text-ink">
                  {point}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-ink">{page.accessTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{page.accessBody}</p>
            <ul className="mt-3 space-y-1">
              {page.accessPoints.map((point) => (
                <li key={point} className="text-sm text-ink">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.processTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.processIntro}</p>
            <div className="mt-8">
              <WebsiteProcess steps={page.process} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.receiveTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.receiveIntro}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.receive.map((item) => (
                <li key={item} className="rounded-full bg-white px-3 py-1.5 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-ink">{page.receiveNote}</p>
            <div className="mt-8">
              <WebsiteMockup note={page.mockNote} nav={page.mockNav} hero={page.mockHero} blocks={page.mockBlocks} />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.beforeTitle}</h2>
          <div className="mt-8">
            <BeforeAfterWeb
              example={page.exampleLabel}
              beforeLabel={page.beforeLabel}
              beforeItems={page.beforeItems}
              afterLabel={page.afterLabel}
              afterItems={page.afterItems}
            />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.whoTitle}</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {page.whoTypes.map((type) => (
                <li key={type} className="rounded-full bg-white px-3 py-1.5 text-sm text-ink">
                  {type}
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-2">
              {page.whoFit.map((item) => (
                <li key={item} className="text-sm leading-6 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.whenTitle}</h2>
            <ul className="mt-6 space-y-2">
              {page.when.map((item) => (
                <li key={item} className="text-sm leading-6 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.destinationTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.destinationBody}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.destinationPoints.map((point) => (
                <li key={point} className="rounded-full border border-sand-deep px-3 py-1 text-sm text-ink">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.contentTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.contentBody}</p>
            <p className="mt-4 text-sm font-semibold text-ink">Andario Web</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {page.contentWeb.map((item) => (
                <li key={item} className="rounded-full bg-sand px-3 py-1 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-ink">Andario Content</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {page.contentExtra.map((item) => (
                <li key={item} className="rounded-full bg-sand px-3 py-1 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-muted">{page.contentNote}</p>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-3">
          <article>
            <h2 className="text-2xl font-semibold text-ink">{page.checkTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{page.checkBody}</p>
            <ol className="mt-4 space-y-1">
              {page.checkSteps.map((step) => (
                <li key={step} className="text-sm font-semibold text-ink">
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-6 text-muted">{page.checkNote}</p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-ink">{page.visibilityTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{page.visibilityBody}</p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-ink">{page.growthTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{page.growthBody}</p>
          </article>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.notTitle}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.not.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] bg-sand p-4">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <article className="mt-8 max-w-3xl rounded-[var(--radius-card)] border border-sand-deep p-5">
            <h2 className="text-xl font-semibold text-ink">{page.pioneerTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{page.pioneerBody}</p>
          </article>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-ink">{page.ecosystemTitle}</h2>
            <ol className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {page.ecosystem.map((step, index) => (
                <li key={step} className="rounded-full border border-sand-deep px-3 py-1.5 text-sm font-semibold text-ink">
                  {String(index + 1).padStart(2, '0')} {step}
                </li>
              ))}
            </ol>
            <p className="mt-4 max-w-3xl leading-7 text-muted">{page.ecosystemNote}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={service.faqs} openEvent={{ name: 'andario_web_faq_open' }} />
          </div>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.infoCta}
            whatsapp={whatsapp}
            whatsappLabel={page.whatsappCta}
            placement="faq"
          />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink">{page.finalTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.primaryCta}
            whatsapp={whatsapp}
            whatsappLabel={page.talkCta}
            placement="final"
          />
          <p className="mt-4 max-w-xl text-sm text-muted">{page.finalNote}</p>
        </Container>
      </Section>
    </>
  );
}
