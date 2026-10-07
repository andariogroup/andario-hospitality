import type { ConnectContent, FaqItem } from '@/content/types';

export const connectFaqsEn: FaqItem[] = [
  {
    q: 'What is Andario Connect?',
    a: 'It is the service that organises your property’s communication so you can reply to frequent questions, guide guests, and help each conversation find the next step.',
  },
  {
    q: 'Does automation replace my team?',
    a: 'No. We automate the repetitive work so you and your team can focus on the conversations that truly need a person.',
  },
  {
    q: 'Does it work with WhatsApp?',
    a: 'Yes. WhatsApp is often the main attention channel. We organise communication according to the scope agreed for your property.',
  },
  {
    q: 'Does Connect book automatically?',
    a: 'No. Connect helps organise and guide the conversation. When a guest wants to move forward, they can be directed to your Booking Engine link or another path we define together.',
  },
  {
    q: 'Can I start with Connect alone?',
    a: 'Yes. Services are contracted separately, based on what your property needs.',
  },
];

export const connectEn: ConnectContent = {
  support:
    'We organise your property’s communication so you can reply to enquiries, guide your guests, and help each conversation find the next step.',
  concepts: ['WhatsApp', 'Frequent questions', 'Clearer replies', 'More opportunities'],
  primaryCta: 'I want to improve my guest care',
  talkCta: 'Talk with Andario',
  heroImage: '/solutions/reception.webp',
  heroAlt: 'Reception and guest-care space at a property',
  chatGuestLabel: 'Guest',
  chatGuestMessage: 'Hi 👋\nDo you have rooms available this weekend?',
  chatPropertyLabel: 'Property',
  chatPropertyMessage:
    'Hello! Of course — we can help you check availability.\n\nWhat would you like to know first?',
  chatOptions: ['Rooms', 'Rates', 'Location', 'Availability'],
  chatCaption: 'Conceptual representation: a simpler conversation for your guests.',
  opportunityTitle: 'Every message can be an opportunity.',
  opportunityBody:
    'Future guests write to resolve doubts, learn about prices, confirm availability, ask for directions, and more. When enquiries arrive throughout the day and everything depends on manual replies, keeping each conversation organised can become difficult.',
  floatingMessages: [
    'Hi, how much is a night?',
    'Do you have parking?',
    'How do I get to the property?',
    'Is there availability for tomorrow?',
  ],
  problems: [
    {
      title: 'Many repeated questions',
      body: 'Answering similar information again and again takes time.',
    },
    {
      title: 'Enquiries at different times',
      body: 'You cannot always reply immediately.',
    },
    {
      title: 'Conversations without a next step',
      body: 'Someone may be interested, but still needs to know what to do next.',
    },
  ],
  whatEyebrow: 'ANDARIO CONNECT',
  whatTitle: 'A more organized way to assist your guests.',
  whatBody:
    'We help structure how you reply to frequent questions and how you accompany the guest from the first enquiry to the next step.',
  whatImage: '/andario-web/personalize.jpg',
  whatAlt: 'Patio and architecture of a hospitality property',
  whatChecklist: [
    'Reply to frequent questions',
    'Guide toward the next step',
    'Simplify repetitive tasks',
    'Keep human attention available',
  ],
  whatItems: [
    {
      title: 'Reply',
      body: 'We organise responses for the questions your guests ask most often.',
    },
    {
      title: 'Guide',
      body: 'We help each conversation follow a clear path based on what the person needs.',
    },
    {
      title: 'Simplify',
      body: 'We automate repetitive tasks when it makes sense, while keeping room for human attention.',
    },
    {
      title: 'Accompany',
      body: 'We make it easier for the guest to find the next step: get information, check availability, contact you, or start a booking.',
    },
  ],
  demoTitle: 'This is what a better organized conversation can feel like.',
  demoBody:
    'A clear, well-structured conversation helps the guest find the information they need and move toward the next step.',
  demoSteps: [
    {
      label: '01',
      title: 'Guest asks',
      body: 'Hi 👋\nI would like information about the rooms.',
    },
    {
      label: '02',
      title: 'Options',
      body: 'What would you like to know?',
      options: ['Rooms', 'Rates', 'Location', 'Availability'],
    },
    {
      label: '03',
      title: 'Information',
      body: 'Discover the options available at our property.',
      cta: 'View rooms',
    },
    {
      label: '04',
      title: 'Next step',
      body: 'Would you like to check availability?',
      actions: ['Check availability', 'Talk with us'],
    },
  ],
  benefitsEyebrow: 'BENEFITS',
  benefitsTitle: 'What could improve for your property?',
  benefits: [
    {
      title: 'Less time on repeated questions',
      body: 'Organise information your guests request frequently.',
      image: '/home/known-reception.webp',
    },
    {
      title: 'Clearer replies',
      body: 'Help keep attention consistent and easy to understand.',
      image: '/andario-web/find-contact.webp',
    },
    {
      title: 'Better-guided conversations',
      body: 'Each enquiry can lead toward the right next step.',
      image: '/digital-check/step-contact.webp',
    },
    {
      title: 'More time to run your property',
      body: 'Reduce repetitive tasks without removing the human touch.',
      image: '/booking-engine/room-sea.jpg',
    },
  ],
  balanceTitle: 'Automation doesn’t mean losing the human touch.',
  balanceBody:
    'We automate the repetitive work so you can focus on the conversations that truly need a person.',
  balanceRepetitiveTitle: 'Repetitive enquiries',
  balanceRepetitive: ['Questions about prices', 'General information', 'Location', 'Availability'],
  balanceCenterTitle: 'Andario Connect',
  balanceCenterBody: 'Organises, replies, and guides',
  balanceHumanTitle: 'When help is needed',
  balanceHuman: [
    'Special enquiries',
    'Specific requests',
    'Particular situations',
    'Booking decisions',
  ],
  balanceHumanNote: 'Your team keeps the human touch in the conversations that matter most.',
  bridgeTitle: 'From a question to a potential booking.',
  bridgeBody:
    'Connect organises the conversation. Booking Engine provides the path to check availability, book, and manage operations.',
  bridgeNote:
    'Connect can guide the guest toward your property’s booking link. It does not query inventory automatically.',
  bridge: [
    { title: 'Andario Connect', role: 'Assist and guide' },
    { title: 'Check availability', role: 'Next step' },
    { title: 'Andario Booking Engine', role: 'Book' },
    { title: 'Manage operations', role: 'After booking' },
  ],
  finalImage: '/andario-web/final-cta.webp',
  finalAlt: 'Property atmosphere at dusk',
  finalTitle: 'Every conversation can be the beginning of a great guest experience.',
  finalBody:
    'Organise your property’s communication and help guests find the information and next step they need.',
  finalNote: 'Technology to simplify attention — not to lose the human touch.',
};
