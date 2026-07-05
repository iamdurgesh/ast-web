import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  PLATFORM_ID,
  inject,
  input,
  signal
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

interface Cta {
  label: string;
  link: string;
}

interface VideoSlide {
  src: string;
  poster: string;
}

/**
 * Full-bleed hero video banner. Crossfades between background videos
 * (a lightweight "carousel"), with the headline, subheadline and CTAs overlaid
 * on a dark gradient for legibility. Marked as a dark zone so the fixed header
 * can switch to its light (white) logo/theme while this banner is behind it.
 */
@Component({
  selector: 'app-hero-video',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent],
  templateUrl: './hero-video.component.html',
  styleUrl: './hero-video.component.scss'
})
export class HeroVideoComponent implements OnInit, AfterViewInit {
  readonly eyebrow = input<string>('UK-based digital technology partner');
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly primaryCta = input<Cta>({ label: 'Book a Free Consultation', link: '/contact' });
  readonly secondaryCta = input<Cta>({ label: 'Explore Services', link: '/services' });
  readonly highlights = input<string[]>([]);

  readonly slides = input<VideoSlide[]>([
    { src: 'images/bg-03.mp4', poster: 'images/bg-03-poster.jpg' },
    { src: 'images/bg-04.mp4', poster: 'images/bg-04-poster.jpg' },
    { src: 'images/bg-02.mp4', poster: 'images/bg-02-poster.jpg' }
  ]);

  /** Index of the currently visible video. */
  protected readonly active = signal(0);

  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId) || this.slides().length < 2) {
      return;
    }
    // Crossfade between the videos on a gentle interval.
    const id = setInterval(() => {
      this.active.update((i) => (i + 1) % this.slides().length);
    }, 7000);
    this.destroyRef.onDestroy(() => clearInterval(id));
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    // Chrome/Safari don't reliably honour the `autoplay` attribute on videos
    // that Angular inserts dynamically. Setting the `muted` property and
    // calling play() explicitly guarantees muted autoplay across browsers.
    const videos = this.host.nativeElement.querySelectorAll<HTMLVideoElement>('video');
    videos.forEach((video) => {
      video.muted = true;
      video.play().catch(() => {
        /* Autoplay blocked (rare when muted) — the poster frame remains. */
      });
    });
  }
}
