import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../core/services/seo.service';
import { SERVICES } from '../../data/services.data';
import { INDUSTRIES } from '../../data/industries.data';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { IconComponent } from '../../shared/icon/icon.component';

interface SitemapLink {
  label: string;
  path: string;
  fragment?: string;
}

interface SitemapGroup {
  title: string;
  icon: string;
  links: SitemapLink[];
}

@Component({
  selector: 'app-sitemap',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeaderComponent, IconComponent],
  templateUrl: './sitemap.component.html',
  styleUrl: './sitemap.component.scss'
})
export class SitemapComponent {
  protected readonly groups: SitemapGroup[] = [
    {
      title: 'Main pages',
      icon: 'compass',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Industries', path: '/industries' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Services',
      icon: 'layers',
      links: SERVICES.map((s) => ({
        label: s.navLabel,
        path: '/services',
        fragment: s.slug
      }))
    },
    {
      title: 'Industries',
      icon: 'target',
      links: INDUSTRIES.map((i) => ({ label: i.name, path: '/industries' }))
    },
    {
      title: 'Legal',
      icon: 'shield',
      links: [
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Cookie Policy', path: '/cookie-policy' },
        { label: 'Sitemap', path: '/sitemap' }
      ]
    }
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Sitemap',
      description:
        'A complete map of the Archersoft Technologies website — quickly find every page, service and industry.',
      path: '/sitemap'
    });
  }
}
