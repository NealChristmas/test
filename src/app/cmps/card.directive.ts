import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cmpCard]'
})
export class CardDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
