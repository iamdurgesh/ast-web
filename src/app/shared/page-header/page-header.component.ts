import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Compact, consistent page-header banner for inner pages (About, Services,
 * Industries, Contact, legal). Dark themed to sit beneath the dark header.
 */
@Component({
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  /** Current page name for the breadcrumb (Home / {crumb}). */
  readonly crumb = input<string>('');
}
