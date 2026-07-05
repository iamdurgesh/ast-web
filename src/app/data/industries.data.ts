import { Industry } from '../core/models/industry.model';

/**
 * Industries served by Archersoft Technologies.
 * Single source of truth for the Industries page and homepage section.
 */
export const INDUSTRIES: Industry[] = [
  {
    slug: 'startups',
    name: 'Startups & Scale-ups',
    icon: 'rocket',
    summary:
      'Ship a credible MVP quickly, then scale the architecture as traction and funding grow.',
    highlights: [
      'Rapid MVP and prototype development',
      'Scalable, investor-ready architecture',
      'Fractional technical leadership'
    ]
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    icon: 'cart',
    summary:
      'High-performing storefronts, integrations and analytics that turn visitors into loyal customers.',
    highlights: [
      'Fast, conversion-focused storefronts',
      'Inventory, payment and CRM integrations',
      'Personalisation and customer analytics'
    ]
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: 'heartbeat',
    summary:
      'Secure, compliant digital tools that streamline care pathways and protect sensitive data.',
    highlights: [
      'Privacy-first, compliant systems',
      'Patient portals and scheduling platforms',
      'Secure data handling and interoperability'
    ]
  },
  {
    slug: 'finance',
    name: 'Finance & Fintech',
    icon: 'bank',
    summary:
      'Robust, secure platforms and automation for regulated financial services and fintech products.',
    highlights: [
      'Security- and compliance-led delivery',
      'Payment and transaction platforms',
      'Fraud detection and reporting automation'
    ]
  },
  {
    slug: 'education',
    name: 'Education',
    icon: 'graduation',
    summary:
      'Engaging learning platforms and administrative tools that support students and staff alike.',
    highlights: [
      'Learning management and e-learning platforms',
      'Enrolment and administration systems',
      'Accessible, inclusive user experiences'
    ]
  },
  {
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: 'truck',
    summary:
      'Real-time visibility, route optimisation and automation across complex supply chains.',
    highlights: [
      'Fleet and shipment tracking dashboards',
      'Route and warehouse optimisation',
      'Systems integration across the supply chain'
    ]
  }
];

/** Quick lookup helper. */
export function findIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
