import { NavLink } from '../core/models/nav.model';
import { SERVICES } from './services.data';

/**
 * Primary navigation. The Services entry is generated from the SERVICES
 * catalogue so the menu always stays in sync with the data.
 */
export const PRIMARY_NAV: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: SERVICES.map((s) => ({
      label: s.navLabel,
      path: `/services`,
      fragment: s.slug,
      icon: s.icon,
      description: s.summary
    }))
  },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' }
];

/** Footer "Company" links. */
export const FOOTER_COMPANY: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' }
];

/** Footer "Legal" links. */
export const FOOTER_LEGAL: NavLink[] = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Cookie Policy', path: '/cookie-policy' },
  { label: 'Sitemap', path: '/sitemap' }
];
