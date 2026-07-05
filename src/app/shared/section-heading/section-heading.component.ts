import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Reusable section heading: an optional eyebrow label, a title and an
 * optional supporting paragraph. Alignment and colour tone are configurable
 * so the same component works on light and dark sections.
 */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="heading"
      [class.heading--center]="align() === 'center'"
      [class.heading--light]="tone() === 'light'"
    >
      @if (eyebrow()) {
        <span class="eyebrow heading__eyebrow">{{ eyebrow() }}</span>
      }
      <h2 class="heading__title" [style.font-size]="titleSize()">{{ title() }}</h2>
      @if (subtitle()) {
        <p class="heading__subtitle">{{ subtitle() }}</p>
      }
    </div>
  `,
  styleUrl: './section-heading.component.scss'
})
export class SectionHeadingComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly align = input<'left' | 'center'>('left');
  readonly tone = input<'dark' | 'light'>('dark');
  /** Optional explicit CSS font-size override for the title. */
  readonly titleSize = input<string>('');
}
