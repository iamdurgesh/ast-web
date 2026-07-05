/**
 * A single service offering provided by Archersoft Technologies.
 * Used to drive the Services page, homepage service cards and the
 * Services dropdown in the primary navigation.
 */
export interface Service {
  /** URL-friendly identifier, e.g. 'web-application-development' */
  slug: string;
  /** Full display title */
  title: string;
  /** Compact label used in navigation menus */
  navLabel: string;
  /** Key used to look up the SVG icon in AppIcon */
  icon: string;
  /** One-line summary shown on cards */
  summary: string;
  /** Longer description shown on the Services page */
  description: string;
  /** Concrete business benefits */
  benefits: string[];
  /** Example use cases / applications */
  useCases: string[];
}
