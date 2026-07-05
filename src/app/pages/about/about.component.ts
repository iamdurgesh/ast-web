import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SeoService } from '../../core/services/seo.service';
import { COMPANY, CORE_VALUES, STATS, UK_REASONS } from '../../data/company.data';

import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { ContactCtaComponent } from '../../shared/contact-cta/contact-cta.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PageHeaderComponent,
    SectionHeadingComponent,
    ContactCtaComponent,
    IconComponent,
    RevealDirective
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  protected readonly company = COMPANY;
  protected readonly coreValues = CORE_VALUES;
  protected readonly stats = STATS;
  protected readonly ukReasons = UK_REASONS;

  protected readonly pillars = [
    {
      icon: 'target',
      title: 'Our mission',
      text: 'To help UK businesses grow through intelligent, dependable software — delivered by people who genuinely care about the outcome.'
    },
    {
      icon: 'compass',
      title: 'Our vision',
      text: 'A world where organisations of every size can access world-class engineering and use technology as a true competitive advantage.'
    },
    {
      icon: 'spark',
      title: 'Our approach',
      text: 'Pragmatic, transparent and outcome-led. We combine modern engineering with clear communication and a long-term partnership mindset.'
    }
  ];

  constructor() {
    inject(SeoService).update({
      title: 'About Us',
      description:
        'Learn about Archersoft Technologies — a UK-based digital technology partner. Discover our mission, vision, values and why UK businesses choose us.',
      path: '/about'
    });
  }
}
