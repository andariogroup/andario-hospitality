import type { ContentPage, FaqItem } from '@/content/types';

export const contentFaqsEs: FaqItem[] = [
  {
    q: '¿Qué es Andario Content?',
    a: 'Es el servicio que crea fotografía y contenido para mostrar tus espacios, servicios y la experiencia que quieres transmitir, con una presencia más cuidada y coherente.',
  },
  {
    q: '¿Incluye fotografía profesional?',
    a: 'Puede incluirla según el alcance. Coordinamos la producción visual que tu alojamiento necesite.',
  },
  {
    q: '¿Prometen más seguidores o viralidad?',
    a: 'No. Creamos contenido útil y coherente. No prometemos viralidad, número de seguidores ni reservas por una publicación.',
  },
  {
    q: '¿Puedo empezar solo con Content?',
    a: 'Sí. Los servicios se contratan por separado, según lo que tu alojamiento necesite.',
  },
];

export const contentPageEs: ContentPage = {
  support:
    'Creamos fotografías y contenido profesional para mostrar tus espacios, transmitir la experiencia de tu alojamiento y construir una presencia que inspire confianza desde el primer vistazo.',
  concepts: ['Fotografía', 'Web', 'Redes sociales', 'Identidad visual'],
  primaryCta: 'Quiero mejorar mi contenido',
  talkCta: 'Hablar con Andario',
  heroImage: '/booking-engine/room-sea.jpg',
  heroAlt: 'Habitación luminosa con vista hacia el exterior',
  heroCards: [
    { label: 'Habitaciones', image: '/andario-web/find-rooms.webp' },
    { label: 'Espacios', image: '/andario-web/personalize.jpg' },
    { label: 'Experiencias', image: '/andario-web/experience.jpg' },
    { label: 'Detalles', image: '/andario-web/find-gallery.jpg' },
  ],
  journeyTitle: 'Antes de reservar, el huésped quiere imaginarse allí.',
  journeyBody:
    'Cuando una persona descubre un alojamiento en Internet todavía no puede recorrer sus habitaciones, sentarse en su terraza o conocer personalmente el ambiente. Las imágenes y el contenido tienen que ayudarle a hacerlo.',
  journey: [
    { title: 'Lo descubre', image: '/digital-check/step-find.webp' },
    { title: 'Ve tus espacios', image: '/andario-web/find-rooms.webp' },
    { title: 'Se imagina allí', image: '/andario-web/experience.jpg' },
    { title: 'Conoce lo que ofreces', image: '/andario-web/find-services.webp' },
    { title: 'Siente confianza', image: '/home/known-reception.webp' },
    { title: 'Decide conocer más', image: '/digital-check/step-decide.webp' },
  ],
  compareTitle: 'El mismo alojamiento puede contar historias muy diferentes.',
  improvisedTitle: 'Presentación improvisada',
  improvisedPoints: [
    'Fotos oscuras o poco atractivas',
    'Imágenes sin coherencia',
    'Información poco clara',
    'Menor impacto visual',
    'Más difícil transmitir la experiencia',
  ],
  improvisedImages: [
    '/home/andario-city-building.webp',
    '/how-we-work/known-digital.webp',
    '/digital-check/dashboard-photo.webp',
    '/home/digital-check-desk.webp',
  ],
  polishedTitle: 'Presentación cuidada',
  polishedPoints: [
    'Fotografías luminosas y profesionales',
    'Espacios bien presentados',
    'Identidad visual coherente',
    'Información clara',
    'Una imagen más cercana a la experiencia real',
  ],
  polishedImages: [
    '/booking-engine/room-sea.jpg',
    '/andario-web/personalize.jpg',
    '/andario-web/hero-property.webp',
    '/booking-engine/coast-close.jpg',
  ],
  whatTitle: 'Construimos una imagen que representa mejor tu alojamiento.',
  whatBody:
    'Fotografía, contenido y planificación pensados para mostrar lo que hace especial a tu alojamiento en cada punto de contacto.',
  whatItems: [
    {
      title: 'Fotografía',
      body: 'Mostramos tus espacios con intención: habitaciones, zonas comunes, exteriores, detalles y experiencias.',
    },
    {
      title: 'Contenido para tu web',
      body: 'Ayudamos a presentar tus espacios, servicios y propuesta de forma clara y atractiva.',
    },
    {
      title: 'Contenido para redes',
      body: 'Construimos material visual para comunicar tu alojamiento de forma más cuidada y coherente.',
    },
    {
      title: 'Dirección de contenido',
      body: 'Definimos qué conviene mostrar, cómo contarlo y cómo mantener una comunicación coherente.',
    },
  ],
  mosaicTitle: 'Cada rincón puede ayudar a contar tu historia.',
  mosaicBody: 'Habitaciones, espacios comunes, exteriores, detalles, servicios, experiencias y mucho más.',
  mosaic: [
    {
      label: 'Exteriores',
      image: '/andario-web/hero-property.webp',
      alt: 'Fachada y entorno exterior de un alojamiento',
      span: 'tall',
    },
    {
      label: 'Habitaciones',
      image: '/andario-web/find-rooms.webp',
      alt: 'Habitación preparada para huéspedes',
    },
    {
      label: 'Detalles',
      image: '/andario-web/find-gallery.jpg',
      alt: 'Detalle decorativo del interior del alojamiento',
    },
    {
      label: 'Espacios comunes',
      image: '/andario-web/personalize.jpg',
      alt: 'Espacio común con atmósfera cálida',
      span: 'wide',
    },
    {
      label: 'Experiencias',
      image: '/andario-web/experience.jpg',
      alt: 'Experiencia de estancia en un alojamiento',
      span: 'wide',
    },
    {
      label: 'Servicios',
      image: '/andario-web/find-services.webp',
      alt: 'Servicios y comodidades del alojamiento',
    },
  ],
  channelsTitle: 'Contenido que trabaja en diferentes puntos de tu presencia digital.',
  channelsBody:
    'Una misma base de contenido puede ayudarte a presentar tu alojamiento de forma coherente en diferentes canales.',
  channels: [
    {
      title: 'Web',
      body: 'Presenta tus habitaciones, espacios, servicios y experiencias.',
      image: '/andario-web/find-stay.webp',
    },
    {
      title: 'Presencia en buscadores',
      body: 'Refuerza la forma en que las personas descubren y conocen tu alojamiento.',
      image: '/home/andario-visibility-card.webp',
    },
    {
      title: 'Redes sociales',
      body: 'Mantén una comunicación visual más cuidada y coherente.',
      image: '/home/andario-content-card.webp',
    },
    {
      title: 'Reservas',
      body: 'Utiliza imágenes claras para ayudar a presentar tus opciones de alojamiento cuando corresponda.',
      image: '/andario-web/find-booking.webp',
    },
  ],
  experienceTitle: 'No vendes solamente una habitación.',
  experienceBody:
    'Un huésped puede estar buscando descanso, una escapada, conocer un nuevo destino, compartir con alguien o simplemente sentirse cómodo lejos de casa.',
  experienceHighlight: 'El contenido ayuda a mostrar la experiencia que existe detrás de tus espacios.',
  experienceImage: '/growth/editorial.webp',
  experienceAlt: 'Persona disfrutando de una vista desde un alojamiento',
  experienceMoments: [
    { label: 'Descansar', image: '/booking-engine/room-sea.jpg' },
    { label: 'Descubrir', image: '/booking-engine/coast-close.jpg' },
    { label: 'Compartir', image: '/andario-web/experience.jpg' },
    { label: 'Disfrutar', image: '/andario-web/final-cta.webp' },
    { label: 'Sentirse bienvenido', image: '/home/known-reception.webp' },
  ],
  benefitsTitle: '¿Qué puede cambiar para tu alojamiento?',
  benefits: [
    {
      title: 'Una primera impresión más cuidada',
      body: 'Tu presencia digital refleja mejor la calidad y personalidad de tu alojamiento.',
    },
    {
      title: 'Más confianza',
      body: 'Una presentación visual clara ayuda al futuro huésped a comprender mejor qué encontrará.',
    },
    {
      title: 'Una identidad más coherente',
      body: 'Web, redes y otros puntos de contacto pueden contar una misma historia.',
    },
    {
      title: 'Más contenido para comunicar',
      body: 'Construyes una base visual que puedes utilizar en diferentes puntos de tu presencia digital.',
    },
  ],
  bridgeTitle: 'El contenido atrae.\nLa web ayuda a convertir.',
  bridgeLead:
    'Content muestra tu alojamiento. Web ayuda a presentar quién eres y qué ofreces para que el huésped pueda dar el siguiente paso.',
  bridge: [
    { title: 'Andario Content', role: 'Muestra tu alojamiento' },
    { title: 'El huésped', role: 'Se interesa' },
    { title: 'Andario Web', role: 'Explica y presenta' },
    { title: 'Contacto / Reserva', role: 'Siguiente paso' },
  ],
  finalImage: '/andario-web/final-cta.webp',
  finalAlt: 'Terraza y ambiente de alojamiento al atardecer',
  finalTitle: 'Tu alojamiento ya tiene una historia.\nHagamos que se vea.',
  finalBody:
    'Muéstranos cómo se presenta hoy tu alojamiento y conversemos sobre cómo construir una imagen que represente mejor todo lo que tienes para ofrecer.',
  finalNote: 'Fotografía · Contenido · Identidad · Presencia digital',
};
