import type { Locale } from '@/lib/i18n/routes';

export type WhatsAppContext =
  | 'general'
  | 'diagnosis'
  | 'service'
  | 'booking'
  | 'digital-check'
  | 'andario-web'
  | 'visibility'
  | 'connect'
  | 'content'
  | 'growth'
  | 'solutions'
  | 'home'
  | 'accommodations'
  | 'how-we-work'
  | 'about'
  | 'contact';

const MESSAGES: Record<Locale, Record<WhatsAppContext, string>> = {
  es: {
    general: 'Hola, quiero hablar con Andario Hospitality sobre mi alojamiento.',
    diagnosis: 'Hola, quiero solicitar un diagnóstico digital para mi alojamiento.',
    service: 'Hola, quiero información sobre las soluciones de Andario Hospitality.',
    booking: 'Hola, quiero información sobre Andario Booking Engine para mi alojamiento.',
    'digital-check': 'Hola, quiero conocer Digital Check para mi alojamiento y saber cómo funciona el diagnóstico digital.',
    'andario-web': 'Hola, quiero conocer Andario Web para mi alojamiento.',
    visibility: 'Hola, quiero conocer Andario Visibility para mi alojamiento.',
    connect: 'Hola, quiero conocer Andario Connect para mi alojamiento.',
    content: 'Hola, quiero conocer Andario Content para mi alojamiento.',
    growth: 'Hola, quiero conocer Andario Growth para mi alojamiento.',
    solutions: 'Hola, quiero conocer las soluciones de Andario Hospitality para mi alojamiento.',
    home: 'Hola, quiero conocer cómo Andario Hospitality puede ayudar a digitalizar mi alojamiento.',
    accommodations: 'Hola, quiero conocer cómo Andario Hospitality puede ayudar a digitalizar mi alojamiento.',
    'how-we-work':
      'Hola, quiero conocer cómo trabaja Andario Hospitality y saber si puede encajar con las necesidades de mi alojamiento.',
    about: 'Hola, quiero conocer más sobre Andario Hospitality y saber cómo puede ayudar a mi alojamiento.',
    contact: 'Hola, quiero hablar sobre mi alojamiento y saber por dónde empezar.',
  },
  en: {
    general: 'Hello, I would like to talk with Andario Hospitality about my accommodation.',
    diagnosis: 'Hello, I would like to request a digital diagnosis for my accommodation.',
    service: 'Hello, I would like information about Andario Hospitality solutions.',
    booking: 'Hello, I would like information about Andario Booking Engine for my property.',
    'digital-check': 'Hello, I would like to know Digital Check for my property and how the digital diagnosis works.',
    'andario-web': 'Hello, I would like to know Andario Web for my property.',
    visibility: 'Hello, I would like to know Andario Visibility for my property.',
    connect: 'Hello, I would like to know Andario Connect for my property.',
    content: 'Hello, I would like to know Andario Content for my property.',
    growth: 'Hello, I would like to know Andario Growth for my property.',
    solutions: 'Hello, I would like to know the Andario Hospitality solutions for my property.',
    home: 'Hello, I would like to know how Andario Hospitality can help digitalize my property.',
    accommodations: 'Hello, I would like to know how Andario Hospitality can help digitalize my property.',
    'how-we-work':
      'Hello, I would like to know how Andario Hospitality works and whether it can fit the needs of my property.',
    about: 'Hello, I would like to know more about Andario Hospitality and how it can help my property.',
    contact: 'Hello, I would like to talk about my property and find out where to start.',
  },
};

export function whatsAppUrl(
  phoneDigits: string,
  locale: Locale,
  context: WhatsAppContext = 'general',
): string {
  const digits = phoneDigits.replace(/\D/g, '');
  const text = encodeURIComponent(MESSAGES[locale][context]);
  return `https://wa.me/${digits}?text=${text}`;
}
