import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap} from "rxjs/operators";
import { BehaviorSubject, Subject, throwError } from 'rxjs'
import { User } from "./user.model";
import { Router } from "@angular/router";

export interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn:'root'})
export class AuthService {
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router){}

    signup(email: string, password: string){
        const api = 'AIzaSyDI0Gx-5Alvwnf0k8r59Ih1YWrFPZc4dcs';
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+api, 
        {
            email: email,
            password: password,
            returnSecureToken: true,
        })
        .pipe(
            catchError(
                /*errorRes =>{
                    let errorMessage = 'An unknown error occured!';
                    if(!errorRes.error || !errorRes.error.error){
                        return throwError(errorMessage);
                    }
                    switch (errorRes.error.error.message){
                        case 'EMAIL_EXISTS':
                            errorMessage  = 'This is email Already Exist';  
                    }
                    return throwError(errorMessage)
                }*/
                this.handleError
            ), tap( resData => {
                this.handleAuthentication(
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn
                )
            } ))
    }

    login(email: string, password: string){
        const api = 'AIzaSyDI0Gx-5Alvwnf0k8r59Ih1YWrFPZc4dcs';
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+api,{
            email: email,
            password: password,
            returnSecureToken: true,
        }).pipe(catchError(this.handleError),
        tap( resData => {
            this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
            )
        }
        ))
    }

    logout(){
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        //check if there active timer
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    autoLogout(expirationDuration: number){
        console.log(expirationDuration);
        //Manage Timer For auto Logout
        this.tokenExpirationTimer = setTimeout(()=>{
            this.logout();
        }, expirationDuration);
    }

    autoLogin(){
        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));

        if(!userData){
            return;
        }
        const loadedUser = new User(userData.email,
                                   userData.id,
                                   userData._token,
                                   new Date(userData._tokenExpirationDate));

        if (loadedUser.token){
            this.user.next(loadedUser);
            const expirationDate = 
                new Date(userData._tokenExpirationDate).getTime() -
                new Date().getTime();
            this.autoLogout(expirationDate);
        }
    }

    private handleAuthentication(email: string,
        userId: string,
        token: string,
        expiresIn: number){
        // using expiresIn * 1000 convert it to millisecond
        // getTime() time in miliSecond
        const expirationDate = new Date(new Date().getTime() + expiresIn*1000)
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000)
        localStorage.setItem('userData', JSON.stringify(user));
        }


    private handleError(errorRes: HttpErrorResponse)
    {
        let errorMessage = "An unkown error occures!";
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'this email exists already';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'password invalid';
                break;
            case 'EMAIL_NOT_FOUND':
            errorMessage = 'email not found';
            break;
            case 'USER_DISABLED':
                errorMessage = 'user disabled';
                break;
        }   
        return throwError(errorMessage);
    }

}