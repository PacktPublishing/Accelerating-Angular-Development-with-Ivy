import { Component } from '@angular/core';

import { BackendService } from '../data-access/backend.service';

@Component({
  selector: 'workspace-bank-accounts',
  templateUrl: './bank-accounts.component.html',
})
export class BankAccountsComponent {
  bankAccounts$ = this.backend.get('bank-accounts');

  constructor(private backend: BackendService) {}
}
