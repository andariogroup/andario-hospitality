import type { ConnectContent, FaqItem } from '@/content/types';

export const connectFaqsEs: FaqItem[] = [
  {
    q: '¿Qué es Andario Connect?',
    a: 'Es el servicio que organiza la comunicación de tu alojamiento para que las consultas, conversaciones y oportunidades de reserva tengan un camino más claro.',
  },
  {
    q: '¿La automatización reemplaza a mi equipo?',
    a: 'No. La automatización ayuda con lo repetitivo. Las conversaciones importantes siguen necesitando personas.',
  },
  {
    q: '¿Trabaja con WhatsApp?',
    a: 'Sí. WhatsApp suele ser el canal principal. También podemos organizar otros puntos de contacto según el alcance.',
  },
  {
    q: '¿Puedo empezar solo con Connect?',
    a: 'Sí. Los servicios se contratan por separado, según lo que tu alojamiento necesite.',
  },
];

export const connectEs: ConnectContent = {
  support:
    'Organizamos la comunicación de tu alojamiento para que las consultas, conversaciones y oportunidades de reserva tengan un camino más claro.',
  concepts: ['WhatsApp', 'Comunicación', 'Automatización'],
  primaryCta: 'Quiero conocer este servicio',
  talkCta: 'Hablar con Andario',
  opportunityTitle: 'Cada consulta puede ser una oportunidad.',
  opportunityBody:
    'Cuando la comunicación está dispersa o depende completamente de procesos manuales, es fácil perder tiempo y oportunidades.',
  opportunityPoints: ['Responder', 'Orientar', 'Convertir'],
  doTitle: '¿Qué hacemos por tu alojamiento?',
  doItems: [
    {
      title: 'Organización de canales de comunicación',
      body: 'Ordenamos cómo llegan y se atienden las consultas para que nada quede suelto.',
    },
    {
      title: 'Flujos de atención',
      body: 'Definimos caminos claros para las preguntas más comunes y los momentos clave de la conversación.',
    },
    {
      title: 'Automatizaciones',
      body: 'Reducimos tareas repetitivas sin pretender reemplazar la atención humana.',
    },
    {
      title: 'Acompañamiento durante el proceso de reserva',
      body: 'Ayudamos a que la conversación acompañe al huésped hasta el siguiente paso.',
    },
  ],
  getTitle: 'Lo que obtienes',
  getItems: [
    'Comunicación más organizada',
    'Respuestas más eficientes',
    'Menos tareas repetitivas',
    'Mejor experiencia para tus huéspedes',
  ],
  crossSellBody:
    'Cuando una conversación termina en una reserva, necesitas un lugar donde gestionarla.',
  crossSellCta: 'Conoce Andario Booking Engine',
  crossSellRoute: 'andario-booking-engine',
  finalTitle: '¿Quieres mejorar la forma en que atiendes a tus huéspedes?',
  finalBody: 'Cuéntanos cómo atiendes hoy las consultas y qué te gustaría ordenar.',
  diagnosisCta: 'Solicitar diagnóstico',
  finalNote: 'Partimos de tu alojamiento, tus objetivos y tus necesidades.',
};
