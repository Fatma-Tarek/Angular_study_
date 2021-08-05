import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server : any;
  status = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.status = true;
    const id = this.route.snapshot.params['id'];
    // + will convert string to object
    this.server = this.serversService.getServer(+id);
    this.route.params
      .subscribe(
        (params: Params)=>{
          // + will convert string to object
          this.server = this.serversService.getServer(+params['id']);
        });
  }
}
