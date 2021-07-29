import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bank-accounts',
    loadChildren: () =>
      import('./bank-accounts/bank-accounts.module').then(
        (m) => m.BankAccountsModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'shares',
    loadChildren: () =>
      import('./shares/shares.module').then((m) => m.SharesModule),
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
})
export class AppRoutingModule {}
