import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  /************************
   * if you want style inside ts 
   * use back ticks for multiple lines 
   *************************/
  styles: [`
    h3 {
      color: red
    }
  
  `]
})
export class AppComponent {
  
}

