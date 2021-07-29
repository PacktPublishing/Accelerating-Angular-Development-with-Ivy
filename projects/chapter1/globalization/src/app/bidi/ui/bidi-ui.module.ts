import { NgModule } from '@angular/core';

import { BidiMediaDirective } from './bidi-media.directive';

@NgModule({
  declarations: [BidiMediaDirective],
  exports: [BidiMediaDirective],
})
export class BidiUiModule {}
