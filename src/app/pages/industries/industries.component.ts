import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../core/services/seo.service';
import { INDUSTRIES } from '../../data/industries.data';

import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { IndustryCardComponent } from '../../shared/industry-card/industry-card.component';
import { ContactCtaComponent } from '../../shared/contact-cta/contact-cta.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-industries',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    PageHeaderComponent,
    SectionHeadingComponent,
    IndustryCardComponent,
    ContactCtaComponent,
    RevealDirective
  ],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent {
  protected readonly industries = INDUSTRIES;

  constructor() {
    inject(SeoService).update({
      title: 'Industries',
      description:
        'Archersoft Technologies delivers software and technology solutions across startups, retail & e-commerce, healthcare, finance, education and logistics.',
      path: '/industries'
    });
  }
}
