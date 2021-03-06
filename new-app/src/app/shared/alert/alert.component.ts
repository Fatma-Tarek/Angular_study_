import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
    @Input() message: string;
    @Output()  close = new EventEmitter<void>();

    onClose(){
        console.log('before emit');
        this.close.emit();
        console.log('after emit')
    }
}