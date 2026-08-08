export const PROJECT_STACKS = ['react-node-typescript'] as const;

/** Technology stack of the generated project. Only one stack in the MVP. */
export type ProjectStack = (typeof PROJECT_STACKS)[number];

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: ProjectStack;
  componentIds: string[];
  taskIds: string[];
  contractIds: string[];
  dependencyIds: string[];
}
