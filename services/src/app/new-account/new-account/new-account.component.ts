import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    //To use Services
    // it's a bad way to use services in angular
    const service = new LoggingService();
    service.logStatusChange(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }

}
