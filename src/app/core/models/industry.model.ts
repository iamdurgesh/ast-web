/**
 * An industry / sector that Archersoft Technologies serves.
 * Drives the Industries page and homepage industries section.
 */
export interface Industry {
  /** URL-friendly identifier, e.g. 'retail-ecommerce' */
  slug: string;
  /** Display name */
  name: string;
  /** Key used to look up the SVG icon in AppIcon */
  icon: string;
  /** One-line summary shown on cards */
  summary: string;
  /** How Archersoft helps this sector */
  highlights: string[];
}
