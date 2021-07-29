import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackendConfiguration } from '../data-access/backend-configuration';
import { backendConfigurationToken } from '../data-access/backend-configuration.token';
import { SharesComponent } from './shares.component';

const routes: Routes = [{ path: '', component: SharesComponent }];
const backendConfiguration: BackendConfiguration = {
  baseUrl: 'https://api02.example.com',
  retryAttempts: 7,
  retryIntervalMs: 100,
};

@NgModule({
  declarations: [SharesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [
    { provide: backendConfigurationToken, useValue: backendConfiguration },
  ],
})
export class SharesModule {}
