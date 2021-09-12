export function loadFeatureFlags(): Promise<{ [feature: string]: boolean }> {
  return fetch('/assets/features.json').then((response) => response.json());
}
