import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../../../directives/reveal.directive';

@Component({
  selector: 'app-insights-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './insights-section.component.html',
  styleUrl: './insights-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsightsSectionComponent {
  protected readonly items = [
    {
      id: 'i1',
      title: 'The 2026 Enterprise AI Control Plane',
      meta: 'Perspective • 6 min read',
      href: '#contact',
    },
    {
      id: 'i2',
      title: 'Designing Cloud Landing Zones for Regulated Workloads',
      meta: 'Architecture • 8 min read',
      href: '#contact',
    },
    {
      id: 'i3',
      title: 'From Copilot Hype to Production Governance',
      meta: 'Advisory • 5 min read',
      href: '#contact',
    },
  ];
}
