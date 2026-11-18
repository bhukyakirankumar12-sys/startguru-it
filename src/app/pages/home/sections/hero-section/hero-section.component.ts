import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CLIENT_LOGOS,
  COMPANY_INFO,
  HERO_FLOATING,
  SERVICES,
} from '../../../../data/site-content';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  protected readonly company = COMPANY_INFO;
  protected readonly services = SERVICES;
  protected readonly logos = CLIENT_LOGOS;
  protected readonly floating = HERO_FLOATING;
}
