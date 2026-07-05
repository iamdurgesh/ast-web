import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * A lightweight, dependency-free inline SVG icon set.
 * Icons inherit `currentColor`, so colour them with normal text/Tailwind
 * utilities. Declarative by design — the template selects the icon with
 * Angular control-flow (`@switch`) so there is no runtime string parsing
 * or sanitisation needed.
 *
 * Usage: <app-icon name="cloud" [size]="24" />
 */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="strokeWidth()"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('code') {
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        }
        @case ('spark') {
          <path d="M12 3l1.7 4.6L18 9l-4.3 1.4L12 15l-1.7-4.6L6 9l4.3-1.4z" />
          <path d="M18.5 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
        }
        @case ('cloud') {
          <path d="M17.5 19H7a4 4 0 0 1-.8-7.92A6 6 0 0 1 18 9.5a4.5 4.5 0 0 1-.5 9.5z" />
        }
        @case ('shield') {
          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
          <path d="m8.5 12 2.5 2.5 4.5-5" />
        }
        @case ('chart') {
          <path d="M4 20h16" />
          <rect x="6" y="12" width="2.6" height="5" rx="0.5" />
          <rect x="10.7" y="8" width="2.6" height="9" rx="0.5" />
          <rect x="15.4" y="5" width="2.6" height="12" rx="0.5" />
        }
        @case ('compass') {
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5z" />
        }
        @case ('check-badge') {
          <circle cx="12" cy="12" r="9" />
          <path d="m8.5 12 2.4 2.4L15.5 9.5" />
        }
        @case ('rocket') {
          <path d="M9 15l-3-3c1-5 5-9 12-9 0 7-4 11-9 12z" />
          <path d="M5 15c-1 1-1.4 3.8-1.4 3.8s2.8-.4 3.8-1.4" />
          <circle cx="14.5" cy="9.5" r="1.4" />
        }
        @case ('cart') {
          <circle cx="9" cy="20" r="1.3" />
          <circle cx="17" cy="20" r="1.3" />
          <path d="M3 4h2l2.2 11.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L20 8H6" />
        }
        @case ('heartbeat') {
          <path d="M22 12h-5l-2 5-4-10-2 5H2" />
        }
        @case ('bank') {
          <path d="M3 10 12 4l9 6" />
          <path d="M5 10v8" />
          <path d="M9 10v8" />
          <path d="M15 10v8" />
          <path d="M19 10v8" />
          <path d="M3 20h18" />
        }
        @case ('graduation') {
          <path d="M12 4 2 9l10 5 10-5z" />
          <path d="M6 11v4.5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5V11" />
          <path d="M22 9v5" />
        }
        @case ('truck') {
          <rect x="2.5" y="6" width="11" height="9" rx="1" />
          <path d="M13.5 9h4l3 3v3h-7z" />
          <circle cx="7" cy="18" r="1.6" />
          <circle cx="17" cy="18" r="1.6" />
        }
        @case ('target') {
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.6" />
        }
        @case ('users') {
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
          <path d="M16 5.2a3 3 0 0 1 0 5.6" />
          <path d="M17.5 14.4A5.5 5.5 0 0 1 20.5 19.5" />
        }
        @case ('layers') {
          <path d="m12 3 9 5-9 5-9-5z" />
          <path d="m3 13 9 5 9-5" />
        }
        @case ('handshake') {
          <path d="M12 8.5 9.7 6.2a2.3 2.3 0 0 0-3.3 0L3 9.6v3.4l3.5 3.5" />
          <path d="m12 8.5 2.3-2.3a2.3 2.3 0 0 1 3.3 0L21 9.6v3.4l-4.5 4.5-2-2" />
          <path d="m8.5 13.5 2 2" />
        }
        @case ('bolt') {
          <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
        }
        @case ('pen') {
          <path d="M4 20h4L19 9a2 2 0 0 0-3-3L5 17z" />
          <path d="m14 7 3 3" />
        }
        @case ('lifebuoy') {
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="m5.4 5.4 3.6 3.6" />
          <path d="m15 15 3.6 3.6" />
          <path d="m18.6 5.4-3.6 3.6" />
          <path d="m9 15-3.6 3.6" />
        }
        @case ('arrow-right') {
          <path d="M4 12h15" />
          <path d="m13 6 6 6-6 6" />
        }
        @case ('arrow-up-right') {
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        }
        @case ('check') {
          <path d="m5 12 4.5 4.5L19 7" />
        }
        @case ('menu') {
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        }
        @case ('close') {
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        }
        @case ('chevron-down') {
          <path d="m6 9 6 6 6-6" />
        }
        @case ('phone') {
          <path
            d="M6.5 3H4a1 1 0 0 0-1 1c0 9.4 8.6 18 18 18a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-.8-1l-3.3-.7a1 1 0 0 0-1 .4l-.9 1.2a13.5 13.5 0 0 1-6.4-6.4l1.2-.9a1 1 0 0 0 .4-1l-.7-3.3a1 1 0 0 0-1-.8z"
          />
        }
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m4 7.5 8 5.5 8-5.5" />
        }
        @case ('map-pin') {
          <path d="M12 21s-6-5.2-6-10a6 6 0 0 1 12 0c0 4.8-6 10-6 10z" />
          <circle cx="12" cy="11" r="2.2" />
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.2 2" />
        }
        @case ('linkedin') {
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="7.3" cy="8" r="1" />
          <path d="M7.3 11v6" />
          <path d="M11 17v-3.4a2.4 2.4 0 0 1 4.8 0V17" />
          <path d="M11 11v6" />
        }
        @case ('x') {
          <path d="M5 4h3l11 16h-3z" />
          <path d="M5 20 10.5 13.5" />
          <path d="M13.5 10.5 19 4" />
        }
        @case ('github') {
          <path
            d="M9 19c-4 1.4-4-2.4-6-3m12 5v-3.6c0-1 .1-1.4-.5-2 2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.3 2.8 5.3 3.1 5.3 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.7 2.8 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
          />
        }
        @case ('quote') {
          <path d="M7 7C4.8 8.2 4 10.3 4 13v4h6v-6H6.5C6.5 9.4 7.2 8.4 8.5 7.6z" />
          <path d="M17 7c-2.2 1.2-3 3.3-3 6v4h6v-6h-3.5c0-1.6.7-2.6 2-3.4z" />
        }
        @case ('star') {
          <path
            d="m12 3 2.6 5.6 6.1.7-4.5 4.1 1.2 6L12 16.9 6.6 19.5l1.2-6-4.5-4.1 6.1-.7z"
          />
        }
        @case ('sitemap') {
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <rect x="3" y="17" width="6" height="4" rx="1" />
          <rect x="15" y="17" width="6" height="4" rx="1" />
          <path d="M12 7v4" />
          <path d="M6 17v-3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3" />
        }
        @default {
          <circle cx="12" cy="12" r="9" />
        }
      }
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        line-height: 0;
      }
    `
  ]
})
export class IconComponent {
  /** Icon key (see the @switch cases above). */
  readonly name = input.required<string>();
  /** Pixel size (width & height). */
  readonly size = input<number>(24);
  /** Stroke width. */
  readonly strokeWidth = input<number>(1.7);
}
