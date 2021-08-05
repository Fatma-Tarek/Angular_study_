import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,
         CanActivate,
         CanActivateChild,
         Router,
         RouterStateSnapshot,
         UrlTree
 } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService:  AuthService, private router:Router){}
    
/******* 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<any> | Promise<any> {
        return this.authService.isAuthenticated()
            .then(
               /* (authenticated: boolean)=>{
                    if (authenticated){
                        return true;
                    }else{
                        this.router.navigate(['/']);
                    }
                } */
             //  ()=>{ return true}
          //  );
       // throw new Error("Method not implemented.");
 //   }

 canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
        .then(
          (authenticated: boolean) => {
            if (authenticated) {
              return true;
            } else {
              this.router.navigate(['/']);
            }
          }
        );
    }     
    

 //Protect Child
 /*canActivateChildroute(route: ActivatedRouteSnapshot,
                        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                return this.canActivate(route, state )  
                        }*/

    canActivateChild(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
             return this.canActivate(route, state);
           }

}