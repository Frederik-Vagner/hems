import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LuggageType } from '@hems/interfaces';
import { LuggageService } from '../../../../../services/luggage.service';

@Component({
  selector: 'hems-create-checkin-dialog',
  templateUrl: './create-checkin-dialog.component.html',
  styleUrls: [
    '../../../../../../assets/styles/checkbox.scss',
    '../../../../../../assets/styles/dialog.scss',
  ],
})
export class CreateCheckinDialogComponent {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;
  guestApprovedGDPR = false;

  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('arrivalTime') arrivalTimeInput!: ElementRef;
  @ViewChild('bags') bagsInput!: ElementRef;
  @ViewChild('tagNr') tagNrInput!: ElementRef;
  @ViewChild('bbLr') bbLrInput!: ElementRef;
  @ViewChild('location') locationInput!: ElementRef;

  constructor(
    private service: LuggageService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.form = new UntypedFormGroup({
      room: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      roomReady: new UntypedFormControl('false', [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      arrivalTime: new UntypedFormControl(new Date(), [Validators.required]),
      bags: new UntypedFormControl('', [Validators.required]),
      tagNr: new UntypedFormControl('', [Validators.required]),
      bbLr: new UntypedFormControl('', [Validators.required]),
      location: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl('', [Validators.maxLength(1000)]),
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      if (this.form.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.form.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.form.get('arrivalTime')?.invalid) {
        this.arrivalTimeInput.nativeElement.focus();
      } else if (this.form.get('bags')?.invalid) {
        this.bagsInput.nativeElement.focus();
      } else if (this.form.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.form.get('bbLr')?.invalid) {
        this.bbLrInput.nativeElement.focus();
      } else if (this.form.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      }
    } else {
      this.createCheckin();
    }
  }

  createCheckin(): void {
    if (!this.guestApprovedGDPR) {
      this.snackbar.open('Guest needs to approve storing their data.', 'Okay', {
        duration: 10000,
      });
      return;
    }

    this.isLoading = true;
    this.service
      .create({
        room: this.form.get('room')?.value,
        roomReady: this.form.get('roomReady')?.value,
        name: this.form.get('name')?.value,
        arrivalTime: new Date(this.form.get('arrivalTime')?.value),
        bags: this.form.get('bags')?.value,
        tagNr: this.form.get('tagNr')?.value,
        bbLr: this.form.get('bbLr')?.value,
        location: this.form.get('location')?.value,
        description:
          this.form.get('description')?.value.toString().length > 1
            ? this.form.get('description')?.value
            : '-',
        luggageType: LuggageType.CHECKIN,
        bbDown: ' ',
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Check In luggage item created!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackbar.open('Failed to create, please try again.', 'Okay', {
            duration: 10000,
          });
          this.isLoading = false;
        },
      });
  }
}
