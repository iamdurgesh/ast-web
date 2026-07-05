import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  PLATFORM_ID,
  computed,
  inject,
  signal
} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { PRIMARY_NAV } from '../../data/navigation.data';
import { COMPANY } from '../../data/company.data';
import { IconComponent } from '../icon/icon.component';
import { LogoComponent } from '../logo/logo.component';

/**
 * Primary site header: fixed and theme-adaptive. While a dark section
 * (the video hero or a page header, marked `[data-header-dark]`) sits behind
 * it, the header is transparent with a white logo and light text. Once the
 * page scrolls past that dark section it becomes a solid white bar with the
 * navy logo. Navigation is data-driven from PRIMARY_NAV.
 */
@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, RouterLinkActive, IconComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly nav = PRIMARY_NAV;
  protected readonly company = COMPANY;

  /** Header gains a shadow once the page is scrolled. */
  protected readonly scrolled = signal(false);
  /** A dark section is currently behind the header. */
  protected readonly overDark = signal(true);
  /** Mobile menu open state. */
  protected readonly mobileOpen = signal(false);
  /** Which dropdown (by label) is currently open. */
  protected readonly openDropdown = signal<string | null>(null);

  /** Dark theme applies only when over a dark section and the menu is closed. */
  protected readonly darkTheme = computed(() => this.overDark() && !this.mobileOpen());

  constructor() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.mobileOpen.set(false);
        this.openDropdown.set(null);
        // Wait for the new page to render, then re-evaluate the theme.
        if (isPlatformBrowser(this.platformId)) {
          requestAnimationFrame(() => this.updateTheme());
        }
      });

    if (isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(() => this.updateTheme());
    }
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onScroll(): void {
    this.updateTheme();
  }

  private updateTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const y = window.scrollY;
    this.scrolled.set(y > 6);
    // Transparent (white logo) only while resting at the very top of a page
    // whose first section is dark. As soon as scrolling begins, the header
    // becomes the solid white bar for a smooth, consistent transition.
    const darkEl = document.querySelector('[data-header-dark]');
    this.overDark.set(!!darkEl && y <= 6);
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
    this.openDropdown.set(null);
  }

  toggleDropdown(label: string): void {
    this.openDropdown.update((cur) => (cur === label ? null : label));
  }

  openDropdownFor(label: string): void {
    this.openDropdown.set(label);
  }

  closeDropdown(): void {
    this.openDropdown.set(null);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.openDropdown.set(null);
    this.mobileOpen.set(false);
  }
}
