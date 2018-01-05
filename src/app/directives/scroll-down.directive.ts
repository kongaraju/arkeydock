import { Directive, ElementRef,Input } from '@angular/core';
import { setTimeout } from 'timers';

@Directive({
  selector: '[scrollDown]'
})
export class ScrollDownDirective {
  @Input() scrollDown: string;
  constructor(private el:ElementRef) { 
  }
  ngOnChanges(changes) {
    this.scrollDownElem();
  }
  private scrollDownElem(){
    let objDiv = this.el.nativeElement;
    setTimeout(function(){
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 500)
  }
}
