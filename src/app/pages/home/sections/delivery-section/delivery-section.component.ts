import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DELIVERY_STEPS } from '../../../../data/site-content';
import { RevealDirective } from '../../../../directives/reveal.directive';

@Component({
  selector: 'app-delivery-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './delivery-section.component.html',
  styleUrl: './delivery-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliverySectionComponent {
  protected readonly steps = DELIVERY_STEPS;
}
