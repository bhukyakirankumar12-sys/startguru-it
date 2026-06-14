import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CLIENT_LOGOS, HERO_FLOATING } from '../../../../data/site-content';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  protected readonly logos = CLIENT_LOGOS;
  protected readonly floating = HERO_FLOATING;
}
