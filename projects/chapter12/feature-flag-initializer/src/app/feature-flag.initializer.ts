import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, FactoryProvider } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

import { FeatureFlagService } from './feature-flag.service';

function configureFeatureFlags(
  featureFlagService: FeatureFlagService,
  http: HttpClient
): () => Observable<void> {
  return () =>
    http.get<{ [feature: string]: boolean }>('/assets/features.json').pipe(
      tap((features) => featureFlagService.configureFeatures(features)),
      mapTo(undefined)
    );
}

export const featureFlagInitializer: FactoryProvider = {
  deps: [FeatureFlagService, HttpClient],
  multi: true,
  provide: APP_INITIALIZER,
  useFactory: configureFeatureFlags,
};
