/**
 * A navigation link. `children` turns the link into a dropdown (used for
 * the Services menu). `icon` is optional and used to decorate dropdown items.
 */
export interface NavLink {
  label: string;
  /** Router path. Omit for pure parent/toggle links. */
  path?: string;
  /** Optional in-page fragment to scroll to */
  fragment?: string;
  /** Optional icon key for dropdown items */
  icon?: string;
  /** Optional supporting text for dropdown items */
  description?: string;
  /** Nested links (renders as a dropdown menu) */
  children?: NavLink[];
}
