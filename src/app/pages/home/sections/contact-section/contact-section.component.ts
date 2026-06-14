import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../../../directives/reveal.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    workEmail: ['', [Validators.required, Validators.email]],
    company: [''],
    phone: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected readonly sent = signal(false);

  protected onSubmit(): void {
    this.sent.set(false);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sent.set(true);
    this.form.reset();
  }
}
