import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TESTIMONIALS } from '../../../../data/site-content';
import { RevealDirective } from '../../../../directives/reveal.directive';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsSectionComponent {
  protected readonly items = TESTIMONIALS;
  protected readonly index = signal(0);

  protected readonly active = computed(() => this.items[this.index()]);

  protected prev(): void {
    this.index.update((i) => (i === 0 ? this.items.length - 1 : i - 1));
  }

  protected next(): void {
    this.index.update((i) => (i === this.items.length - 1 ? 0 : i + 1));
  }

  protected goTo(i: number): void {
    this.index.set(i);
  }
}
