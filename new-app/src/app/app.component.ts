import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigate: string = 'recipes';

  whatWillBeShow(event: string){
    this.navigate = event;
  }
}
