import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[legendizerScheme]'
})
export class SchemeDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
