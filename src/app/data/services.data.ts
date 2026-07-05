import { Service } from '../core/models/service.model';

/**
 * The complete Archersoft Technologies service catalogue.
 * This single source of truth powers the Services page, the homepage
 * services overview, the navigation dropdown and the sitemap.
 */
export const SERVICES: Service[] = [
  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    navLabel: 'Web Application Development',
    icon: 'code',
    summary:
      'Fast, secure and scalable web applications built with modern frameworks and clean architecture.',
    description:
      'We design and engineer bespoke web platforms — from customer-facing portals to complex internal tools — with performance, maintainability and accessibility built in from day one. Our teams favour clean, well-tested code and future-proof architecture so your product can grow without technical debt holding it back.',
    benefits: [
      'Reduced time-to-market with proven delivery workflows',
      'Responsive, accessible interfaces that work on every device',
      'Maintainable codebases that lower long-term ownership costs',
      'Architecture that scales smoothly as your user base grows'
    ],
    useCases: [
      'Customer portals and self-service dashboards',
      'SaaS products and subscription platforms',
      'Booking, quoting and workflow automation tools',
      'Progressive web apps and internal business systems'
    ]
  },
  {
    slug: 'ai-automation-solutions',
    title: 'AI & Automation Solutions',
    navLabel: 'AI & Automation Solutions',
    icon: 'spark',
    summary:
      'Practical AI, machine learning and process automation that remove manual work and unlock insight.',
    description:
      'We help UK businesses put artificial intelligence to work where it genuinely moves the needle — automating repetitive processes, surfacing insight from data and enhancing customer experiences. Every engagement starts with a clear business outcome, so you invest in AI that pays back rather than science projects that stall.',
    benefits: [
      'Automate repetitive, error-prone manual processes',
      'Faster, data-informed decisions across the business',
      'Improved customer response times with intelligent assistants',
      'Measurable ROI tied to defined business outcomes'
    ],
    useCases: [
      'Document processing and intelligent data extraction',
      'Customer support chatbots and virtual assistants',
      'Predictive analytics and demand forecasting',
      'Workflow and back-office task automation'
    ]
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    navLabel: 'Cloud & DevOps',
    icon: 'cloud',
    summary:
      'Cloud migration, infrastructure-as-code and CI/CD pipelines that make releases fast and reliable.',
    description:
      'We modernise infrastructure and streamline delivery so your teams can ship confidently and often. From cloud migration and cost optimisation to automated pipelines and observability, we build resilient platforms on AWS, Azure and Google Cloud that scale with demand and stay secure by design.',
    benefits: [
      'Lower infrastructure costs through right-sizing and automation',
      'Reliable, repeatable deployments with automated pipelines',
      'Improved uptime and resilience with modern architecture',
      'Full visibility through monitoring, logging and alerting'
    ],
    useCases: [
      'Cloud migration and application modernisation',
      'CI/CD pipeline design and automation',
      'Infrastructure-as-code and environment provisioning',
      'Kubernetes, containerisation and platform engineering'
    ]
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security',
    navLabel: 'Cyber Security',
    icon: 'shield',
    summary:
      'Proactive security assessments, hardening and monitoring to protect your data and reputation.',
    description:
      'Security is designed into everything we build — and we also help you strengthen what you already run. Our specialists assess risk, harden systems and put monitoring in place so threats are caught early. We align with recognised standards and UK data protection expectations to keep you compliant and trusted.',
    benefits: [
      'Reduced risk of breaches, downtime and data loss',
      'Clear, prioritised remediation you can act on',
      'Stronger compliance posture and customer trust',
      'Continuous protection through monitoring and response'
    ],
    useCases: [
      'Security audits and vulnerability assessments',
      'Penetration testing and threat modelling',
      'Identity, access and secrets management',
      'Compliance readiness and secure architecture reviews'
    ]
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    navLabel: 'Data & Analytics',
    icon: 'chart',
    summary:
      'Turn scattered data into dashboards, insight and decisions your whole business can trust.',
    description:
      'We help you consolidate, model and visualise data so leaders can make confident decisions. From building reliable data pipelines to designing clear dashboards and self-service reporting, we turn raw information into a genuine competitive advantage — with governance and quality baked in.',
    benefits: [
      'A single, trusted source of truth for reporting',
      'Faster access to the metrics that drive decisions',
      'Reduced manual reporting and spreadsheet sprawl',
      'Better forecasting through clean, well-modelled data'
    ],
    useCases: [
      'Executive dashboards and KPI reporting',
      'Data warehouse and pipeline engineering',
      'Self-service business intelligence',
      'Customer, sales and operational analytics'
    ]
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    navLabel: 'IT Consulting',
    icon: 'compass',
    summary:
      'Independent technology strategy, architecture and roadmaps aligned to your business goals.',
    description:
      'When technology decisions carry real weight, our consultants bring clarity. We assess your current landscape, define pragmatic roadmaps and help you choose the right platforms, partners and priorities. The result is a technology strategy that supports growth rather than getting in its way.',
    benefits: [
      'Clear, prioritised technology roadmap',
      'Confident decisions backed by independent expertise',
      'Reduced risk on major technology investments',
      'Better alignment between IT spend and business goals'
    ],
    useCases: [
      'Technology strategy and digital roadmaps',
      'Architecture and platform selection reviews',
      'Legacy modernisation planning',
      'Fractional CTO and advisory engagements'
    ]
  },
  {
    slug: 'software-testing-qa',
    title: 'Software Testing & QA',
    navLabel: 'Software Testing & QA',
    icon: 'check-badge',
    summary:
      'Manual and automated testing that ships quality software with fewer defects and faster releases.',
    description:
      'We help teams release with confidence through pragmatic quality engineering. From test strategy and automation frameworks to performance and accessibility testing, we catch issues early — reducing the cost of defects and protecting the experience your customers expect.',
    benefits: [
      'Fewer production defects and costly rework',
      'Faster, more confident release cycles',
      'Automated regression coverage that scales with the product',
      'Consistent quality across web, mobile and API layers'
    ],
    useCases: [
      'Test automation framework design',
      'End-to-end, API and performance testing',
      'Accessibility and compliance testing',
      'QA strategy and continuous testing in CI/CD'
    ]
  }
];

/** Quick lookup helper used by resolvers and pages. */
export function findService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
