import type { ContentPage, FaqItem } from '@/content/types';

export const contentFaqsEs: FaqItem[] = [
  {
    q: '¿Qué es Andario Content?',
    a: 'Es el servicio que crea contenido para mostrar tus espacios, servicios y la experiencia que quieres transmitir, de forma coherente y atractiva.',
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
    'Creamos contenido que muestra tus espacios, tus servicios y la experiencia que quieres transmitir para que tu alojamiento conecte mejor con futuros huéspedes.',
  concepts: ['Fotografía', 'Contenido', 'Redes'],
  primaryCta: 'Quiero conocer este servicio',
  talkCta: 'Hablar con Andario',
  opportunityTitle: 'Antes de reservar, el huésped quiere imaginarse allí.',
  opportunityBody:
    'Las imágenes y el contenido influyen en cómo las personas perciben un alojamiento antes de tomar una decisión.',
  opportunityPoints: ['Mostrar', 'Inspirar', 'Conectar'],
  doTitle: '¿Qué hacemos por tu alojamiento?',
  doItems: [
    {
      title: 'Fotografía y dirección visual',
      body: 'Material visual pensado para presentar tus espacios con claridad y coherencia.',
    },
    {
      title: 'Contenido para web',
      body: 'Textos e imágenes que ayudan a explicar tu alojamiento en tu sitio.',
    },
    {
      title: 'Contenido para redes',
      body: 'Piezas alineadas con tu marca para mantener una presencia más atractiva.',
    },
    {
      title: 'Planificación editorial',
      body: 'Una dirección clara para que el contenido acompañe tus objetivos, no algo improvisado.',
    },
  ],
  getTitle: 'Lo que obtienes',
  getItems: [
    'Una imagen más profesional',
    'Contenido coherente con tu marca',
    'Material para web y redes',
    'Una comunicación más atractiva',
  ],
  crossSellBody: 'El contenido atrae. La web ayuda a convertir.',
  crossSellCta: 'Conoce Andario Web',
  crossSellRoute: 'andario-web',
  finalTitle: '¿Quieres mostrar mejor todo lo que tu alojamiento tiene para ofrecer?',
  finalBody: 'Cuéntanos cómo se ve hoy tu alojamiento y qué te gustaría comunicar mejor.',
  diagnosisCta: 'Solicitar diagnóstico',
  finalNote: 'Partimos de tu alojamiento, tus objetivos y tus necesidades.',
};
