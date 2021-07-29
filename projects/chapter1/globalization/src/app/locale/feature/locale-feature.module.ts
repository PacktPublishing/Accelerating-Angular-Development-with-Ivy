import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LocaleUiModule } from '../ui/locale-ui.module';
import { LocaleContainerComponent } from './locale.container';

@NgModule({
  declarations: [LocaleContainerComponent],
  exports: [LocaleContainerComponent],
  imports: [CommonModule, LocaleUiModule],
})
export class LocaleFeatureModule {}
