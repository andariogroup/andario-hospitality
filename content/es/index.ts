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
      'Conocemos cómo está hoy tu establecimiento en Internet, identificamos oportunidades y definimos qué debería hacerse primero.',
    cardCta: 'Conocer Digital Check',
    metaTitle: 'Diagnóstico digital para hoteles y hostales',
    metaDescription:
      'Digital Check analiza la presencia digital de un alojamiento independiente y la convierte en una hoja de ruta priorizada. No garantiza reservas ni una posición en Google.',
    h1: 'Descubre qué necesita realmente tu alojamiento para avanzar en digital.',
    intro:
      'Antes de construir nuevas herramientas, necesitamos entender dónde estás. Digital Check analiza la presencia digital de tu establecimiento y transforma los hallazgos en una hoja de ruta priorizada.',
    problemTitle: 'Tu presencia digital puede estar funcionando por partes.',
    problem:
      'Google, tu sitio web, redes sociales, WhatsApp, OTAs y el proceso de reserva pueden existir al mismo tiempo sin formar una estrategia coherente. Digital Check empieza por mirar el conjunto. No es la situación de todos los alojamientos.',
    solutionTitle: 'Un diagnóstico y una prioridad',
    solution:
      'Revisamos la situación actual, separamos lo que ya funciona de lo que está fragmentado y ordenamos las acciones según el negocio, no según un paquete fijo.',
    includedTitle: 'Qué revisamos',
    included: [
      'Presencia en Google',
      'Sitio web',
      'SEO',
      'Redes sociales',
      'WhatsApp',
      'Presencia en OTAs',
      'Proceso de reserva',
      'Contenido y fotografía',
      'Experiencia de uso',
      'Analítica',
      'Contexto competitivo',
    ],
    howTitle: 'Cómo funciona',
    steps: [
      { title: 'Contexto', body: 'Entendemos el alojamiento, la oferta y los objetivos.' },
      { title: 'Presencia', body: 'Revisamos los principales puntos de contacto.' },
      { title: 'Hallazgos', body: 'Separamos lo que funciona, lo que falta y las oportunidades.' },
      { title: 'Priorización', body: 'Ordenamos según importancia y esfuerzo.' },
      { title: 'Hoja de ruta', body: 'Las acciones quedan concretas y en secuencia.' },
    ],
    ecosystem:
      'Digital Check es la puerta de entrada. A partir de ahí puedes contratar solo lo que la ruta indique: web, visibilidad, reservas, comunicación, contenido o medición.',
    future: [],
    faqs: digitalCheckFaqsEs,
    ctaTitle: 'Antes de invertir en nuevas herramientas, descubre qué necesita realmente tu alojamiento.',
    ctaLabel: 'Solicitar diagnóstico digital',
  },
  'andario-web': {
    name: 'Andario Web',
    subtitle: 'Tu sitio web profesional',
    summary:
      'Creamos una presencia digital propia, rápida, clara y orientada a generar confianza y facilitar el contacto y las reservas.',
    cardCta: 'Conocer Andario Web',
    metaTitle: 'Páginas web para hoteles y hostales',
    metaDescription:
      'Andario Web diseña la casa digital de hoteles, hostales y otros alojamientos independientes: identidad, unidades, contacto y camino hacia la reserva. Sin garantizar posiciones ni reservas.',
    h1: 'Tu alojamiento necesita una casa propia en Internet.',
    intro:
      'Un sitio web no debería ser solamente una tarjeta de presentación. Debe ayudar a mostrar tu establecimiento, generar confianza, responder preguntas y facilitar el siguiente paso: contactar o reservar.',
    problemTitle: 'Tener una página web no significa tener una buena presencia digital.',
    problem:
      'Un alojamiento puede tener sitio y, aun así, no explicar qué ofrece, repartir la información, dificultar el contacto, fallar en el móvil o no tener un camino claro hacia la reserva. No es la situación de todos.',
    solutionTitle: 'Un sitio pensado para el establecimiento',
    solution:
      'Diseñamos la arquitectura, la interfaz y el contenido alrededor de tu identidad, tu destino y lo que el huésped necesita saber antes de escribir o reservar.',
    includedTitle: 'Qué puede incluir',
    included: [
      'Arquitectura de información y UX/UI',
      'Diseño adaptable a móvil',
      'Páginas de alojamiento y unidades',
      'Servicios, galería y experiencias',
      'Ubicación y contacto',
      'WhatsApp',
      'Integración con reservas',
      'Políticas y preguntas frecuentes',
      'Bases de SEO técnico',
      'Analítica',
    ],
    howTitle: 'Cómo funciona',
    steps: [
      { title: 'Definimos la estructura', body: 'Ordenamos qué debe encontrar el huésped y qué debe hacer el negocio.' },
      { title: 'Diseñamos y construimos', body: 'El sitio se implementa para móvil, con contenido y canales de contacto.' },
      { title: 'Queda listo para medir', body: 'Dejamos bases de SEO y analítica para ver qué ocurre después del lanzamiento.' },
    ],
    ecosystem:
      'Andario Web es la casa del resto del ecosistema: visibilidad, motor de reservas, WhatsApp y contenido se apoyan en ella cuando el establecimiento los necesita.',
    future: [],
    faqs: andarioWebFaqsEs,
    ctaTitle: 'Tu alojamiento merece una casa propia en Internet.',
    ctaLabel: 'Quiero digitalizar mi sitio',
  },
  'andario-visibility': {
    name: 'Andario Visibility',
    subtitle: 'SEO y visibilidad digital',
    summary:
      'Trabajamos la estructura, el contenido y la presencia local para ayudar a que las personas encuentren tu establecimiento cuando buscan lo que ofreces.',
    cardCta: 'Conocer Visibility',
    metaTitle: 'SEO y visibilidad para hoteles y hostales',
    metaDescription:
      'SEO técnico, SEO local y contenido para alojamientos independientes. Ayudamos a que el establecimiento pueda ser encontrado, sin prometer una posición en Google.',
    h1: 'Trabajamos para que tu alojamiento pueda ser encontrado.',
    intro:
      'Una presencia digital profesional necesita visibilidad. Trabajamos SEO técnico, SEO local, contenido y estructura para ayudar a los buscadores a comprender mejor tu establecimiento y a las personas a encontrar información útil.',
    problemTitle: 'Estar en Internet no es lo mismo que ser encontrado.',
    problem:
      'Tu alojamiento puede tener una página web, Instagram, WhatsApp y perfiles en distintas plataformas, pero eso no significa que las personas que buscan lo que ofreces puedan encontrarte fácilmente.',
    solutionTitle: 'Bases técnicas, locales y de contenido',
    solution:
      'Ordenamos metadatos, enlaces internos, Search Console, datos estructurados cuando aportan y oportunidades de contenido alineadas con la intención de búsqueda.',
    includedTitle: 'Qué puede incluir',
    included: [
      'SEO técnico y on-page',
      'Bases de SEO local',
      'Search Console, sitemap y metadatos',
      'Enlazado interno',
      'Datos estructurados cuando corresponden',
      'Presencia en Google',
      'Contenido y destino',
      'Investigación de intención de búsqueda',
    ],
    howTitle: 'Cómo funciona',
    steps: [
      { title: 'Vemos cómo te encuentran hoy', body: 'Revisamos la base técnica y la información pública del establecimiento.' },
      { title: 'Corregimos y ordenamos', body: 'Priorizamos cambios de estructura, contenido y presencia local.' },
      { title: 'Medimos sin prometer un puesto', body: 'Seguimos la evolución con datos, no con una posición garantizada.' },
    ],
    ecosystem:
      'Visibility se apoya en la web y en el contenido. Growth después ayuda a leer si esas mejoras se traducen en comportamiento real.',
    note: 'No prometemos una posición específica en Google. Construimos una base digital sólida y medible.',
    future: [],
    faqs: visibilityFaqsEs,
    ctaTitle: 'Haz que tu presencia digital sea más fácil de encontrar y entender.',
    ctaLabel: 'Mejorar mi visibilidad',
  },
  'andario-booking-engine': {
    name: 'Andario Booking Engine',
    subtitle: 'Tu canal propio de reservas',
    summary:
      'Una tecnología de reservas diseñada para ayudarte a gestionar disponibilidad, tarifas y reservas desde un canal propio.',
    cardCta: 'Conocer Booking Engine',
    metaTitle: 'Motor de reservas para hostales y hoteles pequeños',
    metaDescription:
      'Andario Booking Engine centraliza disponibilidad, tarifas, inventario y reservas directas para alojamientos independientes. Empieza por tu canal web.',
    h1: 'Construye tu propio canal de reservas.',
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
    note: 'El Booking Engine no reemplaza necesariamente las OTAs. La idea es que el establecimiento también tenga y fortalezca su propio canal.',
    futureTitle: 'En evolución, todavía no operativo',
    future: ['WhatsApp', 'Instagram', 'Facebook', 'Google', 'Otros canales', 'Asistente de IA'],
    faqs: [
      {
        q: '¿Qué es Andario Booking Engine?',
        a: 'Es el sistema propio de Andario que permite a un alojamiento construir y operar su canal de reservas. Organiza disponibilidad, tarifas, unidades y reservas. No es un formulario suelto ni un calendario, y esta página no procesa reservas.',
      },
      {
        q: '¿Para qué sirve un motor de reservas?',
        a: 'Para que un huésped consulte qué está disponible, vea el precio y avance en la reserva desde el canal propio del alojamiento, en lugar de repetir ese trabajo a mano en cada conversación.',
      },
      {
        q: '¿Cuál es la diferencia entre una web y Booking Engine?',
        a: 'La web presenta el alojamiento. El Booking Engine se encarga de la reserva: disponibilidad, tarifas y el registro.',
      },
      {
        q: '¿Puedo seguir utilizando Booking.com?',
        a: 'Sí. Puedes mantener Booking.com y otras OTAs y, al mismo tiempo, construir un canal propio. Andario Booking Engine actualmente no sincroniza OTAs.',
      },
      {
        q: '¿Puedo utilizarlo si tengo un hostal con camas?',
        a: 'Sí, cuando el establecimiento está configurado para vender camas como recurso reservable.',
      },
      {
        q: '¿Sirve para hoteles pequeños y cabañas?',
        a: 'Sí. Está pensado para alojamientos independientes. La unidad reservable se adapta cuando el producto puede representarla: una habitación, una cama o una unidad completa.',
      },
      {
        q: '¿Necesito saber de tecnología?',
        a: 'No. Andario se encarga de la parte tecnológica y te ayuda a configurar el motor según cómo funciona tu alojamiento. Tú conoces tu negocio.',
      },
      {
        q: '¿Qué canales funcionan actualmente?',
        a: 'Hoy el punto de partida es el canal web: disponibilidad, tarifas, reservas y administración. WhatsApp puede acompañar la conversación con Andario Connect, pero todavía no reserva dentro del chat.',
      },
      {
        q: '¿Qué funcionalidades están en evolución?',
        a: 'WhatsApp como canal de reserva, Instagram, Facebook, Google, una automatización más amplia, un asistente de IA y otras integraciones. Todavía no están disponibles.',
      },
      {
        q: '¿Cómo puedo comenzar?',
        a: 'Cuéntanos qué tipo de alojamiento tienes y cómo recibes reservas hoy. Conversar no obliga a contratar. El alcance se define después de entender el establecimiento.',
      },
    ],
    ctaTitle: 'Construye el canal propio de reservas de tu alojamiento.',
    ctaLabel: 'Solicitar información',
  },
  'andario-connect': {
    name: 'Andario Connect',
    subtitle: 'Comunicación y automatización',
    summary:
      'Conectamos WhatsApp y otros puntos de contacto con tu estrategia digital para organizar mejor las conversaciones y oportunidades de reserva.',
    cardCta: 'Conocer Connect',
    metaTitle: 'WhatsApp para hoteles y hostales',
    metaDescription:
      'Capa de comunicación para alojamientos: WhatsApp, preguntas frecuentes y seguimiento. La reserva sigue en el motor. Sin prometer reservas ni reemplazar al equipo.',
    h1: 'Conecta tus conversaciones con tu estrategia digital.',
    intro:
      'WhatsApp puede ser uno de los principales puntos de contacto de un alojamiento. Andario Connect busca estructurar ese canal y reducir tareas repetitivas mediante automatización.',
    problemTitle: 'Muchas reservas empiezan con una conversación.',
    problem:
      'El huésped puede escribir para preguntar disponibilidad, precio, ubicación o cómo reservar. El problema no es que escriba. Aparece cuando las mismas respuestas se hacen a mano, los interesados no tienen seguimiento y el chat queda aparte del proceso de reserva.',
    solutionTitle: 'Una capa de comunicación junto al recorrido comercial',
    solution:
      'Organizamos respuestas, captura de interés y mensajes de acompañamiento para que la conversación trabaje con la web y, cuando exista, con la reserva.',
    includedTitle: 'Qué puede incluir',
    included: [
      'WhatsApp Business',
      'Preguntas frecuentes',
      'Respuestas automatizadas',
      'Captura de interesados',
      'Guía hacia la reserva',
      'Confirmaciones',
      'Recordatorios',
      'Seguimiento',
    ],
    howTitle: 'Cómo funciona',
    steps: [
      { title: 'Vemos las conversaciones reales', body: 'Identificamos las preguntas que se repiten y los momentos de reserva.' },
      { title: 'Estructuramos el canal', body: 'Preparamos respuestas y flujos para lo que hoy se hace a mano.' },
      { title: 'Dejamos el seguimiento más claro', body: 'Confirmaciones y recordatorios dejan de depender solo de la memoria.' },
    ],
    ecosystem:
      'Connect se relaciona con la web y con el motor de reservas. El asistente de IA es una evolución posterior, no una función que este sitio presente como disponible.',
    futureTitle: 'Evolución prevista',
    future: ['Asistente de IA'],
    faqs: connectFaqsEs,
    ctaTitle: 'Haz que tus conversaciones formen parte de tu estrategia digital.',
    ctaLabel: 'Conocer Andario Connect',
  },
  'andario-content': {
    name: 'Andario Content',
    subtitle: 'Fotografía y contenido',
    summary:
      'Ayudamos a presentar tu establecimiento, sus espacios, servicios y destino de una forma coherente y atractiva.',
    cardCta: 'Conocer Content',
    metaTitle: 'Fotografía y contenido para hoteles y hostales',
    metaDescription:
      'Fotografía, textos, galería y destino para alojamientos. Material útil para mostrar el establecimiento. Sin prometer reservas ni una posición en Google.',
    h1: 'La experiencia comienza antes de la llegada.',
    intro:
      'Las fotografías, los textos y la forma de presentar un alojamiento influyen en cómo las personas imaginan su experiencia antes de reservar.',
    problemTitle: 'Una buena estadía también necesita una buena historia antes de empezar.',
    problem:
      'Quien todavía no conoce el alojamiento necesita imaginar la experiencia. Si el material es escaso, viejo, desigual o poco claro, cuesta más entender el valor del lugar. No afirmamos que eso reste un porcentaje de reservas.',
    solutionTitle: 'Material útil para web, redes y destino',
    solution:
      'Coordinamos la producción y la edición para que el alojamiento, sus unidades y su entorno se cuenten con claridad.',
    includedTitle: 'Qué puede incluir',
    included: [
      'Coordinación de fotografía',
      'Optimización de imágenes',
      'Textos del sitio',
      'Contenido para redes',
      'Video corto',
      'Contenido de destino',
      'Preparación de galería',
      'Plan editorial',
    ],
    howTitle: 'Cómo funciona',
    steps: [
      { title: 'Definimos qué hay que mostrar', body: 'Espacios, servicios, experiencias y destino.' },
      { title: 'Preparamos el material', body: 'Fotografía, textos y piezas listas para usarse.' },
      { title: 'Lo dejamos publicable', body: 'Galería y mensajes quedan alineados con la web y las redes.' },
    ],
    ecosystem:
      'El contenido alimenta Andario Web, Visibility y las redes. No sustituye la estrategia: la hace visible.',
    future: [],
    faqs: contentFaqsEs,
    ctaTitle: 'Haz que tu alojamiento se vea y se entienda como merece.',
    ctaLabel: 'Mejorar mi contenido',
  },
  'andario-growth': {
    name: 'Andario Growth',
    subtitle: 'Analítica y optimización',
    summary:
      'Medimos lo que ocurre en tu ecosistema digital para identificar oportunidades de mejora y tomar decisiones basadas en datos.',
    cardCta: 'Conocer Growth',
    metaTitle: 'Analítica para hoteles y hostales',
    metaDescription:
      'Medición del ecosistema digital de un alojamiento: Analytics, Search Console, clics y reservas. Sin prometer crecimiento ni posiciones en Google.',
    h1: 'Convierte los datos de tu alojamiento en decisiones más claras.',
    intro:
      'Una estrategia digital necesita información para evolucionar. Andario Growth ayuda a medir el comportamiento del ecosistema digital y a identificar oportunidades de mejora.',
    problemTitle: 'Tener datos no significa tener respuestas.',
    problem:
      'Un alojamiento puede recibir visitas desde Google, redes, WhatsApp y otros canales, y también interacciones en su sitio y en la reserva. El problema aparece cuando esas señales están separadas y nadie las convierte en una decisión.',
    solutionTitle: 'Datos del ecosistema, no un tablero decorativo',
    solution:
      'Configuramos la medición de la web, la búsqueda, los clics de contacto y las interacciones de reserva que el establecimiento realmente tenga.',
    includedTitle: 'Qué puede incluir',
    included: [
      'Google Analytics',
      'Search Console',
      'Eventos de conversión',
      'Comportamiento del sitio',
      'Clics a WhatsApp',
      'Interacciones de reserva',
      'Conversión de reservas',
      'Atribución de canal',
      'Informes y recomendaciones',
    ],
    howTitle: 'Cómo funciona',
    steps: [
      { title: 'Definimos qué observar', body: 'Solo eventos que el negocio puede usar para decidir.' },
      { title: 'Dejamos la medición activa', body: 'La web y los canales conectados empiezan a registrarse.' },
      { title: 'Recomendamos el siguiente ajuste', body: 'Los informes sirven para evolucionar, no para acumular métricas.' },
    ],
    ecosystem:
      'Growth cierra el ciclo: diagnóstico, implementación y después lectura de lo que ocurre para seguir mejorando.',
    future: [],
    faqs: growthFaqsEs,
    ctaTitle: 'Haz que las decisiones de tu alojamiento tengan más contexto.',
    ctaLabel: 'Quiero medir mejor',
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
        title: 'Soluciones digitales para alojamientos independientes',
        description:
          'Conoce las soluciones de Andario Hospitality para hostales, hoteles pequeños, posadas, apartamentos, cabañas y otros alojamientos independientes.',
      },
      'how-we-work': {
        title: 'Cómo trabajamos',
        description:
          'Empezamos entendiendo tu alojamiento. Con Digital Check ves dónde estás y recibes una hoja de ruta. Después implementamos solo lo que tiene sentido.',
      },
      cases: {
        title: 'Casos',
        description:
          'BARUCH Hostal es el establecimiento pionero de Andario Hospitality. Publicaremos resultados solo cuando estén medidos.',
      },
      about: {
        title: 'Nosotros',
        description:
          'Conoce Andario Hospitality, la línea de Andario Group especializada en estrategia, tecnología y digitalización para alojamientos independientes.',
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
    micro: 'No necesitas saber qué servicio necesitas. Nosotros te ayudamos a descubrirlo.',
    whatsappTitle: 'Si prefieres, empezamos por una conversación.',
    whatsappCta: 'Hablar por WhatsApp',
    orForm: 'O cuéntanos lo esencial. Toma menos de un minuto.',
    progress: 'Paso {current} de {total}',
    continueLabel: 'Continuar',
    backLabel: 'Volver',
    stepOne: 'Tu alojamiento',
    stepTwo: 'Qué te gustaría mejorar',
    unavailable: 'El formulario no está disponible en este momento. Puedes escribirnos por los canales publicados en esta página.',
    fields: {
      name: 'Nombre',
      establishment: 'Nombre del alojamiento',
      location: 'Ubicación o destino',
      type: 'Tipo de alojamiento',
      whatsapp: 'WhatsApp',
      whatsappHint: 'Es el canal por el que te responderemos.',
      email: 'Correo',
      emailHint: 'Opcional. Solo si también quieres que te escribamos por correo.',
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
      { title: 'Lo entendemos', body: 'Revisamos tu situación y conversamos contigo sobre tus prioridades.' },
      { title: 'Te orientamos', body: 'Te ayudamos a identificar oportunidades y definir por dónde empezar.' },
    ],
    afterNote: 'Sin complicaciones. Sin venderte herramientas que no necesitas.',
    unsureTitle: '¿Todavía no sabes qué necesitas?',
    unsureBody: 'Está bien. Ese es precisamente nuestro punto de partida.',
    checkCta: 'Conocer Digital Check',
    errors: {
      required: 'Revisa este campo.',
      email: 'Escribe un correo válido.',
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
