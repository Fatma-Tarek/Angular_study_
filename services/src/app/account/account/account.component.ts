import { Component, OnInit , Input} from '@angular/core';
import { AccountService } from 'src/app/accounts.service';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent implements OnInit {
  //still have inputs bs. we have data from outside 
  @Input() account!: {name: string, status: string};
  @Input() id!: number;
  
  constructor(private loggingService: LoggingService, private accountsService: AccountService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status);
    //console.log('A server status changed, new status: ' + status);
    this.accountsService.statusUpdated.emit(status);
  }
}
