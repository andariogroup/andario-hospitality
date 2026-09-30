import type { ContentPage, FaqItem } from '@/content/types';

export const contentFaqsEn: FaqItem[] = [
  {
    q: 'What is Andario Content?',
    a: 'It is the service that creates content to show your spaces, services, and the experience you want to convey — in a coherent and attractive way.',
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
    'We create content that shows your spaces, services, and the experience you want to convey so your property connects better with future guests.',
  concepts: ['Photography', 'Content', 'Social'],
  primaryCta: 'I want to know this service',
  talkCta: 'Talk with Andario',
  opportunityTitle: 'Before booking, guests want to picture themselves there.',
  opportunityBody:
    'Images and content influence how people perceive a property before they decide.',
  opportunityPoints: ['Show', 'Inspire', 'Connect'],
  doTitle: 'What do we do for your property?',
  doItems: [
    {
      title: 'Photography and visual direction',
      body: 'Visual material designed to present your spaces with clarity and coherence.',
    },
    {
      title: 'Website content',
      body: 'Copy and images that help explain your property on your site.',
    },
    {
      title: 'Social content',
      body: 'Pieces aligned with your brand for a more attractive presence.',
    },
    {
      title: 'Editorial planning',
      body: 'A clear direction so content supports your goals instead of feeling improvised.',
    },
  ],
  getTitle: 'What you get',
  getItems: [
    'A more professional image',
    'Content coherent with your brand',
    'Material for web and social',
    'More attractive communication',
  ],
  crossSellBody: 'Content attracts. The website helps convert.',
  crossSellCta: 'Discover Andario Web',
  crossSellRoute: 'andario-web',
  finalTitle: 'Want to show more of what your property has to offer?',
  finalBody: 'Tell us how your property looks today and what you would like to communicate better.',
  diagnosisCta: 'Request a diagnosis',
  finalNote: 'We start from your property, your goals, and your needs.',
};
