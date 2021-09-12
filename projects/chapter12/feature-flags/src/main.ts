import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { featureFlagsToken } from './app/feature-flags.token';
import { environment } from './environments/environment';
import { loadFeatureFlags } from './load-feature-flags';

if (environment.production) {
  enableProdMode();
}

loadFeatureFlags()
  .then((featureFlags) =>
    platformBrowserDynamic([
      { provide: featureFlagsToken, useValue: featureFlags },
    ]).bootstrapModule(AppModule)
  )
  .catch((err) => console.error(err));
