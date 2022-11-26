import { ICompletedAt } from './base.interface';

export interface IAssignment extends ICompletedAt {
  assignmentId: string;
  room: string;
  task: string;
  comments: string;
  receivedBy: string;
  performedBy?: string;
}

export interface ICreateAssignmentRequest {
  room: string;
  task: string;
  comments: string;
  receivedBy: string;
  performedBy?: string;
}

export interface IUpdateAssignmentRequest {
  room?: string;
  task?: string;
  comments?: string;
  receivedBy?: string;
  performedBy?: string;
  completedAt?: Date;
}
