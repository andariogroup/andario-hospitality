import type { ContentPage, FaqItem } from '@/content/types';

export const contentFaqsEn: FaqItem[] = [
  {
    q: 'What is Andario Content?',
    a: 'It is the service that creates photography and content to show your spaces, services, and the experience you want to convey — with a more cared-for and coherent presence.',
  },
  {
    q: 'Does it include professional photography?',
    a: 'It can, depending on the scope. We coordinate the visual production your property needs.',
  },
  {
    q: 'Do you promise more followers or virality?',
    a: 'No. We create useful, coherent content. We do not promise virality, follower counts, or bookings from a single post.',
  },
  {
    q: 'Can I start with Content alone?',
    a: 'Yes. Services are contracted separately, based on what your property needs.',
  },
];

export const contentPageEn: ContentPage = {
  support:
    'We create professional photography and content to show your spaces, convey your property’s experience, and build a presence that inspires trust from the first glance.',
  concepts: ['Photography', 'Website', 'Social media', 'Visual identity'],
  primaryCta: 'I want to improve my content',
  talkCta: 'Talk with Andario',
  heroImage: '/booking-engine/room-sea.jpg',
  heroAlt: 'Bright guest room looking out toward nature',
  heroCards: [
    { label: 'Rooms', image: '/andario-web/find-rooms.webp' },
    { label: 'Spaces', image: '/andario-web/personalize.jpg' },
    { label: 'Experiences', image: '/andario-web/experience.jpg' },
    { label: 'Details', image: '/andario-web/find-gallery.jpg' },
  ],
  journeyTitle: 'Before booking, guests want to picture themselves there.',
  journeyBody:
    'When someone discovers a property online, they cannot yet walk through the rooms, sit on the terrace, or feel the atmosphere in person. Images and content have to help them do that.',
  journey: [
    { title: 'Discovers it', image: '/digital-check/step-find.webp' },
    { title: 'Sees your spaces', image: '/andario-web/find-rooms.webp' },
    { title: 'Imagines being there', image: '/andario-web/experience.jpg' },
    { title: 'Understands what you offer', image: '/andario-web/find-services.webp' },
    { title: 'Feels trust', image: '/home/known-reception.webp' },
    { title: 'Decides to learn more', image: '/digital-check/step-decide.webp' },
  ],
  compareTitle: 'The same property can tell very different stories.',
  improvisedTitle: 'Improvised presentation',
  improvisedPoints: [
    'Dark or uninviting photos',
    'Images without coherence',
    'Unclear information',
    'Weaker visual impact',
    'Harder to convey the experience',
  ],
  improvisedImages: [
    '/home/andario-city-building.webp',
    '/how-we-work/known-digital.webp',
    '/digital-check/dashboard-photo.webp',
    '/home/digital-check-desk.webp',
  ],
  polishedTitle: 'Cared-for presentation',
  polishedPoints: [
    'Bright, professional photographs',
    'Spaces presented with care',
    'Coherent visual identity',
    'Clear information',
    'An image closer to the real experience',
  ],
  polishedImages: [
    '/booking-engine/room-sea.jpg',
    '/andario-web/personalize.jpg',
    '/andario-web/hero-property.webp',
    '/booking-engine/coast-close.jpg',
  ],
  whatTitle: 'We build a visual presence that better represents your property.',
  whatBody:
    'Photography, content, and planning designed to show what makes your property special at every touchpoint.',
  whatItems: [
    {
      title: 'Photography',
      body: 'We show your spaces with intention: rooms, common areas, exteriors, details, and experiences.',
    },
    {
      title: 'Website content',
      body: 'We help present your spaces, services, and offer clearly and attractively.',
    },
    {
      title: 'Social content',
      body: 'We build visual material to communicate your property in a more cared-for and coherent way.',
    },
    {
      title: 'Content direction',
      body: 'We define what to show, how to tell it, and how to keep communication coherent.',
    },
  ],
  mosaicTitle: 'Every corner can help tell your story.',
  mosaicBody: 'Rooms, common spaces, exteriors, details, services, experiences, and more.',
  mosaic: [
    {
      label: 'Exteriors',
      image: '/andario-web/hero-property.webp',
      alt: 'Facade and outdoor setting of a property',
      span: 'tall',
    },
    {
      label: 'Rooms',
      image: '/andario-web/find-rooms.webp',
      alt: 'Guest room prepared for visitors',
    },
    {
      label: 'Details',
      image: '/andario-web/find-gallery.jpg',
      alt: 'Interior detail of the property',
    },
    {
      label: 'Common spaces',
      image: '/andario-web/personalize.jpg',
      alt: 'Warm common area inside a property',
      span: 'wide',
    },
    {
      label: 'Experiences',
      image: '/andario-web/experience.jpg',
      alt: 'Stay experience at a hospitality property',
      span: 'wide',
    },
    {
      label: 'Services',
      image: '/andario-web/find-services.webp',
      alt: 'Services and amenities at a property',
    },
  ],
  channelsTitle: 'Content that works across your digital presence.',
  channelsBody:
    'The same content foundation can help you present your property coherently across different channels.',
  channels: [
    {
      title: 'Website',
      body: 'Present your rooms, spaces, services, and experiences.',
      image: '/andario-web/find-stay.webp',
    },
    {
      title: 'Search presence',
      body: 'Strengthen how people discover and get to know your property.',
      image: '/home/andario-visibility-card.webp',
    },
    {
      title: 'Social media',
      body: 'Keep a more cared-for and coherent visual communication.',
      image: '/home/andario-content-card.webp',
    },
    {
      title: 'Bookings',
      body: 'Use clear images to help present your stay options when it makes sense.',
      image: '/andario-web/find-booking.webp',
    },
  ],
  experienceTitle: "You're not just offering a room.",
  experienceBody:
    'A guest may be looking for rest, an escape, a new destination, time with someone, or simply feeling comfortable away from home.',
  experienceHighlight: 'Content helps show the experience that lives behind your spaces.',
  experienceImage: '/growth/editorial.webp',
  experienceAlt: 'Person enjoying a view from a property',
  experienceMoments: [
    { label: 'Rest', image: '/booking-engine/room-sea.jpg' },
    { label: 'Discover', image: '/booking-engine/coast-close.jpg' },
    { label: 'Share', image: '/andario-web/experience.jpg' },
    { label: 'Enjoy', image: '/andario-web/final-cta.webp' },
    { label: 'Feel welcome', image: '/home/known-reception.webp' },
  ],
  benefitsTitle: 'What could change for your property?',
  benefits: [
    {
      title: 'A more cared-for first impression',
      body: 'Your digital presence better reflects the quality and personality of your property.',
    },
    {
      title: 'More trust',
      body: 'A clear visual presentation helps future guests understand what they will find.',
    },
    {
      title: 'A more coherent identity',
      body: 'Website, social, and other touchpoints can tell the same story.',
    },
    {
      title: 'More content to communicate',
      body: 'You build a visual foundation you can use across your digital presence.',
    },
  ],
  bridgeTitle: 'Content attracts attention.\nYour website helps turn interest into action.',
  bridgeLead:
    'Content shows your property. Web helps present who you are and what you offer so the guest can take the next step.',
  bridge: [
    { title: 'Andario Content', role: 'Shows your property' },
    { title: 'The guest', role: 'Gets interested' },
    { title: 'Andario Web', role: 'Explains and presents' },
    { title: 'Contact / Booking', role: 'Next step' },
  ],
  finalImage: '/andario-web/final-cta.webp',
  finalAlt: 'Terrace and property atmosphere at dusk',
  finalTitle: 'Your property already has a story.\nLet’s help people see it.',
  finalBody:
    'Show us how your property is presented today and let’s talk about building an image that better represents everything you have to offer.',
  finalNote: 'Photography · Content · Identity · Digital presence',
};
