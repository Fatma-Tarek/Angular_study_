import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;
    constructor(private authService: AuthService,private router: Router){}

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
                this.isLoading = false;
            }
        )
        
        loginForm.reset();
    }

}