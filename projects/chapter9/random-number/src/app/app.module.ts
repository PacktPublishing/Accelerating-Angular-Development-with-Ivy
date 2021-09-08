import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RandomNumberModule } from './random-number/random-number.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, RandomNumberModule],
})
export class AppModule {}
