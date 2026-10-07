import type { ConnectContent, FaqItem } from '@/content/types';

export const connectFaqsEs: FaqItem[] = [
  {
    q: '¿Qué es Andario Connect?',
    a: 'Es el servicio que organiza la comunicación de tu alojamiento para ayudarte a responder consultas frecuentes, orientar a tus huéspedes y facilitar que cada conversación encuentre el siguiente paso.',
  },
  {
    q: '¿La automatización reemplaza a mi equipo?',
    a: 'No. Automatizamos lo repetitivo para que tú y tu equipo puedan concentrarse en las conversaciones donde hace falta una persona.',
  },
  {
    q: '¿Trabaja con WhatsApp?',
    a: 'Sí. WhatsApp suele ser el canal principal de atención. Organizamos la comunicación según el alcance acordado para tu alojamiento.',
  },
  {
    q: '¿Connect reserva automáticamente?',
    a: 'No. Connect ayuda a organizar y orientar la conversación. Cuando el huésped quiere avanzar, puede dirigirse al enlace de reserva de tu Booking Engine u otro camino que definamos juntos.',
  },
  {
    q: '¿Puedo empezar solo con Connect?',
    a: 'Sí. Los servicios se contratan por separado, según lo que tu alojamiento necesite.',
  },
];

export const connectEs: ConnectContent = {
  support:
    'Organizamos la comunicación de tu alojamiento para ayudarte a responder consultas, orientar a tus huéspedes y facilitar que cada conversación encuentre el siguiente paso.',
  concepts: ['WhatsApp', 'Consultas frecuentes', 'Respuestas más claras', 'Más oportunidades'],
  primaryCta: 'Quiero mejorar mi atención',
  talkCta: 'Hablar con Andario',
  heroImage: '/solutions/reception.webp',
  heroAlt: 'Espacio de recepción y atención de un alojamiento',
  chatGuestLabel: 'Huésped',
  chatGuestMessage: 'Hola 👋\n¿Tienen habitaciones disponibles para este fin de semana?',
  chatPropertyLabel: 'Alojamiento',
  chatPropertyMessage:
    '¡Hola! Claro, podemos ayudarte a consultar la disponibilidad.\n\n¿Qué te gustaría conocer primero?',
  chatOptions: ['Habitaciones', 'Tarifas', 'Ubicación', 'Disponibilidad'],
  chatCaption: 'Representación conceptual: una conversación más simple para tus huéspedes.',
  opportunityTitle: 'Cada mensaje puede ser una oportunidad.',
  opportunityBody:
    'Tus futuros huéspedes te escriben para resolver dudas, conocer precios, confirmar disponibilidad, preguntar por la ubicación y mucho más. Cuando las consultas llegan durante todo el día y todo depende de respuestas manuales, mantener organizada cada conversación puede convertirse en una tarea difícil.',
  floatingMessages: [
    'Hola, ¿cuánto cuesta la noche?',
    '¿Tienen parqueadero?',
    '¿Cómo llego al alojamiento?',
    '¿Hay disponibilidad para mañana?',
  ],
  problems: [
    {
      title: 'Muchas preguntas repetidas',
      body: 'Responder una y otra vez información similar consume tiempo.',
    },
    {
      title: 'Consultas en diferentes momentos',
      body: 'No siempre puedes responder inmediatamente.',
    },
    {
      title: 'Conversaciones sin siguiente paso',
      body: 'Una persona puede estar interesada, pero necesita saber qué hacer después.',
    },
  ],
  whatEyebrow: 'ANDARIO CONNECT',
  whatTitle: 'Una forma más organizada de atender a tus huéspedes.',
  whatBody:
    'Ayudamos a estructurar cómo respondes las consultas más frecuentes y cómo acompañas al huésped desde su primera pregunta hasta el siguiente paso.',
  whatImage: '/andario-web/personalize.jpg',
  whatAlt: 'Patio y arquitectura de un alojamiento de hospitalidad',
  whatChecklist: [
    'Responde consultas frecuentes',
    'Orienta hacia el siguiente paso',
    'Simplifica tareas repetitivas',
    'Mantiene la atención humana',
  ],
  whatItems: [
    {
      title: 'Responder',
      body: 'Organizamos respuestas para las consultas más frecuentes de tus huéspedes.',
    },
    {
      title: 'Orientar',
      body: 'Ayudamos a que cada conversación tenga un camino claro según lo que necesita la persona.',
    },
    {
      title: 'Simplificar',
      body: 'Automatizamos tareas repetitivas cuando tiene sentido, manteniendo la posibilidad de atención humana.',
    },
    {
      title: 'Acompañar',
      body: 'Facilitamos que el huésped encuentre el siguiente paso: obtener información, consultar disponibilidad, contactarte o iniciar una reserva.',
    },
  ],
  demoTitle: 'Así puede sentirse una conversación mejor organizada.',
  demoBody:
    'Una conversación clara y bien estructurada ayuda al huésped a encontrar la información que necesita y avanzar hacia el siguiente paso.',
  demoSteps: [
    {
      label: '01',
      title: 'Huésped pregunta',
      body: 'Hola 👋\nQuiero información sobre las habitaciones.',
    },
    {
      label: '02',
      title: 'Opciones',
      body: '¿Qué te gustaría conocer?',
      options: ['Habitaciones', 'Tarifas', 'Ubicación', 'Disponibilidad'],
    },
    {
      label: '03',
      title: 'Información',
      body: 'Conoce las opciones disponibles en nuestro alojamiento.',
      cta: 'Ver habitaciones',
    },
    {
      label: '04',
      title: 'Siguiente paso',
      body: '¿Quieres consultar disponibilidad?',
      actions: ['Consultar disponibilidad', 'Hablar con nosotros'],
    },
  ],
  benefitsEyebrow: 'BENEFICIOS',
  benefitsTitle: '¿Qué puede mejorar en tu alojamiento?',
  benefits: [
    {
      title: 'Menos tiempo en preguntas repetidas',
      body: 'Organiza información que tus huéspedes solicitan frecuentemente.',
      image: '/home/known-reception.webp',
    },
    {
      title: 'Respuestas más claras',
      body: 'Ayuda a mantener una atención consistente y fácil de entender.',
      image: '/andario-web/find-contact.webp',
    },
    {
      title: 'Conversaciones mejor orientadas',
      body: 'Cada consulta puede conducir hacia el siguiente paso adecuado.',
      image: '/digital-check/step-contact.webp',
    },
    {
      title: 'Más tiempo para atender tu alojamiento',
      body: 'Reduce tareas repetitivas sin eliminar el contacto humano.',
      image: '/booking-engine/room-sea.jpg',
    },
  ],
  balanceTitle: 'Automatizar no significa dejar de hablar con tus huéspedes.',
  balanceBody:
    'Automatizamos lo repetitivo para que tú puedas concentrarte en las conversaciones donde realmente hace falta una persona.',
  balanceRepetitiveTitle: 'Consultas repetitivas',
  balanceRepetitive: [
    'Preguntas sobre precios',
    'Información general',
    'Ubicación',
    'Disponibilidad',
  ],
  balanceCenterTitle: 'Andario Connect',
  balanceCenterBody: 'Organiza, responde y orienta',
  balanceHumanTitle: 'Cuando necesita ayuda',
  balanceHuman: [
    'Consultas especiales',
    'Solicitudes específicas',
    'Situaciones particulares',
    'Decisiones de reserva',
  ],
  balanceHumanNote: 'Tu equipo mantiene el trato humano en las conversaciones más importantes.',
  bridgeTitle: 'De una pregunta a una posible reserva.',
  bridgeBody:
    'Connect organiza la conversación. Booking Engine ofrece el camino para consultar disponibilidad, reservar y gestionar la operación.',
  bridgeNote:
    'Connect puede orientar al huésped hacia el enlace de reserva del alojamiento. No consulta inventario de forma automática.',
  bridge: [
    { title: 'Andario Connect', role: 'Atender y orientar' },
    { title: 'Consultar disponibilidad', role: 'Siguiente paso' },
    { title: 'Andario Booking Engine', role: 'Reservar' },
    { title: 'Gestionar la operación', role: 'Después de la reserva' },
  ],
  finalImage: '/andario-web/final-cta.webp',
  finalAlt: 'Ambiente de alojamiento al atardecer',
  finalTitle: 'Cada conversación puede ser el comienzo de una buena experiencia.',
  finalBody:
    'Organiza la comunicación de tu alojamiento y facilita que tus huéspedes encuentren la información y el siguiente paso que necesitan.',
  finalNote: 'Tecnología para simplificar la atención, no para perder el trato humano.',
};
