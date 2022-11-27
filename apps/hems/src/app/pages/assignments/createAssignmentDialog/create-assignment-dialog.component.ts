import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AssignmentsService } from '../../../services/assignments.service';

@Component({
  selector: 'hems-create-assignment-dialog',
  templateUrl: './create-assignment-dialog.component.html',
  styleUrls: [
    './create-assignment-dialog.component.scss', 
    '../../../../assets/checkbox.scss', 
    '../../../../assets/dialog.scss',
  ],
})
export class CreateAssignmentDialogComponent implements OnInit {
  createAssignmentForm = new UntypedFormGroup({});
  guestHasApproved = false;
  isLoading = false;
  maxDatetime = new Date();

  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('task') taskInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;
  @ViewChild('receivedBy') receivedByInput!: ElementRef;
  @ViewChild('receivedAt') receivedAtInput!: ElementRef;
  @ViewChild('performedBy') performedByInput!: ElementRef;
  @ViewChild('completedAt') completedAtInput!: ElementRef;

  constructor(private assignmentService: AssignmentsService, private snackBar: MatSnackBar, private dialog: MatDialog){};

  ngOnInit(): void {
    this.createAssignmentForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [Validators.maxLength(50), Validators.pattern('^[0-9]*$')]),
      task: new UntypedFormControl('', Validators.maxLength(20)),
      comments: new UntypedFormControl('', [Validators.maxLength(1000), Validators.required]),
      receivedBy: new UntypedFormControl('', [Validators.maxLength(20), Validators.required]),
      performedBy: new UntypedFormControl('', [Validators.maxLength(20)]),
      receivedAt: new UntypedFormControl('', [Validators.required, Validators.maxLength(20)]),
      completedAt: new UntypedFormControl(''),
    });
  };

  onSubmit(): void {
    if(!this.guestHasApproved) {
      this.snackBar.open('Guest needs to approve storing their data.', 'Fam.', { duration: 5000 });
      return;
    };

    if(!this.createAssignmentForm.valid) {
      if(this.createAssignmentForm.get('room')?.invalid) {
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
    this.assignmentService.createAssignment({
      room: this.createAssignmentForm.get('room')?.value,
      task: this.createAssignmentForm.get('task')?.value,
      comments: this.createAssignmentForm.get('comments')?.value,
      receivedBy: this.createAssignmentForm.get('receivedBy')?.value,
      performedBy: this.createAssignmentForm.get('performedBy')?.value,
      receivedAt: this.createAssignmentForm.get('receivedAt')?.value,
    }).subscribe(
      () => {
        this.snackBar.open('Assignment added!', 'HOLY SH***', { duration: 2500 });
        document.location.reload();
        this.dialog.closeAll();
        this.isLoading = false;
      },
      (err: HttpErrorResponse) => {
        console.error(err);
        this.snackBar.open('Failed to add assignment sadly :(((', 'SH*** HOLY', { duration: 5000 });
        this.isLoading = false;
      }
    );
  };
}
