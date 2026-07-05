import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../core/services/seo.service';
import { SERVICES } from '../../data/services.data';
import { INDUSTRIES } from '../../data/industries.data';
import {
  COMPANY,
  PROCESS_STEPS,
  STATS,
  WHY_CHOOSE_US
} from '../../data/company.data';

import { HeroVideoComponent } from '../../shared/hero-video/hero-video.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';
import { IndustryCardComponent } from '../../shared/industry-card/industry-card.component';
import { ContactCtaComponent } from '../../shared/contact-cta/contact-cta.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

/**
 * Homepage. Assembles the reusable building blocks (hero, service/industry
 * cards, process, CTA) and drives all repeated content from the shared data
 * arrays so nothing is hard-coded twice.
 */
@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    HeroVideoComponent,
    SectionHeadingComponent,
    ServiceCardComponent,
    IndustryCardComponent,
    ContactCtaComponent,
    IconComponent,
    RevealDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly company = COMPANY;
  protected readonly services = SERVICES;
  protected readonly industries = INDUSTRIES;
  protected readonly whyChooseUs = WHY_CHOOSE_US;
  protected readonly processSteps = PROCESS_STEPS;
  protected readonly stats = STATS;

  protected readonly heroTitle = 'Building Intelligent Software for Modern Businesses';
  protected readonly heroSubtitle =
    'Archersoft Technologies is a UK-based digital technology partner specialising in web applications, AI automation, cloud solutions, cybersecurity, and data-driven business systems.';
  protected readonly heroHighlights = [
    'UK-based expert team',
    'Security & GDPR aware',
    'Outcome-focused delivery'
  ];

  protected readonly introPoints = [
    'A single partner across development, AI, cloud, security and data.',
    'Senior engineers who care about clean, maintainable software.',
    'Clear communication and honest advice at every step.'
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Intelligent Software for Modern Businesses',
      description:
        'Archersoft Technologies is a UK-based digital technology partner for web applications, AI automation, cloud, cybersecurity, data analytics and IT consulting. Book a free consultation.',
      path: '/'
    });
  }
}
