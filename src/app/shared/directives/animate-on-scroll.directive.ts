import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[n26AnimateOnScroll]'
})
export class AnimateOnScrollDirective {
  @Input() addClass: string;
  @Input() breakpoint: number;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  private onScroll(event: Event): void {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= this.breakpoint) {
      this.renderer.addClass(this.elementRef.nativeElement, this.addClass);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, this.addClass);
    }
  }
}
