import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MapComponent } from './map.component';

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    MatProgressSpinnerModule,
  ],
})
export class MapModule {}
