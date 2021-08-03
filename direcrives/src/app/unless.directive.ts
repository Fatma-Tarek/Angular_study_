import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
 //Make sure that property with the name of directive
  @Input() set appUnless(condition: boolean){
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
