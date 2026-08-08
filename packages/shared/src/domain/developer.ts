export const DEVELOPER_ROLES = ['frontend', 'backend', 'fullstack', 'other'] as const;

export type DeveloperRole = (typeof DEVELOPER_ROLES)[number];

export interface Developer {
  id: string;
  name: string;
  role: DeveloperRole;
}
