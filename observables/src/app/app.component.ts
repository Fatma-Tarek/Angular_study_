import { Component, OnInit } from '@angular/core';
import { UserServices } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userActivated = false;
  constructor(private userService: UserServices){}
  ngOnInit(){
      this.userService.activatedEmitter.subscribe((didActivate: boolean)=>{
        this.userActivated = didActivate;
      });
  }


}
