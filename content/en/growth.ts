import type { FaqItem, GrowthContent } from '@/content/types';

export const growthFaqsEn: FaqItem[] = [
  {
    q: 'What is Andario Growth?',
    a: 'It is the service that analyses what happens across your digital channels to understand what works, where opportunities exist, and what is worth improving.',
  },
  {
    q: 'Do you promise more revenue?',
    a: 'No. Growth brings clarity and recommendations. We do not promise revenue increases or Google rankings.',
  },
  {
    q: 'Do I need analytics already set up?',
    a: 'If you already have measurement in place, we use it. If not, we can start by building a clear foundation within the agreed scope.',
  },
  {
    q: 'Can I start with Growth alone?',
    a: 'Yes. Services are contracted separately, based on what your property needs.',
  },
];

export const growthEn: GrowthContent = {
  support:
    'We analyse what happens across your digital channels to understand what works, where opportunities exist, and what is worth improving.',
  concepts: ['Measurement', 'Analysis', 'Optimisation'],
  primaryCta: 'I want to improve my property',
  talkCta: 'Talk with Andario',
  dashboardLabel: 'Conceptual view',
  dashboardNav: ['Overview', 'Channels', 'Opportunities'],
  dashboardMetrics: [
    { label: 'Site visits', value: '—', trend: 'Demo' },
    { label: 'Opportunities', value: '—', trend: 'Demo' },
    { label: 'Interactions', value: '—', trend: 'Demo' },
  ],
  dashboardChannelsTitle: 'Traffic channels',
  dashboardChannels: [
    { label: 'Google', value: 72 },
    { label: 'Direct', value: 48 },
    { label: 'Social', value: 36 },
    { label: 'Other', value: 22 },
  ],
  dashboardDevicesTitle: 'Devices',
  dashboardDevices: [
    { label: 'Mobile', value: 62 },
    { label: 'Desktop', value: 28 },
    { label: 'Tablet', value: 10 },
  ],
  loopTitle: 'Measure → Understand → Decide → Improve',
  loop: [
    { title: 'Measure', body: 'We gather information from your digital channels.' },
    { title: 'Understand', body: 'We analyse behaviour and opportunities.' },
    { title: 'Decide', body: 'We identify what deserves attention first.' },
    { title: 'Improve', body: 'We give you recommendations to move forward.' },
  ],
  loopNote: 'Growth turns your property’s digital information into useful knowledge for decisions.',
  doTitle: 'What do we do for your property?',
  doItems: [
    {
      title: 'Digital channel measurement',
      body: 'We organise information from your main channels so it becomes useful.',
    },
    {
      title: 'Behaviour analysis',
      body: 'We review how people interact with your digital presence.',
    },
    {
      title: 'Opportunity tracking',
      body: 'We identify signals that help prioritise what to work on first.',
    },
    {
      title: 'Improvement recommendations',
      body: 'We turn findings into clear actions, not reports that are hard to use.',
    },
  ],
  getTitle: 'What you get',
  getSupport: 'Clear information to know what is working and what you should improve.',
  getItems: [
    { title: 'Clear data', body: 'Understand what is happening across your digital channels.' },
    { title: 'Results', body: 'See how your channels behave.' },
    { title: 'Opportunities', body: 'Identify where you can improve.' },
    { title: 'Recommendations', body: 'Define which actions to prioritise.' },
  ],
  editorialEyebrow: 'Data should help you move forward',
  editorialTitle: 'Measuring is only the beginning.',
  editorialBody:
    'Growth turns information from your digital channels into useful knowledge for decisions about your property.',
  editorialCta: 'See how we work with Andario',
  editorialImage: '/growth/editorial.webp',
  editorialAlt: 'Digital workspace with a view toward a hospitality setting.',
  heroAtmosphere: '/growth/hero-atmosphere.webp',
  heroAtmosphereAlt: 'Facade of an independent accommodation.',
  finalImage: '/growth/final-cta.webp',
  finalAlt: 'Property at dusk overlooking the landscape.',
  finalTitle: 'Want to know what is working in your digital presence?',
  finalBody: 'We analyse your data, identify opportunities, and help you define what to improve.',
  diagnosisCta: 'Request a diagnosis',
  finalNote: 'We start from your goals, your data, and the reality of your property.',
};
