import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAssignment, TableInfoOptions } from '@hems/interfaces';
import { TableInfoDialogComponent } from '../../components/tableInfoDialog/table-info-dialog.component';
import { AssignmentsService } from '../../services/assignments.service';
import { DisplayDateService } from '../../services/display-date.service';
import { CreateAssignmentDialogComponent } from './createAssignmentDialog/create-assignment-dialog.component';
import { UpdateAssignmentDialogComponent } from './updateAssignmentDialog/update-assignment-dialog.component';

@Component({
  selector: 'hems-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['../../../assets/styles/table.scss'],
})
export class AssignmentsComponent implements OnInit {
  assignmentList: IAssignment[] = [];
  displayDate = new Date();

  assignmentColumns = [
    'room',
    'task',
    'comments',
    'receivedBy',
    'receivedAt',
    'performedBy',
    'completedAt',
  ];

  constructor(
    private assignmentsService: AssignmentsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private displayDateService: DisplayDateService
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchAssignments();
    });
  }

  ngOnInit(): void {
    this.fetchAssignments();
  }

  fetchAssignments(): void {
    this.assignmentsService.getAssignments(this.displayDate).subscribe({
      next: (assignments) => {
        this.assignmentList = assignments;
      },
      error: (error) => {
        console.error(error);
        this.snackBar.open(
          'Assignment data have failed to load, please try reloading the page.',
          'Okay',
          {
            duration: 10000,
          }
        );
      },
    });
  }

  openTableInfo(): void {
    this.dialog.open(TableInfoDialogComponent, {
      data: TableInfoOptions.ASSIGNMENTS,
      width: '500px',
    });
  }

  createAssignment(): void {
    this.dialog.open(CreateAssignmentDialogComponent, { width: '500px' });
  }

  editAssignment(assignment: IAssignment): void {
    this.dialog.open(UpdateAssignmentDialogComponent, {
      width: '500px',
      data: assignment,
    });
  }
}
