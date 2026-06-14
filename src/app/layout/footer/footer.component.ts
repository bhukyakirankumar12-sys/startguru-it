import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FOOTER_COLUMNS, SOCIAL_LINKS } from '../../data/site-content';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly columns = FOOTER_COLUMNS;
  protected readonly social = SOCIAL_LINKS;
  protected readonly year = new Date().getFullYear();
}
