import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '../../core/models/service.model';
import { IconComponent } from '../icon/icon.component';

/**
 * A single, self-contained service card used on the homepage services
 * overview grid. Presentational only — data comes in via the `service`
 * input, keeping it fully reusable.
 */
@Component({
  selector: 'app-service-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent],
  template: `
    <article class="card">
      <span class="card__icon" aria-hidden="true">
        <app-icon [name]="service().icon" [size]="26" />
      </span>
      <h3 class="card__title">{{ service().title }}</h3>
      <p class="card__summary">{{ service().summary }}</p>
      <a
        class="card__link"
        routerLink="/services"
        [fragment]="service().slug"
        [attr.aria-label]="'Learn more about ' + service().title"
      >
        Learn more
        <app-icon name="arrow-right" [size]="18" />
      </a>
    </article>
  `,
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  readonly service = input.required<Service>();
}
