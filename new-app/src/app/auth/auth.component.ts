import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy{
    isLoginMode = true;
    isLoading = false;
    error: string = null;
    @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective
    private closeSub: Subscription;
    constructor(private authService: AuthService,
                private router: Router,
                private componentFactoryResolver: ComponentFactoryResolver){}

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(loginForm: NgForm){
        console.log(loginForm.value);
        //More security 
        if(!loginForm.valid){
            return;
        }
        const email = loginForm.value.email;
        const password = loginForm.value.email;
        let authObs: Observable<AuthResponseData>

        this.isLoading = true;
        if(this.isLoginMode){ ///If login is true switch between logic 
            // ...
            /*this.isLoading= false;
            this.authService.login(email, password).subscribe( resData =>{
                    console.log(resData);
                    this.isLoading= false;
                }, errorMessage => {
                    console.log(errorMessage);
                    this.error = errorMessage;
                    this.isLoading = false;
                }
            )*/
            authObs = this.authService.login(email, password);
        }else{
            /*this.authService.signup(email, password).subscribe( responseData => {
                console.log( 'data back ' +responseData);
                this.isLoading = false;
            }, errorMessage =>{
                console.log(errorMessage);
                this.error = errorMessage;
                this.isLoading = false;
            });*/
            authObs = this.authService.signup(email, password)
        }
   
        authObs.subscribe(
            resData => {
                console.log(resData);
                this.isLoading = false;
                this.router.navigate(['/recipes']);
            }, errorMessage => {
                this.error = errorMessage;
                this.showErrorAlert(errorMessage);
                this.isLoading = false;
            }
        )
        
        loginForm.reset();
    }

    onHandleError(){
        console.log('error deleted');
        this.error =null;
    }

    private showErrorAlert(errorMessage: string){
        //const alertCmp = new AlertComponent();
        const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();

        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
        
        componentRef.instance.message = errorMessage;
        this.closeSub = componentRef.instance.close.subscribe(()=>{
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    
    }

    



    ngOnDestroy(){
        if(this.closeSub)
        {this.closeSub.unsubscribe();}
    }
}