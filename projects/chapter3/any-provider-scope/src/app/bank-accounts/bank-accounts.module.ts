import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BankAccountsComponent } from './bank-accounts.component';

const routes: Routes = [{ path: '', component: BankAccountsComponent }];

@NgModule({
  declarations: [BankAccountsComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class BankAccountsModule {}
