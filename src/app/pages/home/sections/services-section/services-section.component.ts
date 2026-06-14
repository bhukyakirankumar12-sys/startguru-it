import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SERVICES } from '../../../../data/site-content';
import { RevealDirective } from '../../../../directives/reveal.directive';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  protected readonly services = SERVICES;
}
