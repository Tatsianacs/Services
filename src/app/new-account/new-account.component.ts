import {Component} from '@angular/core';
import {LoggingService} from '../logging/logging.service';
import {AccountService} from '../account.service';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css'],
    // providers: [LoggingService]
})
export class NewAccountComponent {
    // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>(); no longer need


    constructor(private loggingService: LoggingService, private  accountService: AccountService) {
        this.accountService.statusUpdated.subscribe((status: string) => console.log('new' + status));
    }

    onCreateAccount(accountName: string, accountStatus: string) {
        this.accountService.addAccount(accountName, accountStatus);
        // this.accountAdded.emit({
        //     name: accountName,
        //     status: accountStatus
        // });
        // this.loggingService.logStatusChange(accountStatus);
    }
}
