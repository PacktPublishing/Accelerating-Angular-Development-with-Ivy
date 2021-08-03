import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';
import { SchoolsRoutingModule } from './schools-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [SchoolsComponent],
  imports: [CommonModule, GoogleMapsModule, SchoolsRoutingModule],
  exports: [SchoolsComponent],
})
export class SchoolsModule {}
