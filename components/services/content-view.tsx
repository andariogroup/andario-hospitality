import { ServicePitchView } from '@/components/services/service-pitch-view';
import type { Dictionary } from '@/content/types';
import type { Locale } from '@/lib/i18n/routes';

export function ContentView({
  locale,
  dict,
  whatsapp,
}: {
  locale: Locale;
  dict: Dictionary;
  whatsapp: string | null;
}) {
  return (
    <ServicePitchView
      locale={locale}
      dict={dict}
      whatsapp={whatsapp}
      serviceId="andario-content"
      page={dict.contentPage}
      eyebrow={`ANDARIO CONTENT · ${dict.services['andario-content'].subtitle}`}
      whatsappContext="content"
      events={{
        cta: (placement) => ({ name: 'andario_content_cta_click', placement }),
        whatsapp: { name: 'andario_content_whatsapp_click' },
        crossSell: { name: 'andario_content_web_click' },
      }}
    />
  );
}
