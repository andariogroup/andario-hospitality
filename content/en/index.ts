import type { Dictionary } from '@/content/types';
import { bookingEngineEn } from '@/content/en/booking-engine';
import { digitalCheckEn, digitalCheckFaqsEn } from '@/content/en/digital-check';
import { andarioWebEn, andarioWebFaqsEn } from '@/content/en/andario-web';
import { visibilityEn, visibilityFaqsEn } from '@/content/en/visibility';
import { connectEn, connectFaqsEn } from '@/content/en/connect';
import { contentPageEn, contentFaqsEn } from '@/content/en/content-page';
import { growthEn, growthFaqsEn } from '@/content/en/growth';
import { solutionsHubEn } from '@/content/en/solutions';
import { homePageEn } from '@/content/en/home';
import { accommodationsPageEn } from '@/content/en/accommodations';
import { howWeWorkPageEn } from '@/content/en/how-we-work';
import { aboutViewEn } from '@/content/en/about';
import { termsViewEn } from '@/content/en/terms';

const services: Dictionary['services'] = {
  'digital-check': {
    name: 'Digital Check',
    subtitle: 'Digital diagnosis and strategy',
    summary:
      'We look at how your property shows up online today, find the gaps, and decide what should happen first.',
    cardCta: 'Explore Digital Check',
    metaTitle: 'Digital diagnosis for hotels and hostels',
    metaDescription:
      'Digital Check reviews an independent property’s digital presence and turns it into a prioritized roadmap. It does not guarantee bookings or a Google ranking.',
    h1: 'Understand what your property really needs to move forward digitally.',
    intro:
      'New tools are not the first step. Digital Check reads the current digital situation and turns the findings into a prioritized roadmap.',
    problemTitle: 'Your digital presence can be working in pieces.',
    problem:
      'Google, your website, social profiles, WhatsApp, OTAs and the booking journey can exist at the same time without forming one coherent strategy. Digital Check starts by looking at the whole. This is not every property.',
    solutionTitle: 'A diagnosis and a priority',
    solution:
      'We separate what already works from what is fragmented, then order the next actions around the business rather than a fixed package.',
    includedTitle: 'What we review',
    included: [
      'Google presence',
      'Website',
      'SEO',
      'Social profiles',
      'WhatsApp',
      'OTA presence',
      'Booking journey',
      'Content and photography',
      'User experience',
      'Analytics',
      'Competitive context',
    ],
    howTitle: 'How it works',
    steps: [
      { title: 'Context', body: 'We learn the property, the offer and the goals.' },
      { title: 'Presence', body: 'We review the main digital touchpoints.' },
      { title: 'Findings', body: 'We separate what works, what is missing and the opportunities.' },
      { title: 'Prioritization', body: 'We order them by importance and effort.' },
      { title: 'Roadmap', body: 'The actions become concrete and sequenced.' },
    ],
    ecosystem:
      'Digital Check is the entry point. From there you can contract only what the roadmap calls for: website, visibility, bookings, communication, content or measurement.',
    future: [],
    faqs: digitalCheckFaqsEn,
    ctaTitle: 'Before investing in new tools, find out what your property actually needs.',
    ctaLabel: 'Request a digital diagnosis',
  },
  'andario-web': {
    name: 'Andario Web',
    subtitle: 'A professional website',
    summary:
      'A property website that is fast, clear and built to earn trust, answer questions and make contact or booking easier.',
    cardCta: 'Explore Andario Web',
    metaTitle: 'Websites for hotels and hostels',
    metaDescription:
      'Andario Web designs the digital home of hotels, hostels and other independent accommodations: identity, units, contact and a path toward booking. No guaranteed rankings or bookings.',
    h1: 'Your property needs a home of its own online.',
    intro:
      'A website should do more than introduce the property. It should show the place, build trust, answer questions and make the next step obvious: write or book.',
    problemTitle: 'Having a website does not mean having a strong digital presence.',
    problem:
      'A property can have a site and still fail to explain the offer, scatter the information, make contact hard, work poorly on a phone or lack a clear path toward booking. This is not every property.',
    solutionTitle: 'A site shaped around the property',
    solution:
      'We design the structure, interface and content around your identity, your destination and what a guest needs to know before they write or book.',
    includedTitle: 'What it can include',
    included: [
      'Information architecture and UX/UI',
      'Responsive design',
      'Property and unit pages',
      'Services, gallery and experiences',
      'Location and contact',
      'WhatsApp',
      'Booking integration',
      'Policies and FAQ',
      'Technical SEO foundations',
      'Analytics',
    ],
    howTitle: 'How it works',
    steps: [
      { title: 'We define the structure', body: 'What the guest must find, and what the business needs them to do.' },
      { title: 'We design and build', body: 'A mobile-ready site with content and contact paths.' },
      { title: 'It ships ready to measure', body: 'SEO foundations and analytics are part of the launch, not an afterthought.' },
    ],
    ecosystem:
      'Andario Web is the home for the rest of the ecosystem. Visibility, the booking engine, WhatsApp and content can sit on it when the property needs them.',
    future: [],
    faqs: andarioWebFaqsEn,
    ctaTitle: 'Your property deserves a home of its own on the internet.',
    ctaLabel: 'I want to digitalize my site',
  },
  'andario-visibility': {
    name: 'Andario Visibility',
    subtitle: 'SEO and digital visibility',
    summary:
      'We work on structure, content and local presence so people can find your property when they search for what you offer.',
    cardCta: 'Explore Visibility',
    metaTitle: 'SEO and visibility for hotels and hostels',
    metaDescription:
      'Technical SEO, local SEO and content for independent properties. We help the property become easier to find, without promising a Google ranking.',
    h1: 'We help make your property easier to find online.',
    intro:
      'A professional presence still needs to be discoverable. We work on technical SEO, local foundations, content and structure so search engines and guests can understand the property.',
    problemTitle: 'Being online is not the same as being found.',
    problem:
      'A property can have a website, Instagram, WhatsApp and profiles on several platforms, and still be hard to find for people searching for what it offers.',
    solutionTitle: 'Technical, local and content foundations',
    solution:
      'We organize metadata, internal links, Search Console, structured data where it helps, and content opportunities that match real search intent.',
    includedTitle: 'What it can include',
    included: [
      'Technical and on-page SEO',
      'Local SEO foundations',
      'Search Console, sitemap and metadata',
      'Internal linking',
      'Structured data when it is appropriate',
      'Google presence',
      'Destination content',
      'Search intent research',
    ],
    howTitle: 'How it works',
    steps: [
      { title: 'We see how people find you now', body: 'The technical base and the public information of the property.' },
      { title: 'We fix and organize', body: 'Structure, content and local presence, in that order of priority.' },
      { title: 'We measure without promising a rank', body: 'Progress is read from data, not from a guaranteed position.' },
    ],
    ecosystem:
      'Visibility depends on the website and the content. Growth later helps you see whether those changes show up in real behavior.',
    note: 'We do not promise a specific position on Google. We build a solid, measurable digital base.',
    future: [],
    faqs: visibilityFaqsEn,
    ctaTitle: 'Make your digital presence easier to find and understand.',
    ctaLabel: 'Improve my visibility',
  },
  'andario-booking-engine': {
    name: 'Andario Booking Engine',
    subtitle: 'Your own booking channel',
    summary:
      'Reservation technology that helps you manage availability, rates and bookings from a channel you control.',
    cardCta: 'Explore Booking Engine',
    metaTitle: 'Booking engine for hostels and small hotels',
    metaDescription:
      'Andario Booking Engine centralizes availability, rates, inventory and direct reservations for independent accommodations. Start with your own web channel.',
    h1: 'Build your own direct booking channel.',
    intro:
      'Andario Booking Engine centralizes your property’s booking logic so you can build a direct channel, organize inventory and gradually connect different points of contact with your guests.',
    problemTitle: 'A property can have many channels. The problem starts when each one works on its own.',
    problem:
      'When availability and rates are coordinated by hand, the direct channel becomes fragile and the team repeats the same work in every conversation.',
    solutionTitle: 'One booking logic for the property',
    solution:
      'The engine configures the property, its units, availability, rates, rules, reservation status, the payment logic it supports, and the source of each booking.',
    includedTitle: 'What it centralizes',
    included: [
      'Property configuration',
      'Units',
      'Availability',
      'Rates',
      'Reservations and guests',
      'Booking rules',
      'Reservation status',
      'Supported payment logic',
      'Channel or source identification',
      'Administration',
    ],
    howTitle: 'How to understand it',
    steps: [
      { title: 'The property is configured', body: 'Units, rules and rates live in one place.' },
      { title: 'The reservation is operated', body: 'Availability, guests and status are handled from that logic.' },
      { title: 'The source is identified', body: 'Each booking can recognize the channel it came from.' },
    ],
    ecosystem:
      'The engine is the technology core of Andario Hospitality, not the whole company. The website, visibility and communication can connect to it when the property needs that. This corporate site does not process reservations.',
    note: 'The booking engine does not have to replace OTAs. The point is that the property also has a channel of its own.',
    futureTitle: 'In evolution, not live yet',
    future: ['WhatsApp', 'Instagram', 'Facebook', 'Google', 'Other channels', 'AI assistant'],
    faqs: [
      {
        q: 'What is Andario Booking Engine?',
        a: 'It is Andario’s own system for building and running a property’s direct booking channel. It organizes availability, rates, units and reservations. It is not a loose form or a calendar, and this page does not process bookings.',
      },
      {
        q: 'What is a booking engine for?',
        a: 'So a guest can see what is free, check the price and move into a reservation from the property’s own channel, instead of repeating that work by hand in every conversation.',
      },
      {
        q: 'What is the difference between a website and Booking Engine?',
        a: 'The website presents the property. The Booking Engine handles the reservation: availability, rates and the record.',
      },
      {
        q: 'Can I keep using Booking.com?',
        a: 'Yes. You can keep Booking.com and other OTAs and build a channel of your own at the same time. Andario Booking Engine does not sync OTAs today.',
      },
      {
        q: 'Can I use it if my hostel sells beds?',
        a: 'Yes, when the property is set up to sell beds as a bookable resource.',
      },
      {
        q: 'Does it work for small hotels and cabins?',
        a: 'Yes. It is meant for independent accommodations. The bookable unit follows the property when the product can represent it: a room, a bed or a whole unit.',
      },
      {
        q: 'Do I need to know about technology?',
        a: 'No. Andario handles the technology and helps you configure the engine around how your property works. You know the business.',
      },
      {
        q: 'Which channels work today?',
        a: 'The starting point is the website: availability, rates, reservations and administration. WhatsApp can stay a conversation with Andario Connect, but it does not book inside the chat yet.',
      },
      {
        q: 'What is still on the roadmap?',
        a: 'WhatsApp as a booking channel, Instagram, Facebook, Google, broader automation, an AI assistant and other integrations. None of that is available yet.',
      },
      {
        q: 'How can I begin?',
        a: 'Tell us what kind of property you have and how you take bookings today. A conversation does not lock you into a contract. Scope is defined after we understand the property.',
      },
    ],
    ctaTitle: 'Build the direct booking channel for your property.',
    ctaLabel: 'Request information',
  },
  'andario-connect': {
    name: 'Andario Connect',
    subtitle: 'Communication and automation',
    summary:
      'We connect WhatsApp and other contact points to your digital strategy so conversations and booking opportunities are easier to follow.',
    cardCta: 'Explore Connect',
    metaTitle: 'WhatsApp for hotels and hostels',
    metaDescription:
      'A communication layer for properties: WhatsApp, frequent questions and follow-up. The booking stays in the engine. No promised reservations and no replacement of the team.',
    h1: 'Connect your conversations with your digital strategy.',
    intro:
      'WhatsApp is often a property’s main point of contact. Andario Connect structures that channel and reduces repetitive work through automation.',
    problemTitle: 'Many bookings start with a conversation.',
    problem:
      'A guest may write to ask about availability, price, location or how to book. The problem is not that they write. It appears when the same replies are typed by hand, interested people get no follow-up and the chat stays apart from the booking process.',
    solutionTitle: 'A communication layer next to the commercial journey',
    solution:
      'We organize replies, lead capture and follow-up messages so the conversation works with the website and, when it exists, with the booking flow.',
    includedTitle: 'What it can include',
    included: [
      'WhatsApp Business',
      'FAQs',
      'Automated replies',
      'Lead capture',
      'Reservation guidance',
      'Confirmations',
      'Reminders',
      'Follow-up',
    ],
    howTitle: 'How it works',
    steps: [
      { title: 'We read the real conversations', body: 'The questions that repeat and the moments that lead to a booking.' },
      { title: 'We structure the channel', body: 'Replies and flows for work that is done by hand today.' },
      { title: 'Follow-up becomes clearer', body: 'Confirmations and reminders no longer depend only on memory.' },
    ],
    ecosystem:
      'Connect sits next to the website and the booking engine. An AI assistant is a later evolution, not a feature this site presents as available.',
    futureTitle: 'Planned evolution',
    future: ['AI assistant'],
    faqs: connectFaqsEn,
    ctaTitle: 'Make your conversations part of your digital strategy.',
    ctaLabel: 'Explore Andario Connect',
  },
  'andario-content': {
    name: 'Andario Content',
    subtitle: 'Photography and content',
    summary:
      'We help you present the property, its spaces, services and destination in a coherent way.',
    cardCta: 'Explore Content',
    metaTitle: 'Photography and content for hotels and hostels',
    metaDescription:
      'Photography, words, gallery and destination for properties. Useful material to show the accommodation. No promised bookings or Google rankings.',
    h1: 'The experience begins before arrival.',
    intro:
      'Photographs, words and the way a property is presented shape how people imagine the stay before they book.',
    problemTitle: 'A good stay also needs a clear story before it starts.',
    problem:
      'Someone who does not know the property yet needs to imagine the experience. Thin, old, uneven or unclear material makes the value harder to grasp. We do not claim that this removes a set share of bookings.',
    solutionTitle: 'Material that works on the site, on social and for the destination',
    solution:
      'We coordinate production and editing so the property, its units and its setting are explained clearly.',
    includedTitle: 'What it can include',
    included: [
      'Photography coordination',
      'Image optimization',
      'Website copy',
      'Social content',
      'Short-form video',
      'Destination content',
      'Gallery preparation',
      'Editorial planning',
    ],
    howTitle: 'How it works',
    steps: [
      { title: 'We decide what must be shown', body: 'Spaces, services, experiences and destination.' },
      { title: 'We prepare the material', body: 'Photography, copy and pieces that are ready to publish.' },
      { title: 'It matches the channels', body: 'Gallery and messages line up with the website and social profiles.' },
    ],
    ecosystem:
      'Content feeds Andario Web, Visibility and social profiles. It does not replace the strategy. It makes the strategy visible.',
    future: [],
    faqs: contentFaqsEn,
    ctaTitle: 'Let the property look and read the way it deserves.',
    ctaLabel: 'Improve my content',
  },
  'andario-growth': {
    name: 'Andario Growth',
    subtitle: 'Analytics and optimization',
    summary:
      'We measure what happens across your digital ecosystem so the next decision can be based on data.',
    cardCta: 'Explore Growth',
    metaTitle: 'Analytics for hotels and hostels',
    metaDescription:
      'Measurement for a property’s digital ecosystem: Analytics, Search Console, clicks and bookings. No promised growth or Google rankings.',
    h1: 'Turn your property’s data into clearer decisions.',
    intro:
      'A digital strategy needs information if it is going to evolve. Andario Growth measures behavior across the ecosystem and points to useful improvements.',
    problemTitle: 'Having data is not the same as having answers.',
    problem:
      'A property can receive visits from Google, social networks, WhatsApp and other channels, plus interactions on its site and in the booking flow. The problem appears when those signals stay separate and nobody turns them into a decision.',
    solutionTitle: 'Ecosystem data, not a decorative dashboard',
    solution:
      'We set up measurement for the website, search, contact clicks and the booking interactions the property actually has.',
    includedTitle: 'What it can include',
    included: [
      'Google Analytics',
      'Search Console',
      'Conversion events',
      'Website behavior',
      'WhatsApp clicks',
      'Booking interactions',
      'Reservation conversion',
      'Channel attribution',
      'Reports and recommendations',
    ],
    howTitle: 'How it works',
    steps: [
      { title: 'We choose what to watch', body: 'Only events the business can use to decide.' },
      { title: 'Measurement stays on', body: 'The website and connected channels start recording.' },
      { title: 'We recommend the next adjustment', body: 'Reports exist to improve the operation, not to collect vanity metrics.' },
    ],
    ecosystem:
      'Growth closes the loop: diagnosis, implementation, then a reading of what actually happens so the work can continue.',
    future: [],
    faqs: growthFaqsEn,
    ctaTitle: 'Give your property’s decisions more context.',
    ctaLabel: 'I want to measure more clearly',
  },
};

export const en: Dictionary = {
  meta: {
    htmlLang: 'en',
    pages: {
      home: {
        title: 'Grow your property on the internet | Andario Hospitality',
        description:
          'We help hostels, small hotels and independent properties get a website, show up on Google and take direct bookings.',
      },
      solutions: {
        title: 'Solutions to digitalize your property',
        description:
          'A website, a presence on Google, direct bookings and WhatsApp for hostels, small hotels and independent properties. Start with what you need.',
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
        title: 'Independent accommodations',
        description:
          'Andario Hospitality helps hostels, small hotels, inns, tourist apartments, cabins and villas improve their presence and how they take bookings.',
      },
      'how-we-work': {
        title: 'How we work',
        description:
          'See how we look at a property, set priorities and digitalize what it needs through diagnosis, strategy, technology and support.',
      },
      cases: {
        title: 'Cases',
        description:
          'BARUCH Hostal is the pioneering property of Andario Hospitality. Results are published only when they are measured.',
      },
      about: {
        title: 'About',
        description:
          'Meet Andario Hospitality, the Andario Group line specialized in strategy, technology and digitalization for independent accommodations.',
      },
      faq: {
        title: 'Frequently asked questions',
        description:
          'Answers about services, OTAs, SEO, WhatsApp, apartments, pricing and how to start with Andario.',
      },
      contact: {
        title: 'Contact',
        description:
          'Tell us how your property works today. We help you see where to start, on WhatsApp or in a short conversation.',
      },
      privacy: {
        title: 'Privacy policy',
        description:
          'How this Andario Hospitality website handles contact-form data, WhatsApp and optional analytics.',
      },
      terms: {
        title: 'Terms and conditions',
        description:
          'Read the terms and conditions for using the Andario Hospitality website and the general terms of our relationship.',
      },
    },
  },
  chrome: {
    skip: 'Skip to content',
    primaryCta: 'Request a digital diagnosis',
    secondaryCta: 'Talk with Andario',
    ctaSteps: ['Tell us how things work today', 'We review your digital presence', 'We show you where to start'],
    ctaNote: 'No commitment. A conversation does not lock you into a contract.',
    menu: 'Open menu',
    close: 'Close menu',
    language: 'Language',
    footerTagline: 'The digital partner for your property.',
    footerDescription: 'Strategy, technology and support for small and medium independent accommodations.',
    footerLine: 'A line of Andario Group.',
    footerCtaTitle: 'Ready to start digitalizing your property?',
    footerCtaBody: 'Tell us where you are and what you want to improve. We help you find where to start.',
    footerGroupDiagnosis: 'Diagnosis',
    footerGroupPresence: 'Presence and visibility',
    footerGroupTechnology: 'Technology and relationship',
    footerTalkCta: 'Talk with Andario',
    footerWhatsappLabel: 'Contact on WhatsApp',
    solutionsTitle: 'Solutions',
    companyTitle: 'Company',
    legalTitle: 'Legal',
    contactTitle: 'Let’s talk',
    rights: 'All rights reserved.',
    map: 'View location',
    analyticsTitle: 'Visit measurement',
    analyticsBody:
      'We can use Google Analytics to understand which pages are visited. Form contents are not sent. You can reject this.',
    analyticsAccept: 'Accept',
    analyticsReject: 'Reject',
  },
  nav: {
    home: 'Home',
    solutions: 'Solutions',
    accommodations: 'Accommodations',
    'how-we-work': 'How we work',
    'andario-booking-engine': 'Booking Engine',
    cases: 'Cases',
    about: 'About',
    contact: 'Contact',
    faq: 'FAQ',
    privacy: 'Privacy policy',
    terms: 'Terms and conditions',
  },
  home: {
    eyebrow: 'Andario Hospitality',
    h1: 'Digitalization for small accommodations.',
    lead: 'Strategy, technology and hands-on support to turn your presence on the internet into a real tool for growth.',
    micro: 'For hostels, small hotels, inns, tourist apartments, cabins and other independent accommodations.',
    secondaryCta: 'See our solutions',
    problemTitle: 'Having a digital presence is not the same as having a digital strategy.',
    problem: [
      'Your property may be on Booking.com, Airbnb, Instagram, Facebook, Google and WhatsApp. If each channel works on its own, the operation becomes hard to control.',
      'Many independent properties still do not have their own website, a booking engine, an SEO approach or a way to see where guests come from.',
    ],
    problemClose: 'Andario exists to connect those pieces.',
    solutionTitle: 'We build a digital ecosystem with you, around your property.',
    solution: [
      'We look at the current situation, name the priorities and build only the solutions the property actually needs.',
      'You do not have to do everything at once. You can start with a diagnosis, build the website, add direct bookings, work on visibility and move toward a more connected operation.',
    ],
    solutionKey: 'The strategy is built around your business, not the other way around.',
    portfolioTitle: 'Solutions to take your property to the next level.',
    portfolioIntro:
      'From the first diagnosis through measurement and evolution, Andario combines digital services and its own technology.',
    diffTitle: 'You do not need more disconnected tools.',
    diffLead: 'You need a digital strategy that works for the property.',
    diffBody:
      'Andario combines consulting, proprietary technology and close support so you can build a professional presence and grow a channel of your own.',
    highlights: [
      { title: 'Specialization', body: 'We work with small and mid-sized independent accommodations, not with a generic product for every industry.' },
      { title: 'Simplicity', body: 'Tools have to be understandable. The complexity of a large platform is not the goal.' },
      { title: 'Proprietary technology', body: 'Andario Booking Engine is our reservation technology, inside a wider offer.' },
      { title: 'Close support', body: 'The relationship continues after delivery: we measure and keep improving with you.' },
    ],
    audienceTitle: 'Built for independent accommodations.',
    audienceIntro:
      'We work with properties that want a professional digital presence without taking on the weight of a large hospitality platform.',
    audiences: [
      { title: 'Hostels', body: 'Connect your digital presence to a more professional booking experience.' },
      { title: 'Small hotels', body: 'Build a direct channel and bring the digital ecosystem into one place.' },
      { title: 'Inns', body: 'Take the character of the property into the digital experience.' },
      { title: 'Tourist apartments', body: 'Present the units and make inquiry and booking easier to follow.' },
      { title: 'Cabins and villas', body: 'Turn the stay and the destination into a presence you control.' },
      { title: 'Tourism entrepreneurs', body: 'Start with the tools you actually need and evolve at your pace.' },
    ],
    processTitle: 'You do not have to do it all at once.',
    processIntro:
      'Every property starts from a different place. We begin with that reality and build the solution in stages.',
    process: [
      { title: 'Diagnosis', body: 'We understand where you are.' },
      { title: 'Strategy', body: 'We define where to go next.' },
      { title: 'Implementation', body: 'We build what you need.' },
      { title: 'Measurement', body: 'We watch what is happening.' },
      { title: 'Evolution', body: 'We keep improving.' },
    ],
    trustTitle: 'Technology with a practical point of view.',
    trust: [
      'Technology should make the business simpler, not heavier.',
      'That is why the work starts from the real needs of independent properties.',
      'Trust comes from a clear company identity, a transparent scope and results we can show later with data. We do not publish figures we cannot support.',
    ],
    aboutTitle: 'Born in Colombia, with a Latin American horizon.',
    about: [
      'Andario Hospitality is an Andario Group line focused on helping small and mid-sized independent accommodations professionalize their digital presence.',
      'We start in Colombia because we know the context, and we want the experience to be built with real businesses.',
      'The vision is to grow progressively across Latin America with properties that want to move forward through strategy, technology and close support.',
    ],
    aboutCta: 'About Andario',
    casesTitle: 'Real stories. Real lessons.',
    cases: [
      'We are building our first implementation stories.',
      'Our first pioneering property is BARUCH Hostal, in Buritaca, Colombia.',
      'When measured results exist and we are authorized to publish them, this section will show the process, the lessons and the outcomes.',
    ],
    casesCta: 'See our cases',
    finalTitle: 'Ready to take your property further?',
    final: 'Tell us how the property works today and what you want to improve. We will help you see where to start.',
  },
  servicesIntro: {
    h1: 'Everything your property needs to build a stronger digital presence.',
    lead: 'You do not need to solve everything at once. Each solution is contracted on its own and can grow with you.',
    metaTitle: 'Digital Solutions for Independent Accommodations',
    metaDescription:
      'Strategy, website, SEO, direct bookings, WhatsApp, content and analytics for small and medium independent accommodations.',
  },
  services,
  bookingEngine: bookingEngineEn,
  digitalCheck: digitalCheckEn,
  andarioWeb: andarioWebEn,
  visibility: visibilityEn,
  connect: connectEn,
  contentPage: contentPageEn,
  growth: growthEn,
  solutionsHub: solutionsHubEn,
  homePage: homePageEn,
  accommodationsPage: accommodationsPageEn,
  howWeWorkPage: howWeWorkPageEn,
  aboutView: aboutViewEn,
  termsView: termsViewEn,
  accommodations: {
    h1: 'Digitalization that fits how an independent property actually operates.',
    lead: 'There is no minimum room count and no need to look like a chain. What matters is an independent business that needs to organize its digital presence.',
    body: [
      'Andario works with hostels, small hotels, inns, tourist apartments, apart-hotels, cabins, villas, rural stays and entrepreneurs who rent by the day.',
      'The approach is the same: understand the property, set priorities and build only what helps you present, communicate, book and measure.',
    ],
    types: [
      { title: 'Hostels', body: 'They often live between social profiles, WhatsApp and OTAs. A clear website and a direct channel bring order without losing the close tone.' },
      { title: 'Small hotels', body: 'They need a professional presence and a way to avoid depending on intermediaries for every night.' },
      { title: 'Inns', body: 'The character of the place is the argument. The site and the content have to tell it before arrival.' },
      { title: 'Apartments and apart-hotels', body: 'Units can be configured as bookable accommodations, with clearer information and availability.' },
      { title: 'Cabins, villas and rural stays', body: 'The destination weighs as much as the bed. The digital presence has to show both.' },
    ],
    close: 'If the property is independent and the digital operation feels fragmented, the exact size is not the filter.',
  },
  processPage: {
    h1: 'Progressive digitalization, shaped around your reality.',
    lead: 'We do not believe every property needs the same tools, or that all of them must be implemented at once.',
    close: 'Your business sets the pace. We build the digital path with you.',
  },
  casesPage: {
    h1: 'Cases',
    lead: 'This page is ready to document real work. Today we publish only what we can already say.',
    name: 'BARUCH Hostal',
    place: 'Buritaca, Colombia',
    label: 'Pioneering property of Andario Hospitality.',
    body: [
      'BARUCH Hostal is the first property where Andario Hospitality is putting its way of working into practice.',
      'When measured data exists and we are authorized to publish it, this page can add the starting situation, the diagnosis, the implementation and the lessons.',
    ],
    pending: 'We do not publish occupancy, revenue, rankings or testimonials yet. Those figures will appear only if they are real.',
  },
  aboutPage: {
    h1: 'Technology designed for real businesses.',
    lead: 'Andario Hospitality is an Andario Group line dedicated to digitalizing small and mid-sized independent accommodations.',
    body: [
      'We start from a conviction: technology should not be reserved for large companies.',
      'Many properties have a strong experience to offer and still lack the tools to present it, reach guests and build channels of their own.',
      'Andario combines consulting, design, technology and close support to close that gap. We are not a traditional agency or a giant PMS, and we do not compete on promised results.',
    ],
    visionTitle: 'Vision',
    vision:
      'To be the reference digital partner for small and mid-sized independent accommodations in Colombia and, progressively, across Latin America.',
    missionTitle: 'Mission',
    mission:
      'To help properties digitalize and professionalize their businesses through simple, accessible and connected solutions.',
  },
  faqPage: {
    h1: 'Frequently asked questions',
    lead: 'Direct answers about how we work and what we do not promise.',
    items: [
      { q: 'What does Andario do?', a: 'It helps small and mid-sized independent accommodations organize their digital presence with strategy, technology and close support.' },
      { q: 'Who is it for?', a: 'Hostels, small hotels, inns, apartments, apart-hotels, cabins, villas, rural stays and entrepreneurs who rent by the day.' },
      { q: 'Does Andario work only with hotels?', a: 'No. The criterion is an independent business that needs practical digitalization.' },
      { q: 'Do I need a website?', a: 'Not always as the first step. The diagnosis shows whether the website is the priority or whether another piece should come first.' },
      { q: 'Do I need a booking engine?', a: 'Only if it helps you operate a direct channel. You can keep your current setup and add it when it makes sense.' },
      { q: 'Can I keep using Booking.com or Airbnb?', a: 'Yes. OTAs can remain important channels. Andario helps you build a direct channel as well.' },
      { q: 'Can I start with one service?', a: 'Yes. Services are contracted separately. There is no mandatory bundle.' },
      { q: 'Can I start with a website only?', a: 'Yes. The strategy can begin with the most important need and evolve later.' },
      { q: 'Can Andario help with SEO?', a: 'Yes, through Andario Visibility. We do not guarantee a Google position or a fixed amount of traffic.' },
      { q: 'Can you integrate WhatsApp?', a: 'Yes. Andario Connect covers communication, automation and, progressively, the link with reservations.' },
      { q: 'Does it work for tourist apartments?', a: 'Yes. Units can be rooms, apartments, studios, cabins, villas or other bookable types.' },
      { q: 'Does it work for cabins or villas?', a: 'Yes. The same approach applies when the property is independent, whether it is in a town, on the coast or in a rural area.' },
      { q: 'Is it suitable for small properties?', a: 'Yes. It is not designed around the complexity of a large chain.' },
      { q: 'Is there a minimum number of rooms?', a: 'We do not use a fixed unit count as a requirement. We look at whether the business is independent and what it needs to digitalize.' },
      { q: 'Can the property website be bilingual?', a: 'Yes. An Andario Web site can be prepared in more than one language when the property needs it. This corporate site is already in Spanish and English.' },
      { q: 'How does implementation work?', a: 'Diagnosis, priorities, building what was agreed, launch, and then measurement.' },
      { q: 'What happens after launch?', a: 'Behavior can be measured and the work can continue. Support is part of the model. It does not end on delivery day.' },
      { q: 'How is pricing determined?', a: 'It depends on the scope. After we understand the property we prepare a proposal. This site does not publish a fixed fee.' },
      { q: 'Do you work outside Colombia?', a: 'Colombia is the initial market. The vision is to grow progressively across Latin America.' },
      { q: 'Do you guarantee first place on Google?', a: 'No. We work on technical foundations, content and local SEO to build a measurable presence.' },
    ],
  },
  contactPage: {
    h1: 'Let’s talk about your property.',
    lead: 'Tell us how your business works today and what you would like to improve. We’ll help you see where to start.',
    micro: 'You don’t need to know which service you need. We’ll help you find that out.',
    whatsappTitle: 'If you prefer, we can start with a conversation.',
    whatsappCta: 'Talk on WhatsApp',
    orForm: 'Or tell us the essentials. It takes less than a minute.',
    progress: 'Step {current} of {total}',
    continueLabel: 'Continue',
    backLabel: 'Back',
    stepOne: 'Your property',
    stepTwo: 'What you would like to improve',
    unavailable: 'The form is not available right now. You can write through the channels published on this page.',
    fields: {
      name: 'Name',
      establishment: 'Property name',
      location: 'Location or destination',
      type: 'Accommodation type',
      whatsapp: 'WhatsApp',
      whatsappHint: 'This is the channel we’ll use to reply.',
      email: 'Email',
      emailHint: 'Optional. Only if you also want a reply by email.',
      note: 'Tell us a little more',
      noteHint: 'Optional.',
      needs: 'What would you like to improve?',
      consent: 'I agree that Andario may use this information to reply to my request.',
      submit: 'I want to find where to start',
      sending: 'Sending…',
    },
    types: {
      hostel: 'Hostel',
      'small-hotel': 'Small hotel',
      posada: 'Inn',
      apartment: 'Tourist apartment',
      'apart-hotel': 'Apart-hotel',
      cabin: 'Cabin',
      villa: 'Villa',
      rural: 'Rural stay',
      other: 'Other',
    },
    needs: {
      bookings: 'Get more bookings',
      web: 'Have a better website',
      google: 'Show up better on Google',
      otas: 'Rely less on OTAs',
      organize: 'Organize my bookings better',
      whatsapp: 'Improve WhatsApp and guest care',
      unsure: 'I’m not sure / I need guidance',
    },
    afterTitle: 'What happens next?',
    after: [
      { title: 'We listen', body: 'You tell us how the property works today and what you want to improve.' },
      { title: 'We understand', body: 'We look at your situation and talk with you about your priorities.' },
      { title: 'We point the way', body: 'We help you see the opportunities and decide where to start.' },
    ],
    afterNote: 'No complications. We won’t sell you tools you don’t need.',
    unsureTitle: 'Not sure what you need yet?',
    unsureBody: 'That’s all right. That is exactly where we start.',
    checkCta: 'Discover Digital Check',
    errors: {
      required: 'Please check this field.',
      email: 'Enter a valid email.',
      consent: 'We need your consent to reply to the request.',
    },
    result: {
      success: 'Thank you for contacting us. We received your information and will get in touch with you.',
      invalid: 'Check the fields and try again.',
      rate_limited: 'We received several submissions in a row. Wait a few minutes and try again.',
      unavailable: 'We cannot receive the form right now. Write to us on WhatsApp or by email.',
      error: 'There was a problem sending your information. Please try again.',
    },
    honeypot: 'Leave this field empty',
  },
  legal: {
    privacy: {
      h1: 'Privacy policy',
      lead: 'This policy describes how this website handles personal data. It does not cover future products or processing this site does not perform.',
      sections: [
        {
          title: 'Controller',
          body: [
            'The controller is Andario Group, NIT 901774250, through its commercial line Andario Hospitality.',
            'The contact details, address and phone published on the site come from the current configuration. Use them to ask about your data.',
          ],
        },
        {
          title: 'What this site collects',
          body: [
            'If you submit the form: name, property, location, accommodation type, what you would like to improve, WhatsApp, email if you provide one, and an optional note.',
            'If you write on WhatsApp, the conversation happens on WhatsApp. This site only opens the link.',
            'If you accept measurement, Google Analytics 4 may record technical visit data. We do not send the form contents to Analytics.',
            'This site does not ask for identity documents, payment data or guest information.',
          ],
        },
        {
          title: 'Why the data is used',
          body: [
            'To reply to commercial requests and prepare a diagnosis or a proposal.',
            'To protect the form against spam and abuse.',
            'To understand how the site is used, only if you enable analytics.',
          ],
        },
        {
          title: 'Processors and retention',
          body: [
            'The site is hosted on Vercel. The form is forwarded to a webhook configured by Andario when one exists. If the webhook is not configured, the form does not deliver the request.',
            'This site does not store form submissions in its own database. Whoever receives the webhook should limit the data to the commercial purpose and should not keep it indefinitely.',
          ],
        },
        {
          title: 'Cookies',
          body: [
            'The site does not install marketing cookies.',
            'Analytics loads only if a GA4 identifier exists and you accept measurement. You can reject it. The choice is stored in the browser’s local storage.',
          ],
        },
        {
          title: 'Rights',
          body: [
            'You may request access, update, correction or deletion of your data, and withdraw consent where applicable, by writing to the email published on the site.',
            'This policy uses Colombia’s Law 1581 of 2012 and Decree 1074 of 2015 as a reference. It should be reviewed by counsel before it is treated as final legal text.',
          ],
        },
      ],
    },
    review: 'Baseline text for the current operation of the site. It needs legal review before it is treated as final.',
  },
  notFound: {
    title: 'We could not find this page.',
    body: 'The link may be out of date. Go back home to see Andario’s solutions.',
    cta: 'Back to home',
  },
  error: {
    title: 'Something did not go as expected.',
    body: 'You can try again. If it keeps failing, use the contact page or WhatsApp.',
    retry: 'Try again',
  },
};
