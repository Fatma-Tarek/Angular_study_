import { Component, OnInit } from '@angular/core';
import { UsersServices } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  inActiveAccount :string[] =[];
  constructor(private inactiveAccount:UsersServices) { }
  
  ngOnInit(): void {
    this.inActiveAccount= this.inactiveAccount.inactiveAccounts;
  }

  changeStatus(i: number){
    this.inactiveAccount.AddActiveAccount(i);
  }

}
