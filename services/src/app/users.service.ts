import { Injectable , EventEmitter} from "@angular/core";
import { CounterService } from "./counter.service";


@Injectable()
export class UsersServices {

    activeAcounts = ['Fatma Tarek Abdallah',"Manar Tarek", "Manal Tarek"];
    inactiveAccounts :string[]= []
    userStatus = new EventEmitter<string>();
     
    constructor(private counter: CounterService){}


    AddInactiveAccount(i: number){
        this.inactiveAccounts.push(this.activeAcounts[i]);
        this.activeAcounts.splice(i,1);
        this.counter.icrementActiveToInActive();
    }

    AddActiveAccount(i: number){
        this.activeAcounts.push(this.inactiveAccounts[i]);
        this.inactiveAccounts.splice(i,1); 
        this.counter.icrementInctiveToActive();
    }
    
}