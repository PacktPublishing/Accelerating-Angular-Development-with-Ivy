export interface BackendConfiguration {
  readonly baseUrl: string;
  readonly retryAttempts: number;
  readonly retryIntervalMs: number;
}
