import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AssignmentsService } from '../../../services/assignments.service';

@Component({
  selector: 'hems-create-assignment-dialog',
  templateUrl: './create-assignment-dialog.component.html',
  styleUrls: ['../../../../assets/styles/dialog.scss'],
})
export class CreateAssignmentDialogComponent implements OnInit {
  createAssignmentForm = new UntypedFormGroup({});
  isLoading = false;
  maxDatetime = new Date(new Date().getTime() + 50000);

  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('task') taskInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;
  @ViewChild('receivedBy') receivedByInput!: ElementRef;
  @ViewChild('receivedAt') receivedAtInput!: ElementRef;
  @ViewChild('performedBy') performedByInput!: ElementRef;
  @ViewChild('completedAt') completedAtInput!: ElementRef;

  constructor(
    private assignmentService: AssignmentsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.createAssignmentForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [
        Validators.maxLength(50),
        Validators.pattern('^[0-9]*$'),
      ]),
      task: new UntypedFormControl('', Validators.maxLength(20)),
      receivedBy: new UntypedFormControl('', [
        Validators.maxLength(20),
        Validators.required,
      ]),
      performedBy: new UntypedFormControl('', [Validators.maxLength(20)]),
      receivedAt: new UntypedFormControl(new Date(), [
        Validators.required,
        Validators.maxLength(20),
      ]),
      completedAt: new UntypedFormControl(''),
      comments: new UntypedFormControl('', [
        Validators.maxLength(1000),
        Validators.required,
      ]),
    });
  }

  onSubmit(): void {
    if (!this.createAssignmentForm.valid) {
      if (this.createAssignmentForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.createAssignmentForm.get('task')?.invalid) {
        this.taskInput.nativeElement.focus();
      } else if (this.createAssignmentForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      } else if (this.createAssignmentForm.get('receivedBy')?.invalid) {
        this.receivedByInput.nativeElement.focus();
      } else if (this.createAssignmentForm.get('performedBy')?.invalid) {
        this.performedByInput.nativeElement.focus();
      }
    } else {
      this.createAssignment();
    }
  }

  createAssignment(): void {
    this.isLoading = true;
    this.assignmentService
      .createAssignment({
        room: this.createAssignmentForm.get('room')?.value,
        task: this.createAssignmentForm.get('task')?.value,
        comments: this.createAssignmentForm.get('comments')?.value,
        receivedBy: this.createAssignmentForm.get('receivedBy')?.value
          ? this.createAssignmentForm.get('receivedBy')?.value.toUpperCase()
          : '',
        performedBy: this.createAssignmentForm.get('performedBy')?.value
          ? this.createAssignmentForm.get('performedBy')?.value.toUpperCase()
          : '',
        receivedAt: this.createAssignmentForm.get('receivedAt')?.value,
        completedAt: this.createAssignmentForm.get('completedAt')?.value,
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Assignment added!', 'Thanks', { duration: 5000 });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackBar.open(
            'Failed to add assignment, please try again.',
            'Okay',
            { duration: 10000 }
          );
          this.isLoading = false;
        },
      });
  }
}
