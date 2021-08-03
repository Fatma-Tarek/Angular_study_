export class CounterService {
    activeToInactiveCounter = 1;
    inactiveToActiveService = 1;

    icrementActiveToInActive(){
        this.inactiveToActiveService +=1;
        console.log("Inactive Status "+this.inactiveToActiveService);
    }

    icrementInctiveToActive(){
        this.activeToInactiveCounter  +=1;
        console.log("Inactive Status "+this.activeToInactiveCounter);
    }
}