import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../data/company.data';
import { SERVICES } from '../../data/services.data';
import { FOOTER_COMPANY, FOOTER_LEGAL } from '../../data/navigation.data';
import { CookieConsentService } from '../../core/services/cookie-consent.service';
import { IconComponent } from '../icon/icon.component';
import { LogoComponent } from '../logo/logo.component';

/**
 * Site footer: brand, quick links, services, contact details and the legal
 * links required for a GDPR-aware site (Privacy, Cookie Policy, Sitemap),
 * plus a control to re-open the cookie preferences.
 */
@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private readonly consent = inject(CookieConsentService);

  protected readonly company = COMPANY;
  protected readonly services = SERVICES;
  protected readonly companyLinks = FOOTER_COMPANY;
  protected readonly legalLinks = FOOTER_LEGAL;
  protected readonly year = new Date().getFullYear();

  openCookieSettings(): void {
    this.consent.reopen();
  }
}
