import { ServicePitchView } from '@/components/services/service-pitch-view';
import type { Dictionary } from '@/content/types';
import type { Locale } from '@/lib/i18n/routes';

export function VisibilityView({
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
      serviceId="andario-visibility"
      page={dict.visibility}
      eyebrow={`ANDARIO VISIBILITY · ${dict.services['andario-visibility'].subtitle}`}
      whatsappContext="visibility"
      events={{
        cta: (placement) => ({ name: 'andario_visibility_cta_click', placement }),
        whatsapp: { name: 'andario_visibility_whatsapp_click' },
        crossSell: { name: 'andario_visibility_web_click' },
      }}
    />
  );
}
