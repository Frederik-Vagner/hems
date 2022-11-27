import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AssignmentsService } from '../../../services/assignments.service';

@Component({
  selector: 'hems-create-assignment-modal',
  templateUrl: './create-assignment-modal.component.html',
  styleUrls: ['./create-assignment-modal.component.scss'],
})
export class CreateAssignmentModalComponent implements OnInit {
  createAssignmentForm = new UntypedFormGroup({});
  guestHasApproved = false;
  isLoading = false;

  constructor(private assignmentService: AssignmentsService, private snackBar: MatSnackBar, private dialog: MatDialog){};

  ngOnInit(): void {
    this.createAssignmentForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [Validators.maxLength(50), Validators.pattern('^[0-9]*$')]),
      task: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', [Validators.required]),
      receivedBy: new UntypedFormControl(''),
      performedBy: new UntypedFormControl('', [Validators.required]),
      timeReceived: new UntypedFormControl('', [Validators.required]),
      receivedAt: new UntypedFormControl('', [Validators.required]),
    });
  };

  onSubmit(): void {
    if(!this.guestHasApproved) {
      this.snackBar.open('Guest needs to approve storing their data.', 'Fam.', { duration: 5000 });
      return;
    };

    if(!this.createAssignmentForm.valid) {
      if(this.createAssignmentForm.get('room')?.invalid) {
        console.log('1');
      } else if (this.createAssignmentForm.get('task')?.invalid) {
        console.log('2');
      } else if (this.createAssignmentForm.get('comments')?.invalid) {
        console.log('3');
      } else if (this.createAssignmentForm.get('receivedBy')?.invalid) {
        console.log('4');
      } else if (this.createAssignmentForm.get('performedBy')?.invalid) {
        console.log('5');
      } else if (this.createAssignmentForm.get('receivedAt')?.invalid) {
        console.log('6');
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
