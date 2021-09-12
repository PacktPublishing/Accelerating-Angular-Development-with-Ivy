import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagService {
  #featureFlags = new Map<string, boolean>();

  configureFeatures(featureFlags: { [feature: string]: boolean }): void {
    Object.entries(featureFlags).forEach(([feature, state]) =>
      this.#featureFlags.set(feature, state)
    );
  }

  isEnabled(feature: string): boolean {
    return this.#featureFlags.get(feature) ?? false;
  }
}
