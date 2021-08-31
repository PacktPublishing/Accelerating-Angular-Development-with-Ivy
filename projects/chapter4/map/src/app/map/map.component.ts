import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Observable, of } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';

import { AppConfig } from '../app-config';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent {
  @ViewChild(GoogleMap, { static: false })
  map?: GoogleMap;

  isGoogleMapsApiLoaded$: Observable<boolean> = this.http
    .jsonp(
      `https://maps.googleapis.com/maps/api/js?key=${this.config.googleMapsApiKey}`,
      'callback'
    )
    .pipe(
      mapTo(true),
      catchError(() => of(false))
    );

  constructor(private config: AppConfig, private http: HttpClient) {}
}
