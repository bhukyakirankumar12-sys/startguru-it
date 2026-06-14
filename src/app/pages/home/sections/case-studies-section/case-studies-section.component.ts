import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CASE_STUDIES } from '../../../../data/site-content';
import { RevealDirective } from '../../../../directives/reveal.directive';

@Component({
  selector: 'app-case-studies-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './case-studies-section.component.html',
  styleUrl: './case-studies-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudiesSectionComponent {
  protected readonly cases = CASE_STUDIES;
}
