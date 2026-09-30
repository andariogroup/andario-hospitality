import type { DigitalCheckContent, FaqItem } from '@/content/types';

export const digitalCheckFaqsEs: FaqItem[] = [
  {
    q: '¿Qué es Digital Check?',
    a: 'Es un diagnóstico y estrategia digital para tu alojamiento. Analizamos la situación actual, identificamos oportunidades y construimos una hoja de ruta priorizada.',
  },
  {
    q: '¿Qué recibo al finalizar?',
    a: 'Análisis, hallazgos, prioridades, estrategia y una hoja de ruta para saber qué conviene trabajar primero.',
  },
  {
    q: '¿Necesito contratar otros servicios después?',
    a: 'No. El diagnóstico orienta la decisión. Los servicios posteriores se contratan por separado solo si tienen sentido.',
  },
  {
    q: '¿Garantiza más reservas o posiciones en Google?',
    a: 'No. Digital Check aporta claridad y dirección. No garantiza reservas, tráfico ni una posición en buscadores.',
  },
  {
    q: '¿Cómo lo solicito?',
    a: 'Desde Solicitar mi Digital Check o por WhatsApp. La conversación no obliga a contratar el resto de servicios.',
  },
];

export const digitalCheckEs: DigitalCheckContent = {
  support:
    'Analizamos la situación actual de tu alojamiento, identificamos oportunidades y construimos una estrategia clara y priorizada para que sepas qué mejorar primero y cómo avanzar.',
  primaryCta: 'Solicitar mi Digital Check',
  talkCta: 'Hablar con Andario',
  benefits: ['Diagnóstico', 'Estrategia', 'Prioridades', 'Hoja de ruta'],
  dashboardLabel: 'Vista conceptual',
  dashboardScoreLabel: 'Potencial',
  dashboardScoreNote: 'Demo',
  dashboardAreas: [
    { label: 'Google', value: 72 },
    { label: 'Sitio web', value: 64 },
    { label: 'Redes', value: 58 },
    { label: 'WhatsApp', value: 70 },
    { label: 'Reservas', value: 52 },
    { label: 'Contenido', value: 60 },
  ],
  heroAtmosphere: '/digital-check/hero-atmosphere.jpg',
  heroAtmosphereAlt: 'Fachada de un alojamiento independiente.',
  problemTitle: 'Tu presencia digital puede estar funcionando por partes.',
  problemBody:
    'Puedes tener web, Google, redes sociales, WhatsApp y plataformas de reserva. Pero si cada canal funciona por separado y no sabes qué priorizar, es difícil convertir todo ese esfuerzo en una estrategia.',
  problemSteps: [
    {
      title: 'Te encuentran',
      body: 'Google · Redes · OTAs',
      image: '/digital-check/step-find.webp',
    },
    {
      title: 'Te conocen',
      body: 'Web · Contenido · Experiencia',
      image: '/digital-check/step-know.webp',
    },
    {
      title: 'Te contactan',
      body: 'WhatsApp · Reservas',
      image: '/digital-check/step-contact.webp',
    },
    {
      title: 'Tú decides',
      body: 'Datos · Prioridades · Estrategia',
      image: '/digital-check/step-decide.webp',
    },
  ],
  whatEyebrow: '¿Qué es Digital Check?',
  whatTitle: 'Un diagnóstico para saber dónde estás y qué camino seguir.',
  whatBody:
    'Analizamos la presencia digital de tu alojamiento desde la perspectiva de un huésped y desde la realidad de tu negocio.',
  whatImage: '/digital-check/what.jpg',
  whatAlt: 'Terraza de alojamiento con vista al paisaje.',
  lenses: [
    {
      title: 'Visibilidad',
      body: '¿Te encuentran las personas que buscan alojamiento en tu destino?',
    },
    {
      title: 'Experiencia',
      body: '¿Tu presencia digital transmite lo que realmente ofreces?',
    },
    {
      title: 'Reservas',
      body: '¿Existe un camino claro desde el interés hasta el contacto o la reserva?',
    },
    {
      title: 'Información',
      body: '¿Tienes claridad sobre qué funciona y dónde existen oportunidades?',
    },
  ],
  whatNote:
    'No todos los alojamientos necesitan lo mismo. Por eso el diagnóstico se adapta a tu situación, necesidades y objetivos.',
  receiveEyebrow: '¿Qué recibes?',
  receiveTitle: 'No recibes solamente un diagnóstico. Recibes una dirección.',
  receiveBody:
    'Un análisis claro, hallazgos accionables y una estrategia que te muestra exactamente qué conviene trabajar primero.',
  receive: [
    { title: 'Análisis', body: 'Conocemos tu situación actual.' },
    { title: 'Hallazgos', body: 'Identificamos oportunidades y puntos clave.' },
    { title: 'Prioridades', body: 'Definimos qué conviene trabajar primero.' },
    { title: 'Estrategia', body: 'Construimos un camino digital adaptado a tu alojamiento.' },
    { title: 'Hoja de ruta', body: 'Te mostramos cómo avanzar y en qué orden.' },
  ],
  resultTitle: 'De la información a una estrategia clara.',
  resultBody:
    'El objetivo no es entregarte una lista de problemas. Es ayudarte a entender qué está pasando, qué oportunidades existen y dónde tiene sentido concentrar tus esfuerzos.',
  resultFlow: ['Situación actual', 'Hallazgos', 'Oportunidades', 'Prioridades', 'Estrategia digital', 'Hoja de ruta'],
  actionTitle: 'Del diagnóstico a la acción.',
  actionBody:
    'Según lo que encontremos, podremos recomendarte dónde tiene sentido invertir primero: web, visibilidad, reservas, comunicación, contenido o medición.',
  actionFlow: ['Digital Check', 'Estrategia', 'Implementación', 'Medición', 'Evolución'],
  finalImage: '/digital-check/final-cta.webp',
  finalAlt: 'Alojamiento al atardecer.',
  finalTitle: 'Tu alojamiento ya tiene algo que ofrecer. Ahora hagamos que más personas puedan descubrirlo.',
  finalBody:
    'Cuéntanos dónde estás hoy y hacia dónde quieres llevar tu alojamiento. Nosotros te ayudamos a encontrar el camino digital.',
  finalNote: 'Sin compromiso de contratar otros servicios.',
};
