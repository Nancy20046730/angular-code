import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(private el: ElementRef) {
       this.el.nativeElement.style.backgroundColor = 'yellow by';
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
      }
      
      @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
      }
      @HostListener('onclick') onClick() {
        this.highlight('green');
      }
      private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
      }
}