import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BackendConfiguration } from './backend-configuration';
import { backendConfigurationToken } from './backend-configuration.token';
import { BackendGetOptions } from './backend-get-options';
import { retryWithDelay } from './retry-with-delay.operator';

@Injectable({
  providedIn: 'any',
})
export class BackendService {
  constructor(
    @Inject(backendConfigurationToken)
    private configuration: BackendConfiguration,
    private http: HttpClient
  ) {}

  get<T>(url: string, options: BackendGetOptions = {}): Observable<T> {
    return this.http
      .get<T>(`${this.configuration.baseUrl}/${url}`, {
        ...options,
        responseType: 'json',
      })
      .pipe(
        retryWithDelay(
          this.configuration.retryAttempts,
          this.configuration.retryIntervalMs
        )
      );
  }
}
