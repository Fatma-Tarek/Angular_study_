import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ActivatedRoute,  Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';
//import { CanComponentDeactive } from './can-deactivate-guard.service';

import { CanComponentDeactive } from 'src/app/servers/edit-server/can-deactivate-guard.service'


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactive {

  //server!: {id: number, name: string, status: string};
  server: any;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changeSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
               private router:Router) { }

  ngOnInit() {
    // snapshot will occur when component is created 
    // so we using subscribe
    console.log(this.route.snapshot.queryParamMap);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(+id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changeSaved = true ;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ///CanComponentDeactivate Interface
   canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
     if(!this.allowEdit){
       return true;
     }
     if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changeSaved){
       return confirm('Do you want to discard the changes?');
     }else{
       return true;
     }

     }



}
