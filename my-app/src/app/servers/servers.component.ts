import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /**************************
   * if you want add html inside ts so use template instead templateUrl
   * to use js use back tic
  **************************/
  // template:`<app-server><app-server>`,
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

}
