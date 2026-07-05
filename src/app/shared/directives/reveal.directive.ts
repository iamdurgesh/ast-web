import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * `appReveal` — a small, declarative scroll-reveal directive.
 *
 * Applies a subtle fade-and-rise animation the first time the host element
 * scrolls into view, using IntersectionObserver. Falls back gracefully:
 * if the browser lacks IntersectionObserver, or the user prefers reduced
 * motion, the element is simply shown with no animation.
 *
 * Usage:
 *   <div appReveal>...</div>
 *   <div appReveal [revealDelay]="120">...</div>
 */
@Directive({
  selector: '[appReveal]'
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  /** Optional stagger delay in milliseconds. */
  readonly revealDelay = input<number>(0);

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      this.renderer.addClass(node, 'reveal--visible');
      return;
    }

    this.renderer.addClass(node, 'reveal');
    if (this.revealDelay()) {
      this.renderer.setStyle(node, 'transition-delay', `${this.revealDelay()}ms`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(node, 'reveal--visible');
            this.observer?.unobserve(node);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
