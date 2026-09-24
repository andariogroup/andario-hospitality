import Image from 'next/image';
import Link from 'next/link';
import { SocialLinks } from '@/components/conversion/social-links';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { FooterEmail, FooterPhone, FooterTalk } from '@/components/layout/footer-channels';
import { Container } from '@/components/ui/container';
import { FooterLocales } from '@/components/navigation/footer-locales';
import { COMPANY, phoneLabel, site, type SocialLink, type SocialNetwork } from '@/lib/config/site';
import { href, isRoutePublic, type Locale, type ServiceId } from '@/lib/i18n/routes';
import type { Dictionary } from '@/content/types';

const companyLinks = (
  ['accommodations', 'how-we-work', 'cases', 'about', 'faq', 'contact'] as const
).filter(isRoutePublic);

const footerNetworks = ['instagram', 'linkedin', 'facebook'] as const satisfies readonly SocialNetwork[];

const linkClass =
  'inline-flex min-h-11 items-center text-sm text-white/80 transition-colors duration-200 hover:text-white';

export function Footer({
  locale,
  dict,
  socials,
}: {
  locale: Locale;
  dict: Dictionary;
  socials: SocialLink[];
}) {
  const year = new Date().getFullYear();
  const phone = phoneLabel(site.whatsapp);
  const footerSocials = footerNetworks.flatMap((network) => {
    const link = socials.find((item) => item.network === network);
    return link ? [link] : [];
  });
  const solutionGroups: { title: string; ids: ServiceId[] }[] = [
    { title: dict.chrome.footerGroupDiagnosis, ids: ['digital-check'] },
    {
      title: dict.chrome.footerGroupPresence,
      ids: ['andario-web', 'andario-visibility', 'andario-content'],
    },
    {
      title: dict.chrome.footerGroupTechnology,
      ids: ['andario-booking-engine', 'andario-connect', 'andario-growth'],
    },
  ];

  return (
    <footer>
      <section className="bg-white" aria-labelledby="footer-cta-title">
        <Container className="py-8 sm:py-12">
          <div className="rounded-3xl bg-sand px-6 py-10 sm:px-10 sm:py-12">
            <h2 id="footer-cta-title" className="max-w-2xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {dict.chrome.footerCtaTitle}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">{dict.chrome.footerCtaBody}</p>
            <TrackedLink
              href={href(locale, 'contact')}
              event={{ name: 'footer_cta_click' }}
              className="mt-6"
            >
              {dict.chrome.primaryCta}
            </TrackedLink>
          </div>
        </Container>
      </section>

      <div className="bg-ink text-white">
        <Container className="grid gap-8 py-12 sm:py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <Image
              src="/brand/logo-horizontal.svg"
              alt={COMPANY.parent}
              width={176}
              height={61}
              unoptimized
              className="h-auto w-40 rounded-lg bg-white p-1.5"
            />
            <p className="mt-4 text-base font-semibold">{COMPANY.brand}</p>
            <p className="mt-1 text-sm text-white/80">{dict.chrome.footerTagline}</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">{dict.chrome.footerDescription}</p>
            <p className="mt-4 text-sm text-white/70">{dict.chrome.footerLine}</p>
            <p className="mt-1 text-xs text-white/60">
              {COMPANY.parent} — NIT {COMPANY.nit}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.14em] text-white/70 uppercase">
              {dict.chrome.solutionsTitle}
            </h2>
            <div className="mt-3 space-y-4">
              {solutionGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-medium tracking-wide text-white/65">{group.title}</p>
                  <ul>
                    {group.ids.map((id) => (
                      <li key={id}>
                        <Link
                          href={href(locale, id)}
                          className={
                            id === 'andario-booking-engine'
                              ? 'inline-flex min-h-11 items-center text-sm font-semibold text-white transition-colors duration-200 hover:text-white/80'
                              : linkClass
                          }
                        >
                          {dict.services[id].name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.14em] text-white/70 uppercase">
              {dict.chrome.companyTitle}
            </h2>
            <ul className="mt-3">
              {companyLinks.map((id) => (
                <li key={id}>
                  <Link className={linkClass} href={href(locale, id)}>
                    {dict.nav[id]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.14em] text-white/70 uppercase">
              {dict.chrome.contactTitle}
            </h2>
            <div className="mt-3 text-sm leading-6 text-white/80">
              {site.city || site.country ? <p>{[site.city, site.country].filter(Boolean).join(', ')}</p> : null}
              {site.address ? <p>{site.address}</p> : null}
            </div>
            <div className="mt-1 flex flex-col items-start">
              {site.email ? <FooterEmail email={site.email} /> : null}
              {site.whatsapp && phone ? <FooterPhone digits={site.whatsapp} label={phone} /> : null}
              <FooterTalk
                phone={site.whatsapp}
                locale={locale}
                label={dict.chrome.footerTalkCta}
                whatsappLabel={dict.chrome.footerWhatsappLabel}
                fallbackHref={href(locale, 'contact')}
              />
            </div>
            <div className="mt-3">
              <SocialLinks links={footerSocials} icons />
            </div>
          </div>
        </Container>

        <div className="border-t border-white/10">
          <Container className="flex flex-col gap-4 py-6 pr-20 pb-24 lg:flex-row lg:items-end lg:justify-between lg:pb-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <nav aria-label={dict.chrome.legalTitle} className="flex flex-wrap gap-x-4">
                <Link className={`${linkClass} text-xs`} href={href(locale, 'privacy')}>
                  {dict.nav.privacy}
                </Link>
                <Link className={`${linkClass} text-xs`} href={href(locale, 'terms')}>
                  {dict.nav.terms}
                </Link>
              </nav>
              <FooterLocales locale={locale} label={dict.chrome.language} />
            </div>
            <p className="max-w-sm text-xs leading-5 text-white/70 lg:text-right">
              © {year} {COMPANY.brand} · {dict.chrome.footerLine.replace(/\.$/, '')}
              <span className="mt-1 block">
                {COMPANY.parent} · NIT {COMPANY.nit}
              </span>
            </p>
          </Container>
        </div>
      </div>
    </footer>
  );
}
