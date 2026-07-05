import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ConsentStatus = 'accepted' | 'rejected' | 'unset';

const STORAGE_KEY = 'archersoft_cookie_consent';

/**
 * GDPR-aware cookie consent state. Persists the visitor's choice in
 * localStorage and exposes reactive signals so the banner and footer stay
 * in sync. No non-essential cookies/scripts should load until `accepted`.
 */
@Injectable({ providedIn: 'root' })
export class CookieConsentService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly _status = signal<ConsentStatus>(this.readInitial());

  /** Current consent status. */
  readonly status = this._status.asReadonly();
  /** Whether the banner should be shown (no decision made yet, or reopened). */
  readonly showBanner = signal<boolean>(this.readInitial() === 'unset');
  /** True once the visitor has actively accepted analytics/optional cookies. */
  readonly hasConsent = computed(() => this._status() === 'accepted');

  accept(): void {
    this.set('accepted');
  }

  reject(): void {
    this.set('rejected');
  }

  /** Reopen the banner so the visitor can change their preference. */
  reopen(): void {
    this.showBanner.set(true);
  }

  private set(value: ConsentStatus): void {
    this._status.set(value);
    this.showBanner.set(false);
    if (this.isBrowser) {
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch {
        /* storage unavailable — ignore */
      }
    }
  }

  private readInitial(): ConsentStatus {
    if (!this.isBrowser) {
      return 'unset';
    }
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'accepted' || saved === 'rejected' ? saved : 'unset';
    } catch {
      return 'unset';
    }
  }
}
