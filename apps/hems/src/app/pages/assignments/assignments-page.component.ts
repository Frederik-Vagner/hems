import { Component } from '@angular/core';
import { IAssignment } from '@hems/interfaces';
import { assignments } from './mockAssignment';

@Component({
  selector: 'hems-assignments-page',
  templateUrl: './assignments-page.component.html',
  styleUrls: ['./assignments-page.component.scss'],
})
export class AssignmentsPageComponent {
  assignmentList: IAssignment[] = assignments;

  assignmentColumns = [
    'room',
    'task',
    'comments',
    'receivedBy',
    'receivedAt',
    'performedBy',
    'completedAt'
  ]
  
  dateDisplayTime(date: Date) {
    return date.toLocaleString(undefined, {hour: '2-digit', hour12: false, minute:'2-digit'})
  }

  editAssignment(assignmentId: string): void {
    alert(assignmentId)
  }
}
