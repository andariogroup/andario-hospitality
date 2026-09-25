'use client';

import { usePathname } from 'next/navigation';
import { TrackedLink } from '@/components/conversion/tracked-link';
import { Container } from '@/components/ui/container';
import { href, type Locale } from '@/lib/i18n/routes';

export function FooterCta({
  locale,
  title,
  body,
  cta,
}: {
  locale: Locale;
  title: string;
  body: string;
  cta: string;
}) {
  const pathname = usePathname();
  if (pathname === `/${locale}`) return null;

  return (
    <section className="bg-white" aria-labelledby="footer-cta-title">
      <Container className="py-8 sm:py-12">
        <div className="rounded-3xl bg-sand px-6 py-10 sm:px-10 sm:py-12">
          <h2 id="footer-cta-title" className="max-w-2xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">{body}</p>
          <TrackedLink href={href(locale, 'contact')} event={{ name: 'footer_cta_click' }} className="mt-6">
            {cta}
          </TrackedLink>
        </div>
      </Container>
    </section>
  );
}
