import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector:'[focusIn]'
})

export class FocusDirective{
  constructor(private el: ElementRef){}
    ngAfterViewInit(){
      this.el.nativeElement.focus()
    }
}