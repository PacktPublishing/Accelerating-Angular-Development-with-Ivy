import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { MaterialModule } from './../shared/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [NavigationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavigationModule {}
