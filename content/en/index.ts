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
      'We analyse your property’s digital situation, identify opportunities, and build a clear strategy so you know what to improve first.',
    cardCta: 'Explore Digital Check',
    metaTitle: 'Digital Check | Digital diagnosis and strategy for accommodations',
    metaDescription:
      'We analyse your property’s digital presence, identify opportunities, and build a clear strategy so you know what to improve first.',
    h1: 'Discover what your property really needs to grow digitally.',
    intro:
      'We analyse your property’s current situation, identify opportunities, and build a clear, prioritised strategy so you know what to improve first and how to move forward.',
    problemTitle: 'Your digital presence may be working in pieces.',
    problem:
      'You may have a website, Google, social media, WhatsApp, and booking platforms. But if each channel works on its own and you don’t know what to prioritise, it’s hard to turn that effort into a strategy.',
    solutionTitle: 'A diagnosis and a direction',
    solution:
      'We review the current situation, identify opportunities, and set priorities to build a digital strategy adapted to your property.',
    includedTitle: 'What it includes',
    included: ['Analysis', 'Findings', 'Priorities', 'Strategy', 'Roadmap'],
    howTitle: 'How it works',
    steps: [
      { title: 'We analyse', body: 'We review your current digital presence.' },
      { title: 'We prioritise', body: 'We define what is worth working on first.' },
      { title: 'We guide', body: 'We deliver a strategy and a clear roadmap.' },
    ],
    ecosystem:
      'Digital Check is the entry point. From there you can contract only what the roadmap calls for: website, visibility, bookings, communication, content, or measurement.',
    future: [],
    faqs: digitalCheckFaqsEn,
    ctaTitle: 'Before you keep investing, discover what your property really needs.',
    ctaLabel: 'Request my Digital Check',
  },
  'andario-web': {
    name: 'Andario Web',
    subtitle: 'A professional website',
    summary:
      'We create a clear digital presence designed to build trust and make contact and bookings easier.',
    cardCta: 'Explore Andario Web',
    metaTitle: 'Websites for hotels and hostels',
    metaDescription:
      'Andario Web creates professional websites for independent accommodations: present your offer better, build trust, and make contact or booking easier.',
    h1: 'Your property deserves a website made for it.',
    intro:
      'We create a professional digital presence that reflects your identity, shows what makes your property special, and makes the path to contact or booking clearer.',
    problemTitle: 'Your website is much more than a page.',
    problem:
      'It is where a guest learns about your property, compares options, decides, and takes the next step.',
    solutionTitle: 'A site built for your property',
    solution:
      'We design the digital experience around your identity, your spaces, and what guests need to know before writing or booking.',
    includedTitle: 'What it can include',
    included: [
      'Design tailored to your property',
      'Mobile and desktop experience',
      'Clear content and information',
      'WhatsApp and contact',
      'Booking integration',
      'Technical SEO foundations',
    ],
    howTitle: 'How it works',
    steps: [
      { title: 'We understand your property', body: 'Identity, offer, and what guests need to see.' },
      { title: 'We design and build', body: 'A clear, usable presence ready to grow.' },
      { title: 'We make the next step easy', body: 'Contact, WhatsApp, or booking — depending on scope.' },
    ],
    ecosystem:
      'Andario Web is the property’s digital home. Visibility, bookings, communication, and content can build on it when needed.',
    future: [],
    faqs: andarioWebFaqsEn,
    ctaTitle: 'Does your property deserve a stronger digital presence?',
    ctaLabel: 'I want to create my website',
  },
  'andario-visibility': {
    name: 'Andario Visibility',
    subtitle: 'SEO and digital visibility',
    summary:
      'We work on your property’s digital presence so it is easier to find and understand.',
    cardCta: 'Explore Visibility',
    metaTitle: 'SEO and visibility for hotels and hostels',
    metaDescription:
      'Andario Visibility improves how your property appears and is understood on Google and other digital spaces. Without promising rankings.',
    h1: 'Make your property easier to find.',
    intro:
      'We work on your property’s digital presence so it can appear more clearly, be understood better, and be found by people looking for a place to stay.',
    problemTitle: 'Being online is not the same as being visible.',
    problem:
      'Your property may have a website and social profiles, but if people cannot find you when they search, you are missing opportunities.',
    solutionTitle: 'Visibility with a solid foundation',
    solution:
      'We optimise structure, content, and local presence so your property is easier to find and understand.',
    includedTitle: 'What it can include',
    included: [
      'Optimisation for Google',
      'SEO and content',
      'Local presence',
      'Ongoing, data-guided improvement',
    ],
    howTitle: 'How it works',
    steps: [
      { title: 'We see how people find you', body: 'We review your current presence and opportunities.' },
      { title: 'We organise and improve', body: 'We prioritise structure, content, and local presence changes.' },
      { title: 'We follow with data', body: 'We measure progress without promising a ranking.' },
    ],
    ecosystem:
      'Visibility builds on the website and content. Growth later helps read whether improvements become real behaviour.',
    note: 'We do not promise a specific Google ranking. We build a solid, measurable digital foundation.',
    future: [],
    faqs: visibilityFaqsEn,
    ctaTitle: 'Want to improve your property’s visibility?',
    ctaLabel: 'I want to know this service',
  },
  'andario-booking-engine': {
    name: 'Andario Booking Engine',
    subtitle: 'Booking and operations center',
    summary:
      'The center where bookings from your channels arrive, and where you manage guests, operations, payments, reports and analytics.',
    cardCta: 'Explore Booking Engine',
    metaTitle: 'Booking engine for hotels and hostels',
    metaDescription:
      'Take bookings from your channels and manage guests, check-in, check-out, invoicing and reports from one center, for independent properties.',
    h1: 'The booking and operations center for your property.',
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
    note: 'Andario Booking Engine can sit alongside the channels you already use. It does not sync automatically with OTAs.',
    futureTitle: 'In evolution',
    future: [],
    faqs: [
      {
        q: 'What is Andario Booking Engine?',
        a: 'It is the booking and operations center for your property. Bookings arrive there, and from there you organize guests, payments, check-in, check-out, invoicing, reports and analytics.',
      },
      {
        q: 'What can a guest do?',
        a: 'Check availability and rates, choose a unit, enter their details, book, and pay when the configured payment option allows it. They then receive confirmation by email and a PDF document.',
      },
      {
        q: 'What can the property manage?',
        a: 'Bookings, guest information, statuses, check-in, check-out, invoicing, reports, analytics and the source of each booking.',
      },
      {
        q: 'From which channels can I send guests to the Booking Engine?',
        a: 'From your website, Facebook, Instagram, TikTok, WhatsApp, Google or other channels. You publish your content and share a link. The booking does not happen inside that network: the link takes the guest to your Booking Engine.',
      },
      {
        q: 'Can I keep using Booking.com and other channels?',
        a: 'Yes. Andario Booking Engine can sit alongside the channels you already use. It does not sync automatically with Booking.com, Airbnb or other OTAs.',
      },
      {
        q: 'What kinds of properties is it for?',
        a: 'Independent properties: hostels, small hotels, inns, tourist apartments, aparthotels, cabins, villas and rural stays.',
      },
      {
        q: 'How can I start?',
        a: 'Tell us how your property works today. We look at how you take bookings and show you how the system can fit.',
      },
    ],
    ctaTitle: 'Bring your property’s bookings and operations into one place.',
    ctaLabel: 'Request information',
  },
  'andario-connect': {
    name: 'Andario Connect',
    subtitle: 'Communication and automation',
    summary:
      'We organise your property’s communication so enquiries and booking opportunities follow a clearer path.',
    cardCta: 'Explore Connect',
    metaTitle: 'WhatsApp for hotels and hostels',
    metaDescription:
      'Andario Connect organises WhatsApp and property communication so you can reply better and support the booking process. Without replacing your team.',
    h1: 'Reply better. Connect better with your guests.',
    intro:
      'We organise your property’s communication so enquiries, conversations, and booking opportunities follow a clearer path.',
    problemTitle: 'Every enquiry can be an opportunity.',
    problem:
      'When communication is scattered or depends entirely on manual processes, it is easy to lose time and opportunities.',
    solutionTitle: 'Clearer communication',
    solution:
      'We organise channels, flows, and automation so the conversation accompanies the guest to the next step.',
    includedTitle: 'What it can include',
    included: [
      'Channel organisation',
      'Attention flows',
      'Automation',
      'Support through the booking process',
    ],
    howTitle: 'How it works',
    steps: [
      { title: 'We see how you reply today', body: 'We identify repeated questions and key moments.' },
      { title: 'We organise the channel', body: 'We define useful flows and automation.' },
      { title: 'We support the conversation', body: 'We leave a clearer path toward booking.' },
    ],
    ecosystem:
      'Connect relates to the website and booking engine. Automation helps; it does not replace the human team.',
    futureTitle: 'Planned evolution',
    future: ['AI assistant'],
    faqs: connectFaqsEn,
    ctaTitle: 'Want to improve how you care for your guests?',
    ctaLabel: 'I want to know this service',
  },
  'andario-content': {
    name: 'Andario Content',
    subtitle: 'Photography and content',
    summary:
      'We create content that shows your spaces, services, and the experience you want to convey.',
    cardCta: 'Explore Content',
    metaTitle: 'Photography and content for hotels and hostels',
    metaDescription:
      'Andario Content creates photography and content for independent accommodations: website, social, and a more coherent image. Without promising virality or bookings.',
    h1: 'Tell your property’s story better.',
    intro:
      'We create content that shows your spaces, services, and the experience you want to convey so your property connects better with future guests.',
    problemTitle: 'Before booking, guests want to picture themselves there.',
    problem:
      'Images and content influence how people perceive a property before they decide.',
    solutionTitle: 'Content that presents better',
    solution:
      'We coordinate photography, copy, and pieces for web and social with a coherent direction.',
    includedTitle: 'What it can include',
    included: [
      'Photography and visual direction',
      'Website content',
      'Social content',
      'Editorial planning',
    ],
    howTitle: 'How it works',
    steps: [
      { title: 'We define what to show', body: 'Spaces, services, and the experience you want to convey.' },
      { title: 'We create the material', body: 'Photography, copy, and pieces ready to use.' },
      { title: 'We keep it coherent', body: 'Web and social speak the same language.' },
    ],
    ecosystem:
      'Content feeds Andario Web, Visibility, and social. It does not promise virality or follower counts.',
    future: [],
    faqs: contentFaqsEn,
    ctaTitle: 'Want to show more of what your property has to offer?',
    ctaLabel: 'I want to know this service',
  },
  'andario-growth': {
    name: 'Andario Growth',
    subtitle: 'Analytics and optimisation',
    summary:
      'We analyse your digital channels to understand what works and what is worth improving.',
    cardCta: 'Explore Growth',
    metaTitle: 'Analytics for hotels and hostels',
    metaDescription:
      'Andario Growth turns your digital presence data into clear information and recommendations. Without promising revenue or Google rankings.',
    h1: 'Turn your property’s data into better decisions.',
    intro:
      'We analyse what happens across your digital channels to understand what works, where opportunities exist, and what is worth improving.',
    problemTitle: 'You cannot improve what you cannot understand.',
    problem:
      'Your property generates information every day. Growth helps turn it into useful knowledge for decisions.',
    solutionTitle: 'Measure, understand, improve',
    solution:
      'We organise measurement, analyse behaviour, and turn findings into clear recommendations.',
    includedTitle: 'What it can include',
    included: [
      'Digital channel measurement',
      'Behaviour analysis',
      'Opportunity tracking',
      'Improvement recommendations',
    ],
    howTitle: 'How it works',
    steps: [
      { title: 'We measure', body: 'We organise information from your digital channels.' },
      { title: 'We understand', body: 'We identify what works and where opportunities exist.' },
      { title: 'We improve', body: 'We turn findings into actionable recommendations.' },
    ],
    ecosystem:
      'Growth reads the property’s digital ecosystem. It does not promise revenue increases or Google rankings.',
    future: [],
    faqs: growthFaqsEn,
    ctaTitle: 'Want to understand what is working in your digital presence?',
    ctaLabel: 'I want to know this service',
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
        title: 'About Us',
        description:
          'Meet Andario Hospitality, a Colombian company helping small and independent accommodations use technology to grow and compete in the digital world.',
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
    products: 'Products and services',
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
    micro:
      'Tell us how your property works today and what you would like to improve. From there we can spot opportunities and talk about the right path forward.',
    whatsappTitle: 'If you prefer, we can start with a conversation.',
    whatsappCta: 'Talk on WhatsApp',
    orForm: 'Or tell us the essentials. It takes less than a minute.',
    progress: 'Step {current} of {total}',
    continueLabel: 'Continue',
    backLabel: 'Back',
    stepOne: 'Your property',
    stepTwo: 'What you would like to improve',
    unavailable: 'The form is not available right now. You can write through the channels published on this page.',
    requiredNote: '* Required fields',
    fields: {
      name: 'Name *',
      establishment: 'Property name *',
      location: 'Location or destination *',
      type: 'Accommodation type *',
      whatsapp: 'WhatsApp *',
      whatsappHint: 'This is the channel we’ll use to reply.',
      email: 'Email *',
      emailHint: '',
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
      {
        title: 'We understand',
        body: 'We learn about your situation, your priorities, and the opportunities that may be there.',
      },
      { title: 'We point the way', body: 'We help you spot opportunities and decide where to start.' },
    ],
    afterNote: 'First we understand your situation. Then we talk about solutions.',
    unsureTitle: 'Not sure what you need yet?',
    unsureBody: 'That’s all right. That is exactly where we start.',
    checkCta: 'Discover Digital Check',
    errors: {
      required: 'Please check this field.',
      emailRequired: 'Email is required.',
      emailInvalid: 'Enter a valid email address.',
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
