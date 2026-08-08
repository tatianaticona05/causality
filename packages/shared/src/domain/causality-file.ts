import type { Component } from './component.js';
import type { Contract } from './contract.js';
import type { Dependency } from './dependency.js';
import type { Developer } from './developer.js';
import type { Project } from './project.js';
import type { Task } from './task.js';
import type { Workspace } from './workspace.js';

/**
 * Structure of a causality.json file.
 * It describes the project structure and its relationships, never source code.
 */
export interface CausalityFile {
  project: Project;
  components: Component[];
  developers: Developer[];
  tasks: Task[];
  contracts: Contract[];
  dependencies: Dependency[];
  workspaces: Workspace[];
}
