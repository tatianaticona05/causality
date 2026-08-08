/**
 * Shared types and helpers used by the web app, the API and the VS Code extension.
 * Kept intentionally minimal: only an example export to verify cross-package imports.
 */

export const SHARED_PACKAGE_NAME = '@causality/shared';

export interface HealthStatus {
  status: 'ok';
  service: string;
}

export function createHealthStatus(service: string): HealthStatus {
  return { status: 'ok', service };
}
