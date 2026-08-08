export const COMPONENT_TYPES = ['frontend', 'backend', 'database', 'external'] as const;

export type ComponentType = (typeof COMPONENT_TYPES)[number];

export interface Component {
  id: string;
  name: string;
  type: ComponentType;
  description: string;
}
