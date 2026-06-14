import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../../../directives/reveal.directive';

@Component({
  selector: 'app-careers-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './careers-section.component.html',
  styleUrl: './careers-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareersSectionComponent {}
