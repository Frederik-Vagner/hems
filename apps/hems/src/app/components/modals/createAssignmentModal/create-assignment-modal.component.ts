import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { AssignmentsService } from '../../../services/assignments.service';

@Component({
  selector: 'hems-create-assignment-modal',
  templateUrl: './create-assignment-modal.component.html',
  styleUrls: ['./create-assignment-modal.component.scss'],
})
export class CreateAssignmentModalComponent implements OnInit {
  createAssignmentForm: UntypedFormGroup;
  guestHasApproved = false;

  constructor(private assignmentService: AssignmentsService){
    this.createAssignmentForm = new UntypedFormGroup({
      roomNumber: new UntypedFormControl('', [
        Validators.maxLength(50),
        Validators.pattern('^[0-9]*$'),
      ]),
      task: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl('', [Validators.required]),
      receivedBy: new UntypedFormControl(''),
      performedBy: new UntypedFormControl('', [Validators.required]),
      timeReceived: new UntypedFormControl('', [Validators.required]),
      timePerformed: new UntypedFormControl('', [Validators.required]),
      guestHasApproved: new UntypedFormControl(this.guestHasApproved, [Validators.required]),
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
