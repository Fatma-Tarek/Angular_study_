import { Injectable } from "@angular/core";
import { Subject } from 'rxjs'

@Injectable({ providedIn: 'root'})
export class UserServices {
    activatedEmitter = new Subject<boolean>();
}