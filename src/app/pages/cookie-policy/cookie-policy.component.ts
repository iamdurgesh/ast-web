import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../core/services/seo.service';
import { COMPANY } from '../../data/company.data';
import { CookieConsentService } from '../../core/services/cookie-consent.service';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

@Component({
  selector: 'app-cookie-policy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeaderComponent],
  templateUrl: './cookie-policy.component.html'
})
export class CookiePolicyComponent {
  private readonly consent = inject(CookieConsentService);

  protected readonly company = COMPANY;
  protected readonly lastUpdated = '1 July 2026';

  openCookieSettings(): void {
    this.consent.reopen();
  }

  constructor() {
    inject(SeoService).update({
      title: 'Cookie Policy',
      description:
        'Learn how Archersoft Technologies uses cookies, which cookies are essential, and how to manage your cookie preferences.',
      path: '/cookie-policy'
    });
  }
}
