import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Industry } from '../../core/models/industry.model';
import { IconComponent } from '../icon/icon.component';

/**
 * A compact industry card. Presentational — data arrives via the `industry`
 * input so it can be reused on the homepage and the Industries page.
 */
@Component({
  selector: 'app-industry-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  template: `
    <article class="card">
      <span class="card__icon" aria-hidden="true">
        <app-icon [name]="industry().icon" [size]="24" />
      </span>
      <div class="card__body">
        <h3 class="card__title">{{ industry().name }}</h3>
        <p class="card__summary">{{ industry().summary }}</p>
        @if (showHighlights()) {
          <ul class="card__list">
            @for (point of industry().highlights; track point) {
              <li class="card__list-item">
                <app-icon name="check" [size]="16" />
                <span>{{ point }}</span>
              </li>
            }
          </ul>
        }
      </div>
    </article>
  `,
  styleUrl: './industry-card.component.scss'
})
export class IndustryCardComponent {
  readonly industry = input.required<Industry>();
  /** When true, renders the bullet list of highlights (Industries page). */
  readonly showHighlights = input<boolean>(false);
}
