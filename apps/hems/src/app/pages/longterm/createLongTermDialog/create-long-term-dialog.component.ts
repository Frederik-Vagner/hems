import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { LuggageService } from '../../../services/luggage.service';

@Component({
  selector: 'hems-create-long-term-dialog',
  templateUrl: './create-long-term-dialog.component.html',
  styleUrls: [
    '../../../../assets/checkbox.scss',
    '../../../../assets/dialog.scss',
  ],
})
export class CreateLongTermDialogComponent implements OnInit {
  createLongTermForm = new UntypedFormGroup({});
  guestHasApproved = false;
  maxDatetime = new Date();

  constructor(private luggageService: LuggageService) {}

  ngOnInit(): void {
    this.createLongTermForm = new UntypedFormGroup({
      dateIn: new UntypedFormControl('', [Validators.required]),
      room: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      name: new UntypedFormControl('', [Validators.required]),
      bags: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', [Validators.required]),
      tagNr: new UntypedFormControl('', [Validators.required]),
      dateNeeded: new UntypedFormControl('', []),
      bbLr: new UntypedFormControl('', [Validators.required]),
      location: new UntypedFormControl('', [Validators.required]),
      bbOut: new UntypedFormControl('', [Validators.required]),
      dateOut: new UntypedFormControl('', []),
    });
  }

  onSubmit(): void {
    console.log('skrt');
  }

  createLongTermEntry(): void {
    // this.luggageService.create({
    // }).subscribe()
  }
}
