import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../core/services/seo.service';
import { SERVICES } from '../../data/services.data';

import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { ContactCtaComponent } from '../../shared/contact-cta/contact-cta.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    PageHeaderComponent,
    ContactCtaComponent,
    IconComponent,
    RevealDirective
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  protected readonly services = SERVICES;

  constructor() {
    inject(SeoService).update({
      title: 'Services',
      description:
        'Explore Archersoft Technologies services: web application development, AI & automation, cloud & DevOps, cyber security, data & analytics, IT consulting and software testing & QA.',
      path: '/services'
    });
  }
}
