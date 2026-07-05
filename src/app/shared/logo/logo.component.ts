import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Archersoft Technologies brand lockup (single transparent artwork).
 *
 *  - `variant="dark"`  → the navy/blue logo as-is, for LIGHT surfaces.
 *  - `variant="light"` → the same logo rendered solid white via a CSS filter,
 *    for DARK surfaces (e.g. over the video hero). Using one transparent asset
 *    keeps the mark crisp and guarantees no background in either mode.
 */
@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img
      class="logo__img"
      [class.logo__img--white]="variant() === 'light'"
      src="images/ast-logo-dark.png"
      [style.height.px]="height()"
      width="1530"
      height="359"
      [attr.alt]="alt()"
      decoding="async"
      [attr.fetchpriority]="priority() ? 'high' : null"
    />
  `,
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  /** 'dark' = navy logo (light surfaces), 'light' = white logo (dark surfaces). */
  readonly variant = input<'dark' | 'light'>('dark');
  /** Rendered height in pixels (width scales to keep aspect ratio). */
  readonly height = input<number>(40);
  /** Accessible alt text. */
  readonly alt = input<string>('Archersoft Technologies');
  /** Set true for the above-the-fold header logo (LCP hint). */
  readonly priority = input<boolean>(false);
}
