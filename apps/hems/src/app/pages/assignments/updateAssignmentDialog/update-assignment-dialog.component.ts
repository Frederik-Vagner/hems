import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAssignment } from '@hems/interfaces';
import { AssignmentsService } from '../../../services/assignments.service';

@Component({
  selector: 'hems-update-assignment-dialog',
  templateUrl: './update-assignment-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/checkbox.scss',
    '../../../../assets/styles/dialog.scss',
  ],
})
export class UpdateAssignmentDialogComponent implements OnInit {
  updateAssignmentForm = new UntypedFormGroup({});
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
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: IAssignment
  ) {}

  ngOnInit(): void {
    this.updateAssignmentForm = new UntypedFormGroup({
      room: new UntypedFormControl(this.data.room ?? '', [
        Validators.maxLength(50),
        Validators.pattern('^[0-9]*$'),
      ]),
      task: new UntypedFormControl(
        this.data.task ?? '',
        Validators.maxLength(20)
      ),
      comments: new UntypedFormControl(this.data.comments, [
        Validators.maxLength(1000),
        Validators.required,
      ]),
      receivedBy: new UntypedFormControl(this.data.receivedBy, [
        Validators.maxLength(20),
        Validators.required,
      ]),
      performedBy: new UntypedFormControl(this.data.performedBy ?? '', [
        Validators.maxLength(20),
      ]),
      receivedAt: new UntypedFormControl(this.data.receivedAt, [
        Validators.required,
      ]),
      completedAt: new UntypedFormControl(this.data.completedAt ?? ''),
    });
  }

  onSubmit(): void {
    if (!this.updateAssignmentForm.valid) {
      if (this.updateAssignmentForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.updateAssignmentForm.get('task')?.invalid) {
        this.taskInput.nativeElement.focus();
      } else if (this.updateAssignmentForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      } else if (this.updateAssignmentForm.get('receivedBy')?.invalid) {
        this.receivedByInput.nativeElement.focus();
      } else if (this.updateAssignmentForm.get('performedBy')?.invalid) {
        this.performedByInput.nativeElement.focus();
      }
    } else {
      this.updateAssignment();
    }
  }

  updateAssignment(): void {
    this.assignmentService
      .updateAssignment(this.data.assignmentId, {
        room: this.updateAssignmentForm.get('room')?.value,
        task: this.updateAssignmentForm.get('task')?.value,
        comments: this.updateAssignmentForm.get('comments')?.value,
        receivedBy: this.updateAssignmentForm.get('receivedBy')?.value
          ? this.updateAssignmentForm.get('receivedBy')?.value.toUpperCase()
          : '',
        performedBy: this.updateAssignmentForm.get('performedBy')?.value
          ? this.updateAssignmentForm.get('performedBy')?.value.toUpperCase()
          : '',
        receivedAt: this.updateAssignmentForm.get('receivedAt')?.value,
        completedAt: this.updateAssignmentForm.get('completedAt')?.value,
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Assignment updated!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackBar.open(
            'Failed to update assignment, please try again.',
            'Okay',
            { duration: 10000 }
          );
        },
      });
  }
}
