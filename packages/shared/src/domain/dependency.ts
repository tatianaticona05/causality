export const DEPENDENCY_STATUSES = ['PLANNED', 'OBSERVED', 'VERIFIED'] as const;

export type DependencyStatus = (typeof DEPENDENCY_STATUSES)[number];

export interface Dependency {
  id: string;
  sourceComponentId: string;
  targetComponentId: string;
  status: DependencyStatus;
}
