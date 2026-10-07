import type { Dictionary } from '@/content/types';
import { bookingEngineEs } from '@/content/es/booking-engine';
import { digitalCheckEs, digitalCheckFaqsEs } from '@/content/es/digital-check';
import { andarioWebEs, andarioWebFaqsEs } from '@/content/es/andario-web';
import { visibilityEs, visibilityFaqsEs } from '@/content/es/visibility';
import { connectEs, connectFaqsEs } from '@/content/es/connect';
import { contentPageEs, contentFaqsEs } from '@/content/es/content-page';
import { growthEs, growthFaqsEs } from '@/content/es/growth';
import { solutionsHubEs } from '@/content/es/solutions';
import { homePageEs } from '@/content/es/home';
import { accommodationsPageEs } from '@/content/es/accommodations';
import { howWeWorkPageEs } from '@/content/es/how-we-work';
import { aboutViewEs } from '@/content/es/about';
import { termsViewEs } from '@/content/es/terms';

const services: Dictionary['services'] = {
  'digital-check': {
    name: 'Digital Check',
    subtitle: 'Diagnóstico y estrategia digital',
    summary:
      'Analizamos la situación digital de tu alojamiento, identificamos oportunidades y construimos una estrategia clara para saber qué mejorar primero.',
    cardCta: 'Conocer Digital Check',
    metaTitle: 'Digital Check | Diagnóstico y estrategia digital para alojamientos',
    metaDescription:
      'Analizamos la presencia digital de tu alojamiento, identificamos oportunidades y construimos una estrategia clara para saber qué mejorar primero.',
    h1: 'Descubre qué necesita realmente tu alojamiento para crecer en digital.',
    intro:
      'Analizamos la situación actual de tu alojamiento, identificamos oportunidades y construimos una estrategia clara y priorizada para que sepas qué mejorar primero y cómo avanzar.',
    problemTitle: 'Tu presencia digital puede estar funcionando por partes.',
    problem:
      'Puedes tener web, Google, redes sociales, WhatsApp y plataformas de reserva. Pero si cada canal funciona por separado y no sabes qué priorizar, es difícil convertir ese esfuerzo en una estrategia.',
    solutionTitle: 'Un diagnóstico y una dirección',
    solution:
      'Revisamos la situación actual, identificamos oportunidades y ordenamos prioridades para construir una estrategia digital adaptada a tu alojamiento.',
    includedTitle: 'Qué incluye',
    included: ['Análisis', 'Hallazgos', 'Prioridades', 'Estrategia', 'Hoja de ruta'],
    howTitle: 'Cómo funciona',
    steps: [
      { title: 'Analizamos', body: 'Revisamos tu presencia digital actual.' },
      { title: 'Priorizamos', body: 'Definimos qué conviene trabajar primero.' },
      { title: 'Orientamos', body: 'Entregamos una estrategia y una hoja de ruta clara.' },
    ],
    ecosystem:
      'Digital Check es la puerta de entrada. A partir de ahí puedes contratar solo lo que la ruta indique: web, visibilidad, reservas, comunicación, contenido o medición.',
    future: [],
    faqs: digitalCheckFaqsEs,
    ctaTitle: 'Antes de seguir invirtiendo, descubre qué necesita realmente tu alojamiento.',
    ctaLabel: 'Solicitar mi Digital Check',
  },
  'andario-web': {
    name: 'Andario Web',
    subtitle: 'Tu sitio web profesional',
    summary:
      'Creamos una presencia digital propia, clara y orientada a generar confianza y facilitar el contacto y las reservas.',
    cardCta: 'Conocer Andario Web',
    metaTitle: 'Páginas web para hoteles y hostales',
    metaDescription:
      'Andario Web crea sitios profesionales para alojamientos independientes: presentan mejor tu oferta, generan confianza y facilitan el contacto o la reserva.',
    h1: 'Tu alojamiento merece una web hecha para él.',
    intro:
      'Creamos una presencia digital profesional que refleja tu identidad, muestra lo que hace especial tu alojamiento y facilita el camino hacia el contacto o la reserva.',
    problemTitle: 'Tu web es mucho más que una página.',
    problem:
      'Es el lugar donde un huésped conoce tu alojamiento, compara, decide y da el siguiente paso.',
    solutionTitle: 'Un sitio pensado para tu alojamiento',
    solution:
      'Diseñamos la experiencia digital alrededor de tu identidad, tus espacios y lo que el huésped necesita saber antes de escribir o reservar.',
    includedTitle: 'Qué puede incluir',
    included: [
      'Diseño adaptado a tu alojamiento',
      'Experiencia en móvil y escritorio',
      'Contenido e información clara',
      'WhatsApp y contacto',
      'Integración con reservas',
      'Bases de SEO técnico',
    ],
    howTitle: 'Cómo funciona',
    steps: [
      { title: 'Entendemos tu alojamiento', body: 'Identidad, oferta y lo que el huésped necesita ver.' },
      { title: 'Diseñamos y construimos', body: 'Una presencia clara, usable y lista para crecer.' },
      { title: 'Dejamos el siguiente paso fácil', body: 'Contacto, WhatsApp o reserva, según el alcance.' },
    ],
    ecosystem:
      'Andario Web es la casa digital del alojamiento. Visibilidad, reservas, comunicación y contenido pueden apoyarse en ella cuando haga falta.',
    future: [],
    faqs: andarioWebFaqsEs,
    ctaTitle: '¿Tu alojamiento merece una mejor presencia digital?',
    ctaLabel: 'Quiero crear mi web',
  },
  'andario-visibility': {
    name: 'Andario Visibility',
    subtitle: 'Visibilidad digital',
    summary:
      'Fortalecemos la presencia digital de tu alojamiento para que los viajeros que buscan dónde hospedarse puedan descubrirte y entenderte con más claridad.',
    cardCta: 'Conocer Visibility',
    metaTitle: 'Visibilidad digital para hoteles y hostales',
    metaDescription:
      'Andario Visibility ayuda a que más viajeros puedan descubrir tu alojamiento cuando buscan dónde hospedarse. Estrategia y mejora continua, sin promesas de posiciones.',
    h1: 'Haz que tu alojamiento sea más fácil de encontrar.',
    intro:
      'Cuando una persona busca dónde hospedarse en tu destino, tu alojamiento debería tener la oportunidad de aparecer, llamar su atención y llevarla hacia tus canales.',
    problemTitle: 'Estar en Internet no es lo mismo que ser fácil de encontrar.',
    problem:
      'Tu alojamiento puede tener una web y redes sociales, pero si las personas no lo encuentran cuando buscan, estás perdiendo oportunidades.',
    solutionTitle: 'Visibilidad con base sólida',
    solution:
      'Organizamos, optimizamos y fortalecemos tu presencia digital para que buscadores y viajeros comprendan mejor qué ofreces.',
    includedTitle: 'Qué puede incluir',
    included: [
      'Bases para búsquedas',
      'Presencia local',
      'Contenido claro del alojamiento',
      'Mejora continua basada en datos',
    ],
    howTitle: 'Cómo funciona',
    steps: [
      { title: 'Vemos cómo te encuentran', body: 'Revisamos tu presencia actual y las oportunidades.' },
      { title: 'Ordenamos y mejoramos', body: 'Priorizamos cambios de estructura, contenido y presencia local.' },
      { title: 'Seguimos con datos', body: 'Medimos la evolución sin prometir una posición.' },
    ],
    ecosystem:
      'Visibility abre la puerta. Web, Connect y Booking Engine ayudan después a conocerte, contactarte y reservar.',
    note: 'No prometemos una posición específica en Google. Construimos una base digital sólida y medible.',
    future: [],
    faqs: visibilityFaqsEs,
    ctaTitle: '¿Quieres mejorar la visibilidad de tu alojamiento?',
    ctaLabel: 'Quiero mejorar mi visibilidad',
  },
  'andario-booking-engine': {
    name: 'Andario Booking Engine',
    subtitle: 'Centro de reservas y operación',
    summary:
      'El centro donde llegan las reservas de tus canales y desde donde gestionas huéspedes, operación, pagos, reportes y analítica.',
    cardCta: 'Conocer Booking Engine',
    metaTitle: 'Motor de reservas para hoteles y hostales',
    metaDescription:
      'Recibe reservas desde tus canales y gestiona huéspedes, check-in, check-out, facturación y reportes desde un solo centro, para alojamientos independientes.',
    h1: 'El centro de reservas y operación de tu alojamiento.',
    intro:
      'Andario Booking Engine centraliza la lógica de reservas de tu alojamiento para que puedas construir un canal propio, organizar tu inventario y conectar progresivamente diferentes puntos de contacto con tus huéspedes.',
    problemTitle: 'Tu alojamiento puede tener muchos canales. El problema aparece cuando cada uno funciona por separado.',
    problem:
      'Cuando la disponibilidad y las tarifas se coordinan a mano, el canal propio se vuelve frágil y el equipo repite el mismo trabajo en cada conversación.',
    solutionTitle: 'Una lógica central para el establecimiento',
    solution:
      'El motor configura el alojamiento, sus unidades, disponibilidad, tarifas, reglas, estado de la reserva, la lógica de pago que esté soportada y el origen de cada reserva.',
    includedTitle: 'Qué centraliza',
    included: [
      'Configuración del alojamiento',
      'Unidades',
      'Disponibilidad',
      'Tarifas',
      'Reservas y huéspedes',
      'Reglas de reserva',
      'Estado de la reserva',
      'Lógica de pago soportada',
      'Identificación de canal u origen',
      'Administración',
    ],
    howTitle: 'Cómo se entiende',
    steps: [
      { title: 'Se configura el establecimiento', body: 'Unidades, reglas y tarifas quedan en un solo lugar.' },
      { title: 'Se opera la reserva', body: 'Disponibilidad, huéspedes y estado se gestionan desde esa lógica.' },
      { title: 'Se identifica el origen', body: 'Cada reserva puede reconocer el canal por el que llegó.' },
    ],
    ecosystem:
      'El motor es el núcleo tecnológico de Andario Hospitality, no la empresa entera. La web, la visibilidad y la comunicación pueden conectarse con él cuando el establecimiento lo necesite. Este sitio corporativo no procesa reservas.',
    note: 'Andario Booking Engine puede coexistir con los canales que ya usas. No sincroniza de forma automática con OTAs.',
    futureTitle: 'En evolución',
    future: [],
    faqs: [
      {
        q: '¿Qué es Andario Booking Engine?',
        a: 'Es el centro de reservas y operación de tu alojamiento. Ahí llegan las reservas, y desde ahí se organizan huéspedes, pagos, check-in, check-out, facturación, reportes y analítica.',
      },
      {
        q: '¿Qué puede hacer el huésped?',
        a: 'Consultar disponibilidad y tarifas, elegir una unidad, registrar sus datos, reservar y pagar cuando la modalidad configurada lo permite. Después recibe la confirmación por correo y un documento PDF.',
      },
      {
        q: '¿Qué puede gestionar el alojamiento?',
        a: 'Reservas, información de huéspedes, estados, check-in, check-out, facturación, reportes, analítica y el origen de cada reserva.',
      },
      {
        q: '¿Desde qué canales puedo dirigir huéspedes al Booking Engine?',
        a: 'Desde tu web, Facebook, Instagram, TikTok, WhatsApp, Google u otros canales. Publicas tu contenido y compartes un enlace. La reserva no ocurre dentro de esa red: el enlace lleva al huésped a tu Booking Engine.',
      },
      {
        q: '¿Puedo seguir utilizando Booking.com y otros canales?',
        a: 'Sí. Andario Booking Engine puede coexistir con los canales que ya usas. No sincroniza de forma automática con Booking.com, Airbnb u otras OTAs.',
      },
      {
        q: '¿Para qué tipos de alojamiento está pensado?',
        a: 'Para alojamientos independientes: hostales, hoteles pequeños, posadas, apartamentos turísticos, apartahoteles, cabañas, villas y alojamientos rurales.',
      },
      {
        q: '¿Cómo puedo empezar?',
        a: 'Cuéntanos cómo funciona hoy tu alojamiento. Vemos cómo reservas y te mostramos cómo puede encajar el sistema.',
      },
    ],
    ctaTitle: 'Lleva las reservas y la operación de tu alojamiento a un solo lugar.',
    ctaLabel: 'Solicitar información',
  },
  'andario-connect': {
    name: 'Andario Connect',
    subtitle: 'Comunicación con huéspedes',
    summary:
      'Organizamos la comunicación de tu alojamiento para responder consultas, orientar a tus huéspedes y facilitar el siguiente paso.',
    cardCta: 'Conocer Connect',
    metaTitle: 'Comunicación y WhatsApp para hoteles y hostales',
    metaDescription:
      'Andario Connect organiza la atención de tus huéspedes: consultas frecuentes, respuestas más claras y orientación hacia el siguiente paso. Sin reemplazar a tu equipo.',
    h1: 'Responde mejor. Conecta mejor con tus huéspedes.',
    intro:
      'Organizamos la comunicación de tu alojamiento para ayudarte a responder consultas, orientar a tus huéspedes y facilitar que cada conversación encuentre el siguiente paso.',
    problemTitle: 'Cada mensaje puede ser una oportunidad.',
    problem:
      'Cuando las consultas llegan todo el día y dependen de respuestas manuales, mantener organizada cada conversación puede volverse difícil.',
    solutionTitle: 'Atención más organizada',
    solution:
      'Estructuramos cómo respondes lo frecuente y cómo acompañas al huésped hasta el siguiente paso, manteniendo la atención humana.',
    includedTitle: 'Qué puede incluir',
    included: [
      'Organización de WhatsApp',
      'Respuestas a consultas frecuentes',
      'Orientación al siguiente paso',
      'Automatización de lo repetitivo',
    ],
    howTitle: 'Cómo funciona',
    steps: [
      { title: 'Vemos cómo atiendes hoy', body: 'Identificamos preguntas repetidas y momentos clave.' },
      { title: 'Organizamos la atención', body: 'Definimos respuestas y caminos claros para el huésped.' },
      { title: 'Acompañamos la conversación', body: 'Facilitamos el camino hacia información, contacto o reserva.' },
    ],
    ecosystem:
      'Connect organiza la conversación. Booking Engine ofrece el camino para consultar disponibilidad, reservar y gestionar la operación.',
    futureTitle: 'Evolución prevista',
    future: ['Asistente de IA'],
    faqs: connectFaqsEs,
    ctaTitle: '¿Quieres mejorar la forma en que atiendes a tus huéspedes?',
    ctaLabel: 'Quiero mejorar mi atención',
  },
  'andario-content': {
    name: 'Andario Content',
    subtitle: 'Fotografía y contenido',
    summary:
      'Creamos fotografía y contenido para mostrar tus espacios y construir una presencia digital más cuidada y coherente.',
    cardCta: 'Conocer Content',
    metaTitle: 'Fotografía y contenido para hoteles y hostales',
    metaDescription:
      'Andario Content crea fotografía y contenido para alojamientos independientes: web, redes e identidad visual coherente. Sin prometer viralidad ni reservas.',
    h1: 'Haz que tu alojamiento\nse vea tan bien como\nrealmente es.',
    intro:
      'Creamos fotografías y contenido profesional para mostrar tus espacios, transmitir la experiencia de tu alojamiento y construir una presencia que inspire confianza desde el primer vistazo.',
    problemTitle: 'Antes de reservar, el huésped quiere imaginarse allí.',
    problem:
      'Cuando una persona descubre un alojamiento en Internet, las imágenes y el contenido tienen que ayudarle a imaginar la experiencia.',
    solutionTitle: 'Una imagen que representa mejor tu alojamiento',
    solution:
      'Fotografía, contenido para web y redes, y dirección de contenido para mantener una comunicación coherente.',
    includedTitle: 'Qué puede incluir',
    included: [
      'Fotografía',
      'Contenido para tu web',
      'Contenido para redes',
      'Dirección de contenido',
    ],
    howTitle: 'Cómo funciona',
    steps: [
      { title: 'Definimos qué mostrar', body: 'Espacios, servicios y la experiencia que quieres transmitir.' },
      { title: 'Creamos el material', body: 'Fotografía y contenido listos para usarse.' },
      { title: 'Lo dejamos coherente', body: 'Web, redes y otros puntos pueden contar la misma historia.' },
    ],
    ecosystem:
      'El contenido atrae. La web ayuda a convertir. No prometemos viralidad ni un número de seguidores.',
    future: [],
    faqs: contentFaqsEs,
    ctaTitle: '¿Quieres mostrar mejor todo lo que tu alojamiento tiene para ofrecer?',
    ctaLabel: 'Quiero mejorar mi contenido',
  },
  'andario-growth': {
    name: 'Andario Growth',
    subtitle: 'Analítica y optimización',
    summary:
      'Analizamos tus canales digitales para entender qué funciona y qué conviene mejorar.',
    cardCta: 'Conocer Growth',
    metaTitle: 'Analítica para hoteles y hostales',
    metaDescription:
      'Andario Growth convierte los datos de tu presencia digital en información clara y recomendaciones. Sin prometer ingresos ni posiciones en Google.',
    h1: 'Convierte los datos de tu alojamiento en mejores decisiones.',
    intro:
      'Analizamos lo que ocurre en tus canales digitales para entender qué funciona, dónde existen oportunidades y qué conviene mejorar.',
    problemTitle: 'No puedes mejorar lo que no puedes entender.',
    problem:
      'Tu alojamiento genera información todos los días. Growth ayuda a convertirla en conocimiento útil para tomar decisiones.',
    solutionTitle: 'Medir, entender y mejorar',
    solution:
      'Organizamos la medición, analizamos el comportamiento y traducimos hallazgos en recomendaciones claras.',
    includedTitle: 'Qué puede incluir',
    included: [
      'Medición de canales digitales',
      'Análisis de comportamiento',
      'Seguimiento de oportunidades',
      'Recomendaciones de mejora',
    ],
    howTitle: 'Cómo funciona',
    steps: [
      { title: 'Medimos', body: 'Organizamos la información de tus canales digitales.' },
      { title: 'Entendemos', body: 'Identificamos qué funciona y dónde hay oportunidades.' },
      { title: 'Mejoramos', body: 'Traducimos hallazgos en recomendaciones accionables.' },
    ],
    ecosystem:
      'Growth lee el ecosistema digital del alojamiento. No promete aumentos de ingresos ni posiciones en Google.',
    future: [],
    faqs: growthFaqsEs,
    ctaTitle: '¿Quieres entender mejor qué está funcionando en tu presencia digital?',
    ctaLabel: 'Quiero conocer este servicio',
  },
};

export const es: Dictionary = {
  meta: {
    htmlLang: 'es',
    pages: {
      home: {
        title: 'Haz crecer tu alojamiento en Internet | Andario Hospitality',
        description:
          'Ayudamos a hostales, hoteles pequeños y alojamientos independientes a tener una página web, aparecer en Google y recibir reservas directas.',
      },
      solutions: {
        title: 'Soluciones para digitalizar tu alojamiento',
        description:
          'Página web, presencia en Google, reservas directas y WhatsApp para hostales, hoteles pequeños y alojamientos independientes. Empieza por lo que necesitas.',
      },
      'digital-check': {
        title: services['digital-check'].metaTitle,
        description: services['digital-check'].metaDescription,
      },
      'andario-web': {
        title: services['andario-web'].metaTitle,
        description: services['andario-web'].metaDescription,
      },
      'andario-visibility': {
        title: services['andario-visibility'].metaTitle,
        description: services['andario-visibility'].metaDescription,
      },
      'andario-booking-engine': {
        title: services['andario-booking-engine'].metaTitle,
        description: services['andario-booking-engine'].metaDescription,
      },
      'andario-connect': {
        title: services['andario-connect'].metaTitle,
        description: services['andario-connect'].metaDescription,
      },
      'andario-content': {
        title: services['andario-content'].metaTitle,
        description: services['andario-content'].metaDescription,
      },
      'andario-growth': {
        title: services['andario-growth'].metaTitle,
        description: services['andario-growth'].metaDescription,
      },
      accommodations: {
        title: 'Alojamientos independientes',
        description:
          'Andario Hospitality acompaña a hostales, hoteles pequeños, posadas, apartamentos turísticos, cabañas y villas a mejorar su presencia y sus reservas.',
      },
      'how-we-work': {
        title: 'Cómo trabajamos',
        description:
          'Conoce cómo analizamos, priorizamos y digitalizamos las necesidades de tu alojamiento mediante diagnóstico, estrategia, tecnología y acompañamiento.',
      },
      cases: {
        title: 'Casos',
        description:
          'BARUCH Hostal es el establecimiento pionero de Andario Hospitality. Publicaremos resultados solo cuando estén medidos.',
      },
      about: {
        title: 'Nosotros',
        description:
          'Conoce Andario Hospitality, una empresa colombiana que ayuda a pequeños y medianos alojamientos independientes a aprovechar la tecnología para crecer y competir en el mundo digital.',
      },
      faq: {
        title: 'Preguntas frecuentes',
        description:
          'Respuestas sobre servicios, OTAs, SEO, WhatsApp, apartamentos, precios y cómo empezar con Andario.',
      },
      contact: {
        title: 'Contacto',
        description:
          'Cuéntanos cómo funciona hoy tu alojamiento. Te ayudamos a identificar por dónde empezar, por WhatsApp o en una conversación breve.',
      },
      privacy: {
        title: 'Política de privacidad',
        description:
          'Cómo Andario Hospitality trata los datos del formulario de contacto, WhatsApp y la analítica opcional de este sitio.',
      },
      terms: {
        title: 'Términos y condiciones',
        description:
          'Consulta los términos y condiciones aplicables al uso del sitio web de Andario Hospitality y a la relación general con nuestros servicios.',
      },
    },
  },
  chrome: {
    skip: 'Saltar al contenido',
    primaryCta: 'Solicitar diagnóstico digital',
    secondaryCta: 'Hablar con Andario',
    ctaSteps: ['Cuéntanos cómo funciona hoy', 'Revisamos tu presencia digital', 'Te decimos por dónde empezar'],
    ctaNote: 'Sin compromiso. Conversar no obliga a contratar.',
    menu: 'Abrir menú',
    close: 'Cerrar menú',
    language: 'Idioma',
    footerTagline: 'El partner digital de tu alojamiento.',
    footerDescription: 'Estrategia, tecnología y acompañamiento para pequeños y medianos alojamientos independientes.',
    footerLine: 'Una línea de Andario Group.',
    footerCtaTitle: '¿Listo para empezar a digitalizar tu alojamiento?',
    footerCtaBody: 'Cuéntanos dónde estás y qué quieres mejorar. Te ayudamos a encontrar por dónde empezar.',
    footerGroupDiagnosis: 'Diagnóstico',
    footerGroupPresence: 'Presencia y visibilidad',
    footerGroupTechnology: 'Tecnología y relación',
    footerTalkCta: 'Hablar con Andario',
    footerWhatsappLabel: 'Contactar por WhatsApp',
    solutionsTitle: 'Soluciones',
    companyTitle: 'Empresa',
    legalTitle: 'Legal',
    contactTitle: 'Hablemos',
    rights: 'Todos los derechos reservados.',
    map: 'Ver ubicación',
    analyticsTitle: 'Medición de visitas',
    analyticsBody:
      'Podemos usar Google Analytics para entender qué páginas se visitan. No enviamos el contenido del formulario. Puedes rechazarlo.',
    analyticsAccept: 'Aceptar',
    analyticsReject: 'Rechazar',
  },
  nav: {
    home: 'Inicio',
    solutions: 'Soluciones',
    products: 'Productos y servicios',
    accommodations: 'Alojamientos',
    'how-we-work': 'Cómo trabajamos',
    'andario-booking-engine': 'Booking Engine',
    cases: 'Casos',
    about: 'Nosotros',
    contact: 'Contacto',
    faq: 'Preguntas frecuentes',
    privacy: 'Política de privacidad',
    terms: 'Términos y condiciones',
  },
  home: {
    eyebrow: 'Andario Hospitality',
    h1: 'Digitalización para pequeños alojamientos.',
    lead: 'Estrategia, tecnología y acompañamiento para convertir tu presencia en Internet en una herramienta real de crecimiento.',
    micro: 'Para hostales, hoteles pequeños, posadas, apartamentos turísticos, cabañas y otros alojamientos independientes.',
    secondaryCta: 'Conocer nuestras soluciones',
    problemTitle: 'Tener presencia digital no significa tener una estrategia digital.',
    problem: [
      'Tu alojamiento puede estar en Booking, Airbnb, Instagram, Facebook, Google y WhatsApp, pero si cada canal funciona por separado, gestionar tu presencia digital puede convertirse en una tarea difícil de controlar.',
      'Muchos establecimientos independientes todavía no cuentan con una página web propia, un motor de reservas, una estrategia SEO o herramientas para saber de dónde llegan sus huéspedes.',
    ],
    problemClose: 'Andario nace para conectar esas piezas.',
    solutionTitle: 'Construimos contigo un ecosistema digital para tu alojamiento.',
    solution: [
      'Analizamos la situación actual de tu establecimiento, identificamos las prioridades y construimos las soluciones que realmente necesitas.',
      'No tienes que hacerlo todo de una vez. Puedes comenzar con un diagnóstico, construir tu sitio web, incorporar reservas directas, trabajar tu visibilidad y avanzar progresivamente hacia una operación más conectada.',
    ],
    solutionKey: 'Tu estrategia se construye alrededor de tu negocio, no al revés.',
    portfolioTitle: 'Soluciones para llevar tu alojamiento al siguiente nivel.',
    portfolioIntro:
      'Desde el diagnóstico inicial hasta la medición y evolución, Andario combina servicios digitales y tecnología propia para acompañarte en cada etapa.',
    diffTitle: 'No necesitas más herramientas desconectadas.',
    diffLead: 'Necesitas una estrategia digital que trabaje para tu alojamiento.',
    diffBody:
      'Andario combina consultoría, tecnología propia y acompañamiento para ayudarte a construir una presencia digital profesional y evolucionar hacia un canal propio de crecimiento.',
    highlights: [
      { title: 'Especialización', body: 'Trabajamos con pequeños y medianos alojamientos independientes, no con un producto genérico para cualquier industria.' },
      { title: 'Simplicidad', body: 'Las herramientas tienen que entenderse y usarse. La complejidad de una gran plataforma no es el objetivo.' },
      { title: 'Tecnología propia', body: 'Andario Booking Engine es nuestra tecnología de reservas, dentro de una oferta más amplia.' },
      { title: 'Acompañamiento', body: 'La relación continúa después de la entrega: medimos y seguimos mejorando contigo.' },
    ],
    audienceTitle: 'Pensado para alojamientos independientes.',
    audienceIntro:
      'Trabajamos con establecimientos que quieren profesionalizar su presencia digital sin asumir la complejidad de una gran plataforma.',
    audiences: [
      { title: 'Hostales', body: 'Conecta tu presencia digital con una experiencia de reserva más profesional.' },
      { title: 'Hoteles pequeños', body: 'Construye un canal propio y organiza mejor tu ecosistema digital.' },
      { title: 'Posadas', body: 'Lleva la identidad y experiencia de tu establecimiento al mundo digital.' },
      { title: 'Apartamentos turísticos', body: 'Presenta tus unidades y facilita el proceso de consulta y reserva.' },
      { title: 'Cabañas y villas', body: 'Convierte la experiencia de tu alojamiento y destino en una presencia digital propia.' },
      { title: 'Emprendedores turísticos', body: 'Empieza con las herramientas que realmente necesitas y evoluciona a tu ritmo.' },
    ],
    processTitle: 'No necesitas hacerlo todo de una vez.',
    processIntro:
      'Cada establecimiento tiene una situación diferente. Por eso empezamos entendiendo tu realidad y construimos la solución progresivamente.',
    process: [
      { title: 'Diagnóstico', body: 'Entendemos dónde estás.' },
      { title: 'Estrategia', body: 'Definimos hacia dónde avanzar.' },
      { title: 'Implementación', body: 'Construimos lo que necesitas.' },
      { title: 'Medición', body: 'Observamos qué está pasando.' },
      { title: 'Evolución', body: 'Seguimos mejorando.' },
    ],
    trustTitle: 'Tecnología con una visión práctica.',
    trust: [
      'Creemos que la tecnología debe simplificar el negocio, no hacerlo más complicado.',
      'Por eso diseñamos soluciones pensando primero en las necesidades reales de los establecimientos independientes.',
      'La confianza se sostiene con la identidad de la empresa, el alcance claro y los resultados que más adelante podamos mostrar con datos. No publicamos cifras que no podamos respaldar.',
    ],
    aboutTitle: 'Nacemos en Colombia con una visión latinoamericana.',
    about: [
      'Andario Hospitality es una línea de Andario Group enfocada en ayudar a pequeños y medianos alojamientos independientes a profesionalizar su presencia digital.',
      'Comenzamos en Colombia porque conocemos el contexto y queremos construir nuestra experiencia trabajando con negocios reales.',
      'Nuestra visión es crecer progresivamente en Latinoamérica acompañando a establecimientos que quieren llevar su negocio a otro nivel mediante estrategia, tecnología y acompañamiento.',
    ],
    aboutCta: 'Conocer Andario',
    casesTitle: 'Historias reales. Aprendizajes reales.',
    cases: [
      'Estamos construyendo nuestros primeros casos de implementación.',
      'Nuestro primer establecimiento pionero es BARUCH Hostal, en Buritaca, Colombia.',
      'A medida que existan resultados medidos y autorizados, esta sección mostrará procesos, aprendizajes y resultados reales.',
    ],
    casesCta: 'Conocer nuestros casos',
    finalTitle: '¿Listo para llevar tu alojamiento a otro nivel?',
    final: 'Cuéntanos cómo funciona hoy tu establecimiento y qué quieres mejorar. Analizaremos tu situación y te ayudaremos a identificar por dónde empezar.',
  },
  servicesIntro: {
    h1: 'Todo lo que tu alojamiento necesita para construir una presencia digital más sólida.',
    lead: 'No necesitas resolver todo de una vez. Cada solución se contrata por separado y puede crecer contigo.',
    metaTitle: 'Soluciones digitales para alojamientos',
    metaDescription:
      'Estrategia, web, SEO, reservas directas, WhatsApp, contenido y analítica para pequeños y medianos alojamientos independientes.',
  },
  services,
  bookingEngine: bookingEngineEs,
  digitalCheck: digitalCheckEs,
  andarioWeb: andarioWebEs,
  visibility: visibilityEs,
  connect: connectEs,
  contentPage: contentPageEs,
  growth: growthEs,
  solutionsHub: solutionsHubEs,
  homePage: homePageEs,
  accommodationsPage: accommodationsPageEs,
  howWeWorkPage: howWeWorkPageEs,
  aboutView: aboutViewEs,
  termsView: termsViewEs,
  accommodations: {
    h1: 'Digitalización para la forma en que opera un alojamiento independiente.',
    lead: 'No hace falta un número mínimo de habitaciones ni parecer una cadena. Hace falta un negocio propio que necesite ordenar su presencia digital.',
    body: [
      'Andario trabaja con hostales, hoteles pequeños, posadas, apartamentos turísticos, apart-hoteles, cabañas, villas, alojamiento rural y emprendimientos que rentan por días.',
      'El enfoque es el mismo: entender el establecimiento, priorizar y construir solo lo que ayuda a presentar, comunicar, reservar y medir.',
    ],
    types: [
      { title: 'Hostales', body: 'Suelen vivir entre redes, WhatsApp y OTAs. Una web clara y un canal propio ordenan la reserva sin perder cercanía.' },
      { title: 'Hoteles pequeños', body: 'Necesitan presencia profesional y una forma de no depender solo de intermediarios para cada noche.' },
      { title: 'Posadas', body: 'La identidad del lugar es el argumento. El sitio y el contenido tienen que contarla antes de la llegada.' },
      { title: 'Apartamentos y apart-hoteles', body: 'Las unidades se pueden configurar como alojamientos reservables, con información y disponibilidad más claras.' },
      { title: 'Cabañas, villas y rural', body: 'El destino y la experiencia pesan tanto como la cama. La presencia digital tiene que mostrar ambos.' },
    ],
    close: 'Si tu establecimiento es independiente y la operación digital se siente fragmentada, el tamaño exacto no es el filtro.',
  },
  processPage: {
    h1: 'Una digitalización progresiva, pensada para tu realidad.',
    lead: 'No creemos que todos los establecimientos necesiten las mismas herramientas ni que tengan que implementarlas todas al mismo tiempo.',
    close: 'Tu negocio marca el ritmo. Nosotros construimos contigo el camino digital.',
  },
  casesPage: {
    h1: 'Casos',
    lead: 'Esta página está lista para documentar procesos reales. Hoy solo publicamos lo que ya podemos afirmar.',
    name: 'BARUCH Hostal',
    place: 'Buritaca, Colombia',
    label: 'Establecimiento pionero de Andario Hospitality.',
    body: [
      'BARUCH Hostal es el primer establecimiento con el que Andario Hospitality pone en práctica su forma de trabajar.',
      'Cuando existan datos medidos y autorización para publicarlos, aquí se podrán sumar la situación inicial, el diagnóstico, la implementación y los aprendizajes.',
    ],
    pending: 'Todavía no publicamos ocupación, ingresos, posiciones ni testimonios. Esas cifras solo aparecerán si son reales.',
  },
  aboutPage: {
    h1: 'Tecnología pensada para negocios reales.',
    lead: 'Andario Hospitality es una línea de Andario Group dedicada a la digitalización de pequeños y medianos alojamientos independientes.',
    body: [
      'Nacemos con una convicción: la tecnología no debería estar reservada para las grandes empresas.',
      'Muchos alojamientos tienen una gran experiencia para ofrecer, pero necesitan mejores herramientas para presentarla, conectar con sus huéspedes y construir canales propios.',
      'Andario combina consultoría, diseño, tecnología y acompañamiento para cerrar esa brecha. No somos una agencia tradicional ni un PMS gigante, y no competimos con promesas de resultados.',
    ],
    visionTitle: 'Visión',
    vision:
      'Ser el partner digital de referencia para pequeños y medianos alojamientos independientes en Colombia y, progresivamente, en Latinoamérica.',
    missionTitle: 'Misión',
    mission:
      'Ayudar a los establecimientos a digitalizar y profesionalizar sus negocios mediante soluciones sencillas, accesibles y conectadas.',
  },
  faqPage: {
    h1: 'Preguntas frecuentes',
    lead: 'Respuestas directas sobre cómo trabajamos y qué no prometemos.',
    items: [
      { q: '¿Qué hace Andario?', a: 'Ayuda a pequeños y medianos alojamientos independientes a ordenar su presencia digital con estrategia, tecnología y acompañamiento.' },
      { q: '¿Para quién es?', a: 'Para hostales, hoteles pequeños, posadas, apartamentos, apart-hoteles, cabañas, villas, alojamiento rural y emprendimientos que rentan por días.' },
      { q: '¿Andario trabaja solamente con hoteles?', a: 'No. El criterio es que el negocio sea independiente y necesite digitalizarse de forma práctica.' },
      { q: '¿Necesito una página web?', a: 'No siempre es el primer paso. El diagnóstico indica si la web es la prioridad o si conviene empezar por otra pieza.' },
      { q: '¿Necesito un motor de reservas?', a: 'Solo si te ayuda a operar un canal propio. Puedes seguir como estás y sumarlo cuando tenga sentido.' },
      { q: '¿Puedo seguir usando Booking.com o Airbnb?', a: 'Sí. Las OTAs pueden seguir siendo canales importantes. Andario busca que también exista un canal propio.' },
      { q: '¿Puedo empezar con un solo servicio?', a: 'Sí. Los servicios se contratan por separado. No hay un paquete obligatorio.' },
      { q: '¿Puedo empezar solamente con una página web?', a: 'Sí. La estrategia puede comenzar con la necesidad más importante y evolucionar después.' },
      { q: '¿Andario ayuda con SEO?', a: 'Sí, con Andario Visibility. No garantizamos una posición en Google ni una cantidad fija de tráfico.' },
      { q: '¿Pueden integrar WhatsApp?', a: 'Sí. Andario Connect contempla comunicación, automatización y, de forma progresiva, la relación con las reservas.' },
      { q: '¿Sirve para apartamentos turísticos?', a: 'Sí. Las unidades pueden ser habitaciones, apartamentos, estudios, cabañas, villas u otros tipos reservables.' },
      { q: '¿Funciona para cabañas o villas?', a: 'Sí. El mismo enfoque aplica cuando el establecimiento es independiente, esté en un pueblo, en la costa o en zona rural.' },
      { q: '¿Sirve para propiedades pequeñas?', a: 'Sí. No está pensado para la complejidad de una gran cadena.' },
      { q: '¿Hay un mínimo de habitaciones?', a: 'No usamos un número fijo de unidades como requisito. Miramos si el negocio es independiente y qué necesita digitalizar.' },
      { q: '¿El sitio del alojamiento puede ser bilingüe?', a: 'Sí. Un sitio de Andario Web puede prepararse en más de un idioma cuando el establecimiento lo necesita. Este sitio corporativo ya está en español e inglés.' },
      { q: '¿Cómo es la implementación?', a: 'Diagnóstico, prioridades, construcción de lo acordado, salida a producción y después medición.' },
      { q: '¿Qué pasa después del lanzamiento?', a: 'Se puede medir el comportamiento y seguir mejorando. El acompañamiento forma parte del modelo, no se termina el día de la entrega.' },
      { q: '¿Cuánto cuesta?', a: 'Depende del alcance. Después de entender el establecimiento preparamos una propuesta. En este sitio no publicamos una tarifa fija.' },
      { q: '¿Trabajan fuera de Colombia?', a: 'Colombia es el mercado inicial. La visión es crecer de forma progresiva en Latinoamérica.' },
      { q: '¿Garantizan aparecer primero en Google?', a: 'No. Trabajamos bases técnicas, contenido y SEO local para construir una presencia medible.' },
    ],
  },
  contactPage: {
    h1: 'Hablemos de tu alojamiento.',
    lead: 'Cuéntanos cómo funciona hoy tu negocio y qué te gustaría mejorar. Te ayudaremos a identificar por dónde empezar.',
    micro:
      'Cuéntanos cómo funciona hoy tu alojamiento y qué te gustaría mejorar. A partir de ahí podemos identificar oportunidades y conversar sobre el camino más adecuado.',
    whatsappTitle: 'Si prefieres, empezamos por una conversación.',
    whatsappCta: 'Hablar por WhatsApp',
    orForm: 'O cuéntanos lo esencial. Toma menos de un minuto.',
    progress: 'Paso {current} de {total}',
    continueLabel: 'Continuar',
    backLabel: 'Volver',
    stepOne: 'Tu alojamiento',
    stepTwo: 'Qué te gustaría mejorar',
    unavailable: 'El formulario no está disponible en este momento. Puedes escribirnos por los canales publicados en esta página.',
    requiredNote: '* Campos obligatorios',
    fields: {
      name: 'Nombre *',
      establishment: 'Nombre del alojamiento *',
      location: 'Ubicación o destino *',
      type: 'Tipo de alojamiento *',
      whatsapp: 'WhatsApp *',
      whatsappHint: 'Es el canal por el que te responderemos.',
      email: 'Correo electrónico *',
      emailHint: '',
      note: 'Cuéntanos un poco más',
      noteHint: 'Opcional.',
      needs: '¿Qué te gustaría mejorar?',
      consent: 'Acepto que Andario use estos datos para responder mi solicitud.',
      submit: 'Quiero encontrar por dónde empezar',
      sending: 'Enviando…',
    },
    types: {
      hostel: 'Hostal',
      'small-hotel': 'Hotel pequeño',
      posada: 'Posada',
      apartment: 'Apartamento turístico',
      'apart-hotel': 'Apart-hotel',
      cabin: 'Cabaña',
      villa: 'Villa',
      rural: 'Alojamiento rural',
      other: 'Otro',
    },
    needs: {
      bookings: 'Conseguir más reservas',
      web: 'Tener una mejor página web',
      google: 'Aparecer mejor en Google',
      otas: 'Depender menos de las OTAs',
      organize: 'Organizar mejor mis reservas',
      whatsapp: 'Mejorar WhatsApp y atención',
      unsure: 'No estoy seguro / necesito orientación',
    },
    afterTitle: '¿Qué pasa después?',
    after: [
      { title: 'Te escuchamos', body: 'Nos cuentas cómo funciona hoy tu alojamiento y qué quieres mejorar.' },
      {
        title: 'Lo entendemos',
        body: 'Conocemos tu situación, tus prioridades y las oportunidades que pueden existir.',
      },
      { title: 'Te orientamos', body: 'Te ayudamos a identificar oportunidades y definir por dónde empezar.' },
    ],
    afterNote: 'Primero entendemos tu situación. Después hablamos de soluciones.',
    unsureTitle: '¿Todavía no sabes qué necesitas?',
    unsureBody: 'Está bien. Ese es precisamente nuestro punto de partida.',
    checkCta: 'Conocer Digital Check',
    errors: {
      required: 'Revisa este campo.',
      emailRequired: 'El correo electrónico es obligatorio.',
      emailInvalid: 'Ingresa un correo electrónico válido.',
      consent: 'Necesitamos tu aceptación para responder la solicitud.',
    },
    result: {
      success: 'Gracias por contactarnos. Hemos recibido tus datos y nos pondremos en contacto contigo.',
      invalid: 'Revisa los campos e inténtalo de nuevo.',
      rate_limited: 'Recibimos varios envíos seguidos. Espera unos minutos e inténtalo otra vez.',
      unavailable: 'Ahora no podemos recibir el formulario. Escríbenos por WhatsApp o por correo.',
      error: 'Hubo un problema al enviar tus datos. Por favor, inténtalo nuevamente.',
    },
    honeypot: 'No llenes este campo',
  },
  legal: {
    privacy: {
      h1: 'Política de privacidad',
      lead: 'Esta política describe el tratamiento de datos de este sitio web. No cubre productos futuros ni tratamientos que el sitio no realiza.',
      sections: [
        {
          title: 'Responsable',
          body: [
            'El responsable es Andario Group, NIT 901774250, a través de su línea comercial Andario Hospitality.',
            'Los datos de contacto, dirección y teléfono publicados en el sitio salen de la configuración vigente. Úsalos para ejercer consultas sobre tus datos.',
          ],
        },
        {
          title: 'Qué datos recoge el sitio',
          body: [
            'Si envías el formulario: nombre, alojamiento, ubicación, tipo de alojamiento, qué te gustaría mejorar, WhatsApp, correo si lo indicas y un comentario opcional.',
            'Si escribes por WhatsApp, la conversación ocurre en WhatsApp. Este sitio solo abre el enlace.',
            'Si aceptas la medición, Google Analytics 4 puede registrar datos técnicos de la visita. No enviamos el contenido del formulario a Analytics.',
            'No pedimos documentos de identidad, datos de pago ni información de huéspedes en este sitio.',
          ],
        },
        {
          title: 'Para qué se usan',
          body: [
            'Para responder solicitudes comerciales y preparar un diagnóstico o una propuesta.',
            'Para proteger el formulario frente a spam y abuso.',
            'Para entender el uso del sitio, solo si activas la analítica.',
          ],
        },
        {
          title: 'Encargados y conservación',
          body: [
            'El sitio se aloja en Vercel. El formulario se reenvía a un webhook configurado por Andario cuando existe. Si el webhook no está configurado, el formulario no entrega la solicitud.',
            'No conservamos los datos del formulario en una base de datos de este sitio. Quien reciba el webhook debe limitarlos a la finalidad comercial y no guardarlos de forma indefinida.',
          ],
        },
        {
          title: 'Cookies',
          body: [
            'El sitio no instala cookies de marketing.',
            'La analítica solo se carga si existe un identificador de GA4 y aceptas la medición. Puedes rechazarla. La preferencia se guarda en el almacenamiento local del navegador.',
          ],
        },
        {
          title: 'Derechos',
          body: [
            'Puedes solicitar acceso, actualización, rectificación o supresión de tus datos, y revocar la autorización cuando proceda, escribiendo al correo publicado en el sitio.',
            'Esta política se apoya en la Ley 1581 de 2012 y el Decreto 1074 de 2015 como marco de referencia en Colombia. Debe revisarse legalmente antes de tratarse como texto definitivo.',
          ],
        },
      ],
    },
    review: 'Texto base para la operación actual del sitio. Requiere revisión legal antes de considerarse definitivo.',
  },
  notFound: {
    title: 'No encontramos esta página.',
    body: 'El enlace puede estar desactualizado. Vuelve al inicio para ver las soluciones de Andario.',
    cta: 'Ir al inicio',
  },
  error: {
    title: 'Algo no salió como esperábamos.',
    body: 'Puedes intentar de nuevo. Si sigue fallando, usa el contacto o WhatsApp.',
    retry: 'Reintentar',
  },
};
