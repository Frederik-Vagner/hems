import { ICompletedAt } from './base.interface';

export interface ITask extends ICompletedAt {
  taskId: string;
  time: string;
  task: string;
  initials: string;
}
