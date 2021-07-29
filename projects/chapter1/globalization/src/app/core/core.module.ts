import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule],
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() coreModule: CoreModule | null) {
    if (coreModule) {
      throw new Error('CoreModule is already loaded. Only import in AppModule');
    }
  }
}
