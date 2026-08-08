export const TASK_STATUSES = ['TODO', 'IN_PROGRESS', 'DONE'] as const;

export type TaskStatus = (typeof TASK_STATUSES)[number];

export interface Task {
  id: string;
  title: string;
  description: string;
  componentId: string;
  /** Developer currently responsible for the task, or null when unassigned. */
  assigneeId: string | null;
  status: TaskStatus;
}
