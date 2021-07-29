import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BidiFeatureModule } from './bidi/feature/bidi-feature.module';
import { CoreModule } from './core/core.module';
import { LocaleFeatureModule } from './locale/feature/locale-feature.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [CoreModule, BidiFeatureModule, LocaleFeatureModule, NoopAnimationsModule],
})
export class AppModule {}
