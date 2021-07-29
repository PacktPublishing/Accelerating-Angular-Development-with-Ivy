import { NgModule } from '@angular/core';

import { BidiPictureDirective } from './bidi-picture.directive';

@NgModule({
  declarations: [BidiPictureDirective],
  exports: [BidiPictureDirective],
})
export class SharedUiModule {}
