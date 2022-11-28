import { ICompletedAt } from './base.interface';

export interface IAssignment extends ICompletedAt {
  assignmentId: string;
  room: string;
  task: string;
  comments: string;
  receivedBy: string;
  performedBy?: string;
  receivedAt: Date;
  // completedAt: date; Completed at
  // createdAt: date; Created at
}
export interface ICreateAssignmentRequest extends ICompletedAt {
  room: string;
  task: string;
  comments: string;
  receivedBy: string;
  performedBy?: string;
  receivedAt: Date;
  // createdAt: date;
}

export interface IUpdateAssignmentRequest {
  room?: string;
  task?: string;
  comments?: string;
  receivedBy?: string;
  performedBy?: string;
  receivedAt?: Date;
}
