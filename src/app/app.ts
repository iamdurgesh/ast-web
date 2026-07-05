import { ChangeDetectionStrategy, Component, PLATFORM_ID, inject } from '@angular/core';
import { ViewportScroller, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CookieBannerComponent } from './shared/cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CookieBannerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor() {
    const scroller = inject(ViewportScroller);
    const platformId = inject(PLATFORM_ID);

    if (isPlatformBrowser(platformId)) {
      // Offset in-page anchor scrolling so target sections land clearly below
      // the fixed header — and, on the Services page, below the sticky
      // sub-navigation too. Measured dynamically so it stays correct.
      scroller.setOffset(() => {
        const header = document.querySelector<HTMLElement>('.site-header');
        const subnav = document.querySelector<HTMLElement>('.service-nav');
        const headerHeight = header?.offsetHeight ?? 80;
        const subnavHeight = subnav?.offsetHeight ?? 0;
        return [0, headerHeight + subnavHeight + 12];
      });
    }
  }
}
