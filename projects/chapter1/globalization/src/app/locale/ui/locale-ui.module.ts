import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LocalePickerComponent } from './locale-picker.component';

@NgModule({
  declarations: [LocalePickerComponent],
  exports: [LocalePickerComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LocaleUiModule {}
