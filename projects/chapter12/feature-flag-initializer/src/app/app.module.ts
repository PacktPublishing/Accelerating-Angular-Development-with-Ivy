import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { featureFlagInitializer } from './feature-flag.initializer';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, HttpClientModule, MatSlideToggleModule],
  providers: [featureFlagInitializer],
})
export class AppModule {}
