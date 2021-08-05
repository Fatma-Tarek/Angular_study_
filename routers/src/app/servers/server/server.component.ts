import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { ServersService } from '../servers.service';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  //server : any;
  server: {id: number, name: string, status: string}
  status = false;

  constructor(private serversService: ServersService, 
              private route: ActivatedRoute,
              private router: Router) {
    
   }

  ngOnInit() {

    /******** Another way : Load Component with data together*/
    /*this.status = true;
    const id = this.route.snapshot.params['id'];
    // + will convert string to object
    this.server = this.serversService.getServer(+id);
    this.route.params
      .subscribe(
        (params: Params)=>{
          // + will convert string to object
          this.server = this.serversService.getServer(+params['id']);
        });*/


      /***** will use reslover will load data before component */
      // Retrive data from URL 
      // it's important when we use asynchronously data 
      this.route.data.subscribe(
          (data: Data) =>{
              this.server = data['server'];
          }
      )
  }

  editServer(){
    //we add relative path so we append on server 
    this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling:'preserve'})
  }
}
