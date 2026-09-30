import type { DigitalCheckContent, FaqItem } from '@/content/types';

export const digitalCheckFaqsEn: FaqItem[] = [
  {
    q: 'What is Digital Check?',
    a: 'It is a digital diagnosis and strategy for your property. We analyse the current situation, identify opportunities, and build a prioritised roadmap.',
  },
  {
    q: 'What do I receive at the end?',
    a: 'Analysis, findings, priorities, strategy, and a roadmap so you know what to work on first.',
  },
  {
    q: 'Do I need to hire other services afterwards?',
    a: 'No. The diagnosis guides the decision. Later services are contracted separately only when they make sense.',
  },
  {
    q: 'Does it guarantee more bookings or Google rankings?',
    a: 'No. Digital Check brings clarity and direction. It does not guarantee bookings, traffic, or a search ranking.',
  },
  {
    q: 'How do I request it?',
    a: 'From Request my Digital Check or on WhatsApp. The conversation does not require hiring the rest of the services.',
  },
];

export const digitalCheckEn: DigitalCheckContent = {
  support:
    'We analyse your property’s current situation, identify opportunities, and build a clear, prioritised strategy so you know what to improve first and how to move forward.',
  primaryCta: 'Request my Digital Check',
  talkCta: 'Talk with Andario',
  benefits: ['Diagnosis', 'Strategy', 'Priorities', 'Roadmap'],
  dashboardLabel: 'Conceptual view',
  dashboardScoreLabel: 'Potential',
  dashboardScoreNote: 'Demo',
  dashboardAreas: [
    { label: 'Google', value: 72 },
    { label: 'Website', value: 64 },
    { label: 'Social', value: 58 },
    { label: 'WhatsApp', value: 70 },
    { label: 'Bookings', value: 52 },
    { label: 'Content', value: 60 },
  ],
  heroAtmosphere: '/digital-check/hero-atmosphere.jpg',
  heroAtmosphereAlt: 'Facade of an independent accommodation.',
  problemTitle: 'Your digital presence may be working in pieces.',
  problemBody:
    'You may have a website, Google, social media, WhatsApp, and booking platforms. But if each channel works on its own and you don’t know what to prioritise, it’s hard to turn that effort into a strategy.',
  problemSteps: [
    {
      title: 'They find you',
      body: 'Google · Social · OTAs',
      image: '/digital-check/step-find.webp',
    },
    {
      title: 'They get to know you',
      body: 'Website · Content · Experience',
      image: '/digital-check/step-know.webp',
    },
    {
      title: 'They contact you',
      body: 'WhatsApp · Bookings',
      image: '/digital-check/step-contact.webp',
    },
    {
      title: 'You decide',
      body: 'Data · Priorities · Strategy',
      image: '/digital-check/step-decide.webp',
    },
  ],
  whatEyebrow: 'What is Digital Check?',
  whatTitle: 'A diagnosis to know where you are and which path to follow.',
  whatBody:
    'We analyse your property’s digital presence from a guest’s perspective and from the reality of your business.',
  whatImage: '/digital-check/what.jpg',
  whatAlt: 'Accommodation terrace overlooking the landscape.',
  lenses: [
    {
      title: 'Visibility',
      body: 'Can people looking for a stay in your destination find you?',
    },
    {
      title: 'Experience',
      body: 'Does your digital presence convey what you really offer?',
    },
    {
      title: 'Bookings',
      body: 'Is there a clear path from interest to contact or booking?',
    },
    {
      title: 'Information',
      body: 'Do you have clarity on what works and where opportunities exist?',
    },
  ],
  whatNote:
    'Not every property needs the same things. That’s why the diagnosis adapts to your situation, needs, and goals.',
  receiveEyebrow: 'What you receive',
  receiveTitle: 'You don’t just receive a diagnosis. You receive a direction.',
  receiveBody:
    'A clear analysis, actionable findings, and a strategy that shows exactly what to work on first.',
  receive: [
    { title: 'Analysis', body: 'We understand your current situation.' },
    { title: 'Findings', body: 'We identify opportunities and key points.' },
    { title: 'Priorities', body: 'We define what is worth working on first.' },
    { title: 'Strategy', body: 'We build a digital path adapted to your property.' },
    { title: 'Roadmap', body: 'We show you how to move forward and in what order.' },
  ],
  resultTitle: 'From information to a clear strategy.',
  resultBody:
    'The goal is not to hand you a list of problems. It is to help you understand what is happening, which opportunities exist, and where it makes sense to focus.',
  resultFlow: ['Current situation', 'Findings', 'Opportunities', 'Priorities', 'Digital strategy', 'Roadmap'],
  actionTitle: 'From diagnosis to action.',
  actionBody:
    'Based on what we find, we can recommend where it makes sense to invest first: website, visibility, bookings, communication, content, or measurement.',
  actionFlow: ['Digital Check', 'Strategy', 'Implementation', 'Measurement', 'Evolution'],
  finalImage: '/digital-check/final-cta.webp',
  finalAlt: 'Property at dusk.',
  finalTitle: 'Your property already has something to offer. Now let’s help more people discover it.',
  finalBody:
    'Tell us where you are today and where you want to take your property. We’ll help you find the digital path.',
  finalNote: 'No commitment to hire other services.',
};
