import { Directive , ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cmpReactive]'
})
export class ReactiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
