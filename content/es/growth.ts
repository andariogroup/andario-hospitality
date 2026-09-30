import type { FaqItem, GrowthContent } from '@/content/types';

export const growthFaqsEs: FaqItem[] = [
  {
    q: '¿Qué es Andario Growth?',
    a: 'Es el servicio que analiza lo que ocurre en tus canales digitales para entender qué funciona, dónde existen oportunidades y qué conviene mejorar.',
  },
  {
    q: '¿Prometen más ingresos?',
    a: 'No. Growth aporta claridad y recomendaciones. No prometemos aumentos de ingresos ni posiciones en Google.',
  },
  {
    q: '¿Necesito tener analítica configurada?',
    a: 'Si ya tienes medición, la aprovechamos. Si no, podemos empezar por dejar una base clara según el alcance.',
  },
  {
    q: '¿Puedo empezar solo con Growth?',
    a: 'Sí. Los servicios se contratan por separado, según lo que tu alojamiento necesite.',
  },
];

export const growthEs: GrowthContent = {
  support:
    'Analizamos lo que ocurre en tus canales digitales para entender qué funciona, dónde existen oportunidades y qué conviene mejorar.',
  concepts: ['Medición', 'Análisis', 'Optimización'],
  primaryCta: 'Quiero mejorar mi alojamiento',
  talkCta: 'Hablar con Andario',
  dashboardLabel: 'Vista conceptual',
  dashboardNav: ['Resumen', 'Canales', 'Oportunidades'],
  dashboardMetrics: [
    { label: 'Visitas al sitio', value: '—', trend: 'Demo' },
    { label: 'Oportunidades', value: '—', trend: 'Demo' },
    { label: 'Interacciones', value: '—', trend: 'Demo' },
  ],
  dashboardChannelsTitle: 'Canales de tráfico',
  dashboardChannels: [
    { label: 'Google', value: 72 },
    { label: 'Directo', value: 48 },
    { label: 'Redes', value: 36 },
    { label: 'Otros', value: 22 },
  ],
  dashboardDevicesTitle: 'Dispositivos',
  dashboardDevices: [
    { label: 'Móvil', value: 62 },
    { label: 'Escritorio', value: 28 },
    { label: 'Tablet', value: 10 },
  ],
  loopTitle: 'Medir → Entender → Decidir → Mejorar',
  loop: [
    { title: 'Medir', body: 'Recopilamos información de tus canales digitales.' },
    { title: 'Entender', body: 'Analizamos comportamientos y oportunidades.' },
    { title: 'Decidir', body: 'Identificamos qué merece atención primero.' },
    { title: 'Mejorar', body: 'Te damos recomendaciones para avanzar.' },
  ],
  loopNote: 'Growth convierte la información digital de tu alojamiento en conocimiento útil para tomar decisiones.',
  doTitle: '¿Qué hacemos por tu alojamiento?',
  doItems: [
    {
      title: 'Medición de canales digitales',
      body: 'Organizamos la información de tus principales canales para que sea útil.',
    },
    {
      title: 'Análisis de comportamiento',
      body: 'Revisamos cómo interactúan las personas con tu presencia digital.',
    },
    {
      title: 'Seguimiento de oportunidades',
      body: 'Identificamos señales que ayudan a priorizar qué conviene trabajar primero.',
    },
    {
      title: 'Recomendaciones de mejora',
      body: 'Traducimos los hallazgos en acciones claras, no en reportes difíciles de usar.',
    },
  ],
  getTitle: 'Lo que obtienes',
  getSupport: 'Información clara para saber qué está funcionando y qué deberías mejorar.',
  getItems: [
    { title: 'Datos claros', body: 'Entiende lo que ocurre en tus canales digitales.' },
    { title: 'Resultados', body: 'Conoce cómo se comportan tus canales.' },
    { title: 'Oportunidades', body: 'Identifica dónde puedes mejorar.' },
    { title: 'Recomendaciones', body: 'Define qué acciones priorizar.' },
  ],
  editorialEyebrow: 'Los datos deben ayudarte a avanzar',
  editorialTitle: 'Medir es solo el comienzo.',
  editorialBody:
    'Growth convierte la información de tus canales digitales en conocimiento útil para tomar decisiones para tu alojamiento.',
  editorialCta: 'Conoce cómo trabajamos con Andario',
  editorialImage: '/growth/editorial.webp',
  editorialAlt: 'Espacio de trabajo digital con vista a un entorno de alojamiento.',
  heroAtmosphere: '/growth/hero-atmosphere.webp',
  heroAtmosphereAlt: 'Fachada de un alojamiento independiente.',
  finalImage: '/growth/final-cta.webp',
  finalAlt: 'Alojamiento al atardecer junto al paisaje.',
  finalTitle: '¿Quieres saber qué está funcionando en tu presencia digital?',
  finalBody: 'Analizamos tus datos, identificamos oportunidades y te ayudamos a definir qué mejorar.',
  diagnosisCta: 'Solicitar diagnóstico',
  finalNote: 'Partimos de tus objetivos, tus datos y la realidad de tu alojamiento.',
};
