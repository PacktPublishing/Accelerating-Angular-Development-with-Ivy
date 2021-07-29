import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackendConfiguration } from './data-access/backend-configuration';
import { backendConfigurationToken } from './data-access/backend-configuration.token';
import { AppRoutingModule } from './app-routing.module';

const backendConfiguration: BackendConfiguration = {
  baseUrl: 'https://api01.example.com',
  retryAttempts: 4,
  retryIntervalMs: 250,
};

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    { provide: backendConfigurationToken, useValue: backendConfiguration },
  ],
})
export class AppModule {}
