import { InjectionToken } from '@angular/core';

export const featureFlagsToken = new InjectionToken<Record<string, boolean>>(
  'Feature flags'
);
