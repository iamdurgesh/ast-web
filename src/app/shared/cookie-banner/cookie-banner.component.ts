import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CookieConsentService } from '../../core/services/cookie-consent.service';

/**
 * GDPR-aware cookie consent banner. Shown until the visitor makes a choice;
 * their preference is remembered via CookieConsentService. Non-essential
 * cookies must not load until consent is 'accepted'.
 */
@Component({
  selector: 'app-cookie-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss'
})
export class CookieBannerComponent {
  protected readonly consent = inject(CookieConsentService);
}
