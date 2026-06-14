import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INDUSTRIES } from '../../../../data/site-content';
import { RevealDirective } from '../../../../directives/reveal.directive';

@Component({
  selector: 'app-industries-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './industries-section.component.html',
  styleUrl: './industries-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndustriesSectionComponent {
  protected readonly industries = INDUSTRIES;
}
