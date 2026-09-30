import type { ConnectContent, FaqItem } from '@/content/types';

export const connectFaqsEn: FaqItem[] = [
  {
    q: 'What is Andario Connect?',
    a: 'It is the service that organises your property’s communication so enquiries, conversations, and booking opportunities follow a clearer path.',
  },
  {
    q: 'Does automation replace my team?',
    a: 'No. Automation helps with repetitive tasks. Important conversations still need people.',
  },
  {
    q: 'Does it work with WhatsApp?',
    a: 'Yes. WhatsApp is often the main channel. We can also organise other contact points within the agreed scope.',
  },
  {
    q: 'Can I start with Connect alone?',
    a: 'Yes. Services are contracted separately, based on what your property needs.',
  },
];

export const connectEn: ConnectContent = {
  support:
    'We organise your property’s communication so enquiries, conversations, and booking opportunities follow a clearer path.',
  concepts: ['WhatsApp', 'Communication', 'Automation'],
  primaryCta: 'I want to know this service',
  talkCta: 'Talk with Andario',
  opportunityTitle: 'Every enquiry can be an opportunity.',
  opportunityBody:
    'When communication is scattered or depends entirely on manual processes, it is easy to lose time and opportunities.',
  opportunityPoints: ['Reply', 'Guide', 'Convert'],
  doTitle: 'What do we do for your property?',
  doItems: [
    {
      title: 'Organisation of communication channels',
      body: 'We organise how enquiries arrive and get handled so nothing is left loose.',
    },
    {
      title: 'Attention flows',
      body: 'We define clear paths for common questions and key moments in the conversation.',
    },
    {
      title: 'Automation',
      body: 'We reduce repetitive tasks without pretending to replace human attention.',
    },
    {
      title: 'Support through the booking process',
      body: 'We help the conversation accompany the guest through to the next step.',
    },
  ],
  getTitle: 'What you get',
  getItems: [
    'More organised communication',
    'More efficient replies',
    'Fewer repetitive tasks',
    'A better experience for your guests',
  ],
  crossSellBody: 'When a conversation turns into a booking, you need a place to manage it.',
  crossSellCta: 'Discover Andario Booking Engine',
  crossSellRoute: 'andario-booking-engine',
  finalTitle: 'Want to improve how you care for your guests?',
  finalBody: 'Tell us how you handle enquiries today and what you would like to organise.',
  diagnosisCta: 'Request a diagnosis',
  finalNote: 'We start from your property, your goals, and your needs.',
};
