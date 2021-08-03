import { Component, OnInit } from '@angular/core';
import { UsersServices } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  accounts :string[] =[];
  constructor(private userAccount: UsersServices) { }

  ngOnInit(): void {
    this.accounts = this.userAccount.activeAcounts;
  }

  changeStatus(i: number){
    this.userAccount.AddInactiveAccount(i);
  }

}
