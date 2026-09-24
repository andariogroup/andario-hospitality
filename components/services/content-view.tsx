import { TrackedLink } from '@/components/conversion/tracked-link';
import { WhatsAppButton } from '@/components/conversion/whatsapp-button';
import {
  AccommodationContentSystem,
  AndarioContentHeroVisual,
  ContentAuthenticity,
  ContentBeforeAfter,
  ContentEcosystem,
  ContentProcess,
  ContentReuseMatrix,
  EditorialPlanning,
  GalleryStory,
  GuestDecisionJourney,
  PhotographyShowcase,
  StepList,
} from '@/components/graphics/content';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqList } from '@/components/sections/faq-list';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/types';
import { href, type Locale, type RouteId } from '@/lib/i18n/routes';
import type { AnalyticsEvent } from '@/lib/analytics/events';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/seo/structured-data';

const relationRoutes: { routeId: RouteId; event: AnalyticsEvent }[] = [
  { routeId: 'andario-web', event: { name: 'andario_content_web_click' } },
  { routeId: 'andario-visibility', event: { name: 'andario_content_cta_click', placement: 'visibility' } },
  { routeId: 'andario-connect', event: { name: 'andario_content_cta_click', placement: 'connect' } },
  { routeId: 'andario-booking-engine', event: { name: 'andario_content_cta_click', placement: 'booking' } },
  { routeId: 'andario-growth', event: { name: 'andario_content_cta_click', placement: 'growth' } },
];

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
      <TrackedLink href={contactHref} event={{ name: 'andario_content_cta_click', placement }} cue>
        {primary}
      </TrackedLink>
      {whatsapp ? (
        <WhatsAppButton
          phone={whatsapp}
          locale={locale}
          context="content"
          label={whatsappLabel}
          event={{ name: 'andario_content_whatsapp_click' }}
        />
      ) : null}
    </div>
  );
}

function ContentFinalCTA({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const page = dict.contentPage;
  return (
    <Section tone="sand" className="pb-24">
      <Container>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{page.finalTitle}</h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted">{page.finalBody}</p>
        <LeadPair
          locale={locale}
          contactHref={href(locale, 'contact')}
          primary={page.primaryCta}
          whatsapp={whatsapp}
          whatsappLabel={page.talkCta}
          placement="final"
        />
        <p className="mt-4 max-w-xl text-sm text-muted">{page.finalNote}</p>
      </Container>
    </Section>
  );
}

export function ContentView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  const service = dict.services['andario-content'];
  const page = dict.contentPage;
  const contactHref = href(locale, 'contact');
  const crumbs = [
    { label: dict.nav.home, routeId: 'home' as const },
    { label: dict.nav.solutions, routeId: 'solutions' as const },
    { label: service.name, routeId: 'andario-content' as const },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          locale,
          routeId: 'andario-content',
        })}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <Section tone="sand" className="overflow-hidden">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs locale={locale} items={crumbs} />
            <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
            <p className="text-sm font-semibold tracking-[0.14em] text-teal">
              ANDARIO CONTENT · {locale === 'es' ? 'FOTOGRAFÍA + CONTENIDO' : 'PHOTOGRAPHY + CONTENT'}
            </p>
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
          <AndarioContentHeroVisual layers={page.heroLayers} caption={page.heroCaption} label={page.exampleLabel} />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{service.problemTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{service.problem}</p>
          <div className="mt-8">
            <GuestDecisionJourney questions={page.questions} steps={page.decisionSteps} note={page.decisionNote} />
          </div>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.problemCta}
            whatsapp={whatsapp}
            whatsappLabel={page.talkCta}
            placement="problem"
          />
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-2xl font-semibold text-ink">{page.whatTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.whatBody}</p>
          <p className="mt-4 text-sm font-semibold text-ink">{page.whatNote}</p>
          <div className="mt-10">
            <AccommodationContentSystem
              caption={page.anatomyCaption}
              columns={page.anatomyColumns}
              parts={page.anatomyParts}
              equals={page.anatomyEquals}
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.photoTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{page.photoBody}</p>
          <div className="mt-8">
            <PhotographyShowcase items={page.photoCategories} note={page.photoNote} />
          </div>
          <div className="mt-10 max-w-3xl">
            <h2 className="text-2xl font-semibold text-ink">{page.coordinationTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.coordinationBody}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.coordinationPoints.map((point) => (
                <li key={point} className="rounded-full bg-sand px-3 py-1.5 text-sm font-semibold text-ink">
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-muted">{page.coordinationNote}</p>
          </div>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.photoCta}
            whatsapp={whatsapp}
            whatsappLabel={page.talkCta}
            placement="photography"
          />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.optimizeTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.optimizeBody}</p>
            <div className="mt-6">
              <GalleryStory steps={page.optimizeSteps} note={page.optimizeNote} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.galleryTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.galleryBody}</p>
            <div className="mt-6">
              <GalleryStory steps={page.gallerySteps} note={page.galleryNote} />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.copyTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.copyBody}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.copyPoints.map((point) => (
                <li key={point} className="rounded-full bg-sand px-3 py-1.5 text-sm font-semibold text-ink">
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-muted">{page.copyPrinciple}</p>
            <div className="mt-6 grid gap-3">
              <article className="rounded-[var(--radius-card)] border border-sand-deep p-4">
                <p className="text-xs font-semibold text-muted">{page.exampleLabel}</p>
                <p className="mt-2 text-xs font-semibold text-teal">{page.genericLabel}</p>
                <p className="mt-1 text-sm text-ink">“{page.genericExample}”</p>
              </article>
              <article className="rounded-[var(--radius-card)] bg-ink p-4 text-white">
                <p className="text-xs font-semibold text-white/70">{page.usefulLabel}</p>
                <p className="mt-1 text-sm">“{page.usefulExample}”</p>
              </article>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.videoTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.videoBody}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.videoPoints.map((point) => (
                <li key={point} className="rounded-full bg-sand px-3 py-1.5 text-sm font-semibold text-ink">
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-muted">{page.videoNote}</p>
            <h2 className="mt-10 text-2xl font-semibold text-ink">{page.destinationTitle}</h2>
            <p className="mt-3 leading-7 text-muted">{page.destinationBody}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.destinationPoints.map((point) => (
                <li key={point} className="rounded-full border border-sand-deep px-3 py-1.5 text-sm text-ink">
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-muted">{page.destinationNote}</p>
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.socialTitle}</h2>
            <p className="mt-4 leading-7 text-muted">{page.socialBody}</p>
            <div className="mt-6">
              <StepList steps={page.socialChannels} />
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">{page.socialNote}</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.editorialTitle}</h2>
            <div className="mt-6">
              <EditorialPlanning steps={page.editorialSteps} categories={page.editorialCategories} note={page.editorialNote} />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          {page.relations.map((relation, index) => {
            const link = relationRoutes[index];
            return (
              <article key={relation.title}>
                <h2 className="text-2xl font-semibold text-ink">{relation.title}</h2>
                <p className="mt-3 leading-7 text-muted">{relation.body}</p>
                <div className="mt-4">
                  <StepList steps={relation.steps} />
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{relation.note}</p>
                {link ? (
                  <TrackedLink href={href(locale, link.routeId)} event={link.event} variant="secondary" className="mt-4">
                    {relation.hrefLabel}
                  </TrackedLink>
                ) : null}
              </article>
            );
          })}
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <ContentBeforeAfter
            label={page.exampleLabel}
            beforeLabel={page.beforeLabel}
            before={page.before}
            afterLabel={page.afterLabel}
            after={page.after}
            note={page.beforeNote}
          />
          <h2 className="mt-12 text-3xl font-semibold tracking-tight text-ink">{page.matrixTitle}</h2>
          <div className="mt-6">
            <ContentReuseMatrix
              center={page.matrixCenter}
              around={page.matrixAround}
              columns={page.matrixColumns}
              rows={page.matrixRows}
              note={page.matrixNote}
            />
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
                <p className="mt-3 text-sm leading-6 text-muted">
                  <span className="font-semibold text-ink">{page.whatLabel}. </span>
                  {group.what}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  <span className="font-semibold text-ink">{page.purposeLabel}. </span>
                  {group.purpose}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  <span className="font-semibold text-ink">{page.exampleCardLabel}. </span>
                  {group.example}
                </p>
              </article>
            ))}
          </div>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.scopeCta}
            whatsapp={whatsapp}
            whatsappLabel={page.talkCta}
            placement="scope"
          />
          <h2 className="mt-12 text-2xl font-semibold text-ink">{page.notIncludedTitle}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted">{page.notIncludedBody}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {page.notIncluded.map((item) => (
              <li key={item} className="rounded-full border border-sand-deep px-3 py-1.5 text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-muted">{page.notIncludedNote}</p>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.processTitle}</h2>
          <div className="mt-8">
            <ContentProcess steps={page.process} />
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-ink">{page.receiveTitle}</h2>
              <ul className="mt-4 space-y-2">
                {page.receive.map((item) => (
                  <li key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-6 text-muted">{page.receiveNote}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-ink">{page.journeyTitle}</h2>
              <div className="mt-4">
                <StepList steps={page.journeySteps} />
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">{page.journeyNote}</p>
              <h2 className="mt-8 text-2xl font-semibold text-ink">{page.assetTitle}</h2>
              <div className="mt-4">
                <StepList steps={page.assetSteps} />
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">{page.assetNote}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink">{page.whoTitle}</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {page.whoTypes.map((type) => (
              <li key={type} className="rounded-full bg-sand px-3 py-1.5 text-sm font-semibold text-ink">
                {type}
              </li>
            ))}
          </ul>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {page.whoFit.map((item) => (
              <li key={item} className="rounded-[var(--radius-card)] border border-sand-deep p-4 text-sm leading-6 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <h2 className="mt-12 text-2xl font-semibold text-ink">{page.whenTitle}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {page.when.map((item) => (
              <li key={item} className="rounded-[var(--radius-card)] bg-sand p-4 text-sm leading-6 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.notTitle}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {page.not.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] bg-white p-4">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 max-w-3xl">
            <h2 className="text-2xl font-semibold text-ink">{page.authenticTitle}</h2>
            <p className="mt-3 leading-7 text-muted">{page.authenticBody}</p>
            <div className="mt-4">
              <ContentAuthenticity points={page.authenticPoints} />
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-ink">{page.ecosystemTitle}</h2>
            <div className="mt-4">
              <ContentEcosystem steps={page.ecosystemSteps} note={page.ecosystemNote} />
            </div>
          </div>
          <article className="mt-10 max-w-3xl rounded-[var(--radius-card)] border border-sand-deep bg-white p-5">
            <h2 className="text-xl font-semibold text-ink">{page.pioneerTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{page.pioneerBody}</p>
          </article>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{dict.nav.faq}</h2>
          <div className="mt-6">
            <FaqList items={service.faqs} openEvent={{ name: 'andario_content_faq_open' }} />
          </div>
          <LeadPair
            locale={locale}
            contactHref={contactHref}
            primary={page.talkCta}
            whatsapp={whatsapp}
            whatsappLabel={page.whatsappCta}
            placement="faq"
          />
        </Container>
      </Section>

      <ContentFinalCTA locale={locale} dict={dict} whatsapp={whatsapp} />
    </>
  );
}
