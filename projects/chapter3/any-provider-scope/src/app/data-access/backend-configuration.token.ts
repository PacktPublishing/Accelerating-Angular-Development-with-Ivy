import { InjectionToken } from '@angular/core';

import { BackendConfiguration } from './backend-configuration';

export const backendConfigurationToken = new InjectionToken<BackendConfiguration>(
  'Backend configuration'
);
