import { Directive, ElementRef,Input } from '@angular/core';


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
    setTimeout(()=>{
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 500)
  }
}
