import { CoreValue, ProcessStep, Stat, ValuePoint } from '../core/models/misc.model';

/**
 * Core company information. Placeholder contact details are clearly
 * marked and intended to be replaced before go-live.
 */
export const COMPANY = {
  name: 'Archersoft Technologies',
  shortName: 'Archersoft',
  legalName: 'Archersoft Technologies Ltd',
  tagline: 'Building Intelligent Software for Modern Businesses',
  location: 'United Kingdom',
  addressLine: 'London, United Kingdom',
  email: 'contact@archersofttechnologies.co.uk',
  phone: '+44 (0)20 0000 0000',
  phoneHref: 'tel:+442000000000',
  hours: 'Mon–Fri, 9:00–17:30 GMT',
  foundedYear: 2019
};

/** Headline statistics shown on the homepage and About page. */
export const STATS: Stat[] = [
  { value: '50+', label: 'Projects delivered' },
  { value: '30+', label: 'Businesses supported' },
  { value: '7', label: 'Core service areas' },
  { value: '98%', label: 'Client satisfaction' }
];

/** "Why choose us" value points for the homepage. */
export const WHY_CHOOSE_US: ValuePoint[] = [
  {
    icon: 'target',
    title: 'Outcome-focused delivery',
    description:
      'We start with your business goals, not the technology. Every engagement is measured against outcomes that matter to you.'
  },
  {
    icon: 'users',
    title: 'UK-based expert team',
    description:
      'A senior, UK-based team that understands local markets, regulation and the standards British businesses expect.'
  },
  {
    icon: 'layers',
    title: 'Clean, scalable engineering',
    description:
      'We write maintainable, well-tested software built to grow — reducing technical debt and long-term cost of ownership.'
  },
  {
    icon: 'shield',
    title: 'Security & compliance first',
    description:
      'Security and data protection are designed in from the start, aligned with UK GDPR and recognised standards.'
  },
  {
    icon: 'handshake',
    title: 'True partnership',
    description:
      'Transparent communication, honest advice and a genuine long-term partnership — not a transactional supplier.'
  },
  {
    icon: 'bolt',
    title: 'Speed without shortcuts',
    description:
      'Proven delivery workflows help us move quickly while keeping quality, accessibility and performance high.'
  }
];

/** Delivery process steps: Discover → Design → Build → Deploy → Support. */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    icon: 'compass',
    title: 'Discover',
    description:
      'We get to know your goals, users and constraints, then define a clear scope and success measures.'
  },
  {
    step: '02',
    icon: 'pen',
    title: 'Design',
    description:
      'We shape the architecture and user experience, validating ideas early with prototypes and feedback.'
  },
  {
    step: '03',
    icon: 'code',
    title: 'Build',
    description:
      'We engineer in short, transparent iterations with continuous testing and regular working demos.'
  },
  {
    step: '04',
    icon: 'rocket',
    title: 'Deploy',
    description:
      'We release safely with automated pipelines, monitoring and a smooth path to production.'
  },
  {
    step: '05',
    icon: 'lifebuoy',
    title: 'Support',
    description:
      'We stay with you after launch — improving, optimising and evolving the product as you grow.'
  }
];

/** Core values shown on the About page. */
export const CORE_VALUES: CoreValue[] = [
  {
    icon: 'shield',
    title: 'Integrity',
    description:
      'We give honest advice and do what we say we will — even when it is not the easy option.'
  },
  {
    icon: 'spark',
    title: 'Craftsmanship',
    description:
      'We take pride in clean, thoughtful engineering and details that stand the test of time.'
  },
  {
    icon: 'users',
    title: 'Partnership',
    description:
      'We invest in relationships and treat your goals as our own throughout the journey.'
  },
  {
    icon: 'bolt',
    title: 'Momentum',
    description:
      'We keep things moving with pragmatic decisions and a bias towards delivering real value.'
  }
];

/** Reasons UK businesses choose Archersoft (About page). */
export const UK_REASONS: string[] = [
  'A UK-based team that understands local markets, language and expectations.',
  'Delivery aligned with UK GDPR and recognised security standards.',
  'Time-zone friendly collaboration and clear, responsive communication.',
  'Transparent pricing and honest advice with no hidden surprises.',
  'Long-term partnership focused on your growth, not one-off projects.'
];
