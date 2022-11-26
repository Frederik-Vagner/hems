import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAssignment } from '@hems/interfaces';
import { AssignmentsService } from '../../services/assignments.service';

@Component({
  selector: 'hems-assignments-page',
  templateUrl: './assignments-page.component.html',
  styleUrls: ['./assignments-page.component.scss'],
})
export class AssignmentsPageComponent implements OnInit {
  assignmentList: IAssignment[] = [];
  isLoading = true;

  assignmentColumns = [
    'room',
    'task',
    'comments',
    'receivedBy',
    'receivedAt',
    'performedBy',
    'completedAt'
  ]

  constructor(
    private assignmentsService: AssignmentsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchAssignments();
  }

  fetchAssignments(): void {
    this.isLoading = true;
    this.assignmentsService.getAssignments(new Date()).subscribe({
      next: (assignments) => {
        this.assignmentList = assignments;
        console.log('checkin', assignments);
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.snackBar.open(
          'Check In data have failed to load',
          'Imma try again later',
          {
            duration: 10000,
          }
        );
        this.isLoading = false;
      },
    });
  }
  
  dateDisplayTime(date: Date) {
    return date.toLocaleString(undefined, {hour: '2-digit', hour12: false, minute:'2-digit'})
  }

  editAssignment(assignmentId: string): void {
    alert(assignmentId)
  }
}
