/** A single value proposition in the "Why Choose Us" section. */
export interface ValuePoint {
  icon: string;
  title: string;
  description: string;
}

/** A step in the delivery process (Discover → Design → Build → Deploy → Support). */
export interface ProcessStep {
  step: string;
  icon: string;
  title: string;
  description: string;
}

/** A headline company statistic. */
export interface Stat {
  value: string;
  label: string;
}

/** A core company value shown on the About page. */
export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}
