import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITask } from '@hems/interfaces';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'hems-edit-task-dialog',
  templateUrl: './editTaskDialog.component.html',
  styleUrls: [
    '../../../../assets/checkbox.scss',
    '../../../../assets/dialog.scss',
  ],
})
export class EditTaskDialogComponent {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;
  taskId: string;
  isTaskComplete = false;

  @ViewChild('initials') initialsInput!: ElementRef;
  @ViewChild('completed') completedInput!: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITask,
    private service: TasksService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.taskId = data.taskId;
    this.form = new UntypedFormGroup({
      initials: new UntypedFormControl(data.initials, [Validators.required]),
      completed: new UntypedFormControl(data.completedAt, [Validators.required]),
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      if (this.form.get('initials') === null) {
        this.initialsInput.nativeElement.focus();
      } else if (this.form.get('completedAt') === null) {
        this.completedInput.nativeElement.focus();
      }
    } else {
      this.updateTask();
    }
  }

  updateTask(): void {
    this.isLoading = true;
    this.service
      .update(this.taskId, {
        initials: this.form.get('initials')?.value,
        completedAt: new Date(this.form.get('completedAt')?.value
        ),
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Task item updated!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackbar.open('Failed to update, please try again.', 'Okay', {
            duration: 10000,
          });
          this.isLoading = false;
        },
      });
  }
}
