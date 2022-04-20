import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { 
    elem.nativeElement.style.backgroundColor = '#5d8aa8' 
  }


}
