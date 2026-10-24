import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/** Fades/slides the host in the first time it enters the viewport. */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.--reveal-delay.ms]': 'revealDelay()',
  },
})
export class Reveal {
  readonly revealDelay = input(0);

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        el.classList.add('is-visible');
        return;
      }
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(el);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
