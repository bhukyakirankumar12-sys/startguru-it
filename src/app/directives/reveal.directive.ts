import { Directive, ElementRef, inject, OnDestroy, afterNextRender } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

      if (prefersReduced) {
        this.el.nativeElement.classList.add('reveal--visible');
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal--visible');
              this.observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
      );
      this.observer.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
