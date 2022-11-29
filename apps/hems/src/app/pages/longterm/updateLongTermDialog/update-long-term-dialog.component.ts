import { Component, Inject, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ILuggage } from '@hems/interfaces';
import { LuggageService } from '../../../services/luggage.service';

@Component({
  selector: 'hems-update-long-term-dialog',
  templateUrl: './update-long-term-dialog.component.html',
  styleUrls: [
    '../../../../assets/checkbox.scss',
    '../../../../assets/dialog.scss',
  ],
})
export class UpdateLongTermDialogComponent implements OnInit {
  updateLongTermForm = new UntypedFormGroup({});
  guestHasApproved = false;
  maxDatetime = new Date();

  constructor(
    private luggageService: LuggageService,
    @Inject(MAT_DIALOG_DATA) public data: ILuggage
  ) {}

  ngOnInit(): void {
    this.updateLongTermForm = new UntypedFormGroup({
      dateIn: new UntypedFormControl(this.data.createdAt, [Validators.required]),
      room: new UntypedFormControl(this.data.room, [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      name: new UntypedFormControl(this.data.name, [Validators.required]),
      bags: new UntypedFormControl(this.data.bags, [Validators.required]),
      comments: new UntypedFormControl(this.data.description, [Validators.required]),
      tagNr: new UntypedFormControl(this.data.tagNr, [Validators.required]),
      dateNeeded: new UntypedFormControl(this.data.arrivalTime, []),
      bbLr: new UntypedFormControl(this.data.bbLr, [Validators.required]),
      location: new UntypedFormControl(this.data.location, [Validators.required]),
      bbOut: new UntypedFormControl(this.data.bbOut, []),
      dateOut: new UntypedFormControl(this.data.completedAt, []),
    });
  }

  onSubmit(): void {
    console.log('skrt');
  }
}
