// import { Directive,
//          Input,
//          ViewContainerRef,
//          TemplateRef,
//          HostBinding,
//          HostListener
// } from "@angular/core";

// @Directive({
//     selector: '[appDropdown]'
// })
// export class DropdownDirective {
//     /*@Input() set appDropdown (condition: boolean){
//         if(condition){
//             this.vcRef.createEmbeddedView(this.templateRef);
//         }else{        }
//     }
//     */
//     constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef){}
//    // Host Binding allows us to bind properties of the element the directive placed on 
//    // want to bind property of that component of element, 
//    // class simply is an array of of all classes 
//    @HostBinding('class.open') isOpen = false;

//    @HostListener('click') toggleOpen() {
//        this.isOpen = !this.isOpen;
//    }
// }


import { Directive, HostListener, HostBinding ,  ElementRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs:'appDropdown'
 
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
 /*
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }*/

  //that a click on one dropdown closes any other one, btw.
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
