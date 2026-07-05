import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../core/services/seo.service';
import { COMPANY } from '../../data/company.data';
import { SERVICES } from '../../data/services.data';

import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    PageHeaderComponent,
    IconComponent,
    RevealDirective
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly company = COMPANY;
  protected readonly services = SERVICES;

  /** True after a successful client-side submission. */
  protected readonly submitted = signal(false);
  /** True when the user tried to submit an invalid form. */
  protected readonly showErrors = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    company: [''],
    service: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    consent: [false, [Validators.requiredTrue]]
  });

  /** Helper for the template: should this control show an error? */
  invalid(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || this.showErrors());
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.showErrors.set(true);
      this.form.markAllAsTouched();
      return;
    }

    // Static site: no backend yet. In production, wire this to an email
    // service, Formspree, or a serverless function / Netlify form handler.
    // eslint-disable-next-line no-console
    console.info('Contact enquiry submitted:', this.form.getRawValue());
    this.submitted.set(true);
    this.form.reset();
    this.showErrors.set(false);
  }

  resetForm(): void {
    this.submitted.set(false);
  }

  constructor() {
    inject(SeoService).update({
      title: 'Contact Us',
      description:
        'Get in touch with Archersoft Technologies. Book a free consultation to discuss your project — we usually respond within one working day.',
      path: '/contact'
    });
  }
}
