import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //Recommended
  //selector:'[app-servers]', //add like attribute inside app.component.html
  //selector:'.app-servers', //add like class inside app.component.html
  templateUrl: './servers.component.html',
  /**************************
   * if you want add html inside ts so use template instead templateUrl
   * to use js use back tic
  **************************/
  // template:`<app-server><app-server>`,
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverStatus: string = "No server is created";
  serverName= '';
  serverCreated: boolean = false;
  servers= ['Testserver' , 'Testserver 2']

  constructor() { 
    setTimeout(
      () => { this.allowNewServer = true ;}
      ,2000);
  }
  ngOnInit(): void {
  }

  onServerStatus(){
    this.servers.push(this.serverName);
    this.serverCreated = true ;
    this.serverStatus= "server with name " + this.serverName + " is created"  ;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
   }

}
