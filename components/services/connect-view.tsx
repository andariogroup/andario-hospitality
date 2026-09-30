import { ServicePitchView } from '@/components/services/service-pitch-view';
import type { Dictionary } from '@/content/types';
import type { Locale } from '@/lib/i18n/routes';

export function ConnectView({
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
      serviceId="andario-connect"
      page={dict.connect}
      eyebrow={`ANDARIO CONNECT · ${dict.services['andario-connect'].subtitle}`}
      whatsappContext="connect"
      events={{
        cta: (placement) => ({ name: 'andario_connect_cta_click', placement }),
        whatsapp: { name: 'andario_connect_whatsapp_click' },
        crossSell: { name: 'andario_connect_booking_click' },
      }}
    />
  );
}
