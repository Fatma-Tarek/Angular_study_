import { Component } from "@angular/core";

@Component({
    selector: 'app-assignment-2',
    templateUrl: './assignment-2.component.html',
})
export class Assignment2 {
    userName: string = "";
    
    onReset(){
        console.log("reset userName done");
        this.userName = '';
    }

}