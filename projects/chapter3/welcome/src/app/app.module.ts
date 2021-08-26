import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, WelcomeComponent],
  imports: [BrowserModule],
})
export class AppModule {}
