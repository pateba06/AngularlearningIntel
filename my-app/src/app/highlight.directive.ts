import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private e1:ElementRef) { 
  }
  @HostListener ('mouseenter') onmouseenter(){
    this.highlight('yellow');
  }
  @HostListener ('mouseleave') onmouseleave(){
    this.highlight(null);
  }
  highlight(color){
    this.e1.nativeElement.style.backgroundColor=color;
   }

}
