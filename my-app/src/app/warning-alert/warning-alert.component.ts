import { Component } from "@angular/core";

//decorator
@Component({
    selector: 'app-warning-alert',
    template: `<p>This is a warning, You are in danger!</p>`,
    styles: [`
        p { 
            padding: 20px;
            background-color: mistyrose;
            border: 2px solid red;
    
        }
    `]
})
export class WarningAlertComponent {


}