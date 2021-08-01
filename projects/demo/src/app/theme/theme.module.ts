import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { ThemeComponent } from './theme.component';
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  declarations: [ThemeComponent],
  imports: [MaterialModule, ThemeRoutingModule],
  exports: [ThemeComponent],
})
export class ThemeModule {}
