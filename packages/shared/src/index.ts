/**
 * Shared types and helpers used by the web app, the API and the VS Code extension.
 * Exposes the project domain model plus a small health helper.
 */

export * from './domain/index.js';

export const SHARED_PACKAGE_NAME = '@causality/shared';

export interface HealthStatus {
  status: 'ok';
  service: string;
}

export function createHealthStatus(service: string): HealthStatus {
  return { status: 'ok', service };
}
