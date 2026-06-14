import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VALUE_PROPS } from '../../../../data/site-content';
import { RevealDirective } from '../../../../directives/reveal.directive';

@Component({
  selector: 'app-why-us-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './why-us-section.component.html',
  styleUrl: './why-us-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyUsSectionComponent {
  protected readonly values = VALUE_PROPS;
}
