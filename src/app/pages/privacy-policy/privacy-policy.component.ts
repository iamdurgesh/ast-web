import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../core/services/seo.service';
import { COMPANY } from '../../data/company.data';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

@Component({
  selector: 'app-privacy-policy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeaderComponent],
  templateUrl: './privacy-policy.component.html'
})
export class PrivacyPolicyComponent {
  protected readonly company = COMPANY;
  protected readonly lastUpdated = '1 July 2026';

  constructor() {
    inject(SeoService).update({
      title: 'Privacy Policy',
      description:
        'How Archersoft Technologies collects, uses and protects your personal data in line with UK GDPR and the Data Protection Act.',
      path: '/privacy-policy'
    });
  }
}
