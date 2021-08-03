import { Component, OnInit} from '@angular/core';
import { AccountService } from 'src/app/accounts.service';
import { LoggingService } from 'src/app/logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent implements OnInit {
  
  constructor(private loggingService: LoggingService,
              private accountsService: AccountService) { }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    /********** after anding instance of service ******/
    this.loggingService.logStatusChange(accountStatus);

    /***********************************
    * To use Services
    * it's a bad way to use services in angular
    * const service = new LoggingService();
    * service.logStatusChange(accountStatus);
    ************************************/
    //console.log('A server status changed, new status: ' + accountStatus);

    
  }

}
