import { Component } from "@angular/core";

@Component({
    selector:'app-assignment-3',
    templateUrl: './assignment-3.component.html',
    styles: [`
        .new {
            color: white
        }
    `]
})

export class Assignment3 {
    toggleParagraph : boolean = false;
    clicklog = [];
    logg = [] as any ;
    count = 0;
    fifthElementFlag = false;
    color = "";
    
    ToggleParagraph(){
        console.log("Hello")
        this.toggleParagraph = !this.toggleParagraph;
        //this.count +=1;
        //this.clicklog.push(this.count);
        //console.log(this.clicklog);
        
        /********** Max Solution ************/
        // this.clicklog.push(this.clicklog.length + 1);
        // new Data() ----> object is JavaScript ships so No need to import anything
        this.logg.push(new Date());

        this.checkFifthElementFlag();
    }

    checkFifthElementFlag(){
        if(this.clicklog.length > 4){
            this.fifthElementFlag = true;
            this.color = "blue"
        }   
    }

    
}