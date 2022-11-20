import { ICompletedAt } from './base.interface';

export interface ITask extends ICompletedAt {
  taskId: string;
  time: string;
  task: string;
  initials: string;
  listName: string;
}

export interface ICreateTask {
  time: string;
  task: string;
  initials: string;
  listName: string;
}

export interface IUpdateTask {
  time?: string;
  task?: string;
  initials?: string;
  listName?: string;
  completedAt?: Date;
}
