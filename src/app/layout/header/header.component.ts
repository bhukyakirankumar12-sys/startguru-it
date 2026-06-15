import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NAV_ITEMS } from '../../data/site-content';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly navItems = NAV_ITEMS;
  protected readonly menuOpen = signal(false);
  private readonly doc = inject(DOCUMENT);

  protected readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    const y = this.doc.defaultView?.scrollY ?? 0;
    this.scrolled.set(y > 8);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected navLink(item: (typeof NAV_ITEMS)[number]): string {
    if (item.fragment) {
      return item.fragment === 'top' ? '#top' : `#${item.fragment}`;
    }
    return item.href ?? '#';
  }
}
