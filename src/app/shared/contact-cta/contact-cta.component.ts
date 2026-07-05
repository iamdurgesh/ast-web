import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../directives/reveal.directive';

/**
 * Reusable final call-to-action band. Used at the foot of most pages to drive
 * the primary "Book a Free Consultation" conversion. Copy is input-driven.
 */
@Component({
  selector: 'app-contact-cta',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent, RevealDirective],
  templateUrl: './contact-cta.component.html',
  styleUrl: './contact-cta.component.scss'
})
export class ContactCtaComponent {
  readonly eyebrow = input<string>('Let’s build something great');
  readonly title = input<string>('Ready to start your next project?');
  readonly subtitle = input<string>(
    'Book a free, no-obligation consultation. We’ll discuss your goals and show you how Archersoft Technologies can help you move faster.'
  );
  readonly primaryLabel = input<string>('Book a Free Consultation');
  readonly primaryLink = input<string>('/contact');
  readonly secondaryLabel = input<string>('Explore Services');
  readonly secondaryLink = input<string>('/services');
}
