import { NgModule } from '@angular/core';

import { BidiUiModule } from '../ui/bidi-ui.module';
import { BidiComponent } from './bidi.component';

@NgModule({
  declarations: [BidiComponent],
  exports: [BidiComponent],
  imports: [BidiUiModule],
})
export class BidiFeatureModule {}
