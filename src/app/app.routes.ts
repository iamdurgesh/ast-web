import { Routes } from '@angular/router';

/**
 * Application routes. Every page is a standalone component that is lazily
 * loaded, keeping the initial bundle small and each route independently
 * code-split for better performance.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Archersoft Technologies | Intelligent Software for Modern Businesses'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | Archersoft Technologies'
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services | Archersoft Technologies'
  },
  {
    path: 'industries',
    loadComponent: () =>
      import('./pages/industries/industries.component').then((m) => m.IndustriesComponent),
    title: 'Industries | Archersoft Technologies'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us | Archersoft Technologies'
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent
      ),
    title: 'Privacy Policy | Archersoft Technologies'
  },
  {
    path: 'cookie-policy',
    loadComponent: () =>
      import('./pages/cookie-policy/cookie-policy.component').then((m) => m.CookiePolicyComponent),
    title: 'Cookie Policy | Archersoft Technologies'
  },
  {
    path: 'sitemap',
    loadComponent: () =>
      import('./pages/sitemap/sitemap.component').then((m) => m.SitemapComponent),
    title: 'Sitemap | Archersoft Technologies'
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page Not Found | Archersoft Technologies'
  }
];
