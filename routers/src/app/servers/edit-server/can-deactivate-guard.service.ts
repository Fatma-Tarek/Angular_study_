 import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, RouterState, RouterStateSnapshot } from "@angular/router";
 import { Observable } from "rxjs";

 export interface CanComponentDeactive {
     canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
 }

 export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactive> {
     canDeactivate(component: CanComponentDeactive,
                    currentRoute: ActivatedRouteSnapshot,
                    currentState: RouterStateSnapshot,
                    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
                        return component.canDeactivate();
         }
 }

// import { Observable } from "rxjs";
// import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


// export interface CanComponentDeactivate {
//   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }

// export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

//   canDeactivate(component: CanComponentDeactivate,
//                 currentRoute: ActivatedRouteSnapshot,
//                 currentState: RouterStateSnapshot,
//                 nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     return component.canDeactivate();
//   }
// }