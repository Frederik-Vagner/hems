import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LuggageService } from '../../../services/luggage.service';

@Component({
  selector: 'hems-edit-checkin-dialog',
  templateUrl: './edit-checkin-dialog.component.html',
  styleUrls: ['./edit-checkin-dialog.component.css'],
})
export class EditCheckinDialogComponent {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;
  roomReady = false;

  constructor(
    private service: LuggageService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.form = new UntypedFormGroup({
      room: new UntypedFormControl('', [Validators.required]),
      roomReady: new UntypedFormControl(false, [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      arrivalTime: new UntypedFormControl(new Date(), [Validators.required]),
      bags: new UntypedFormControl('', [Validators.required]),
      tagNr: new UntypedFormControl('', [Validators.required]),
      bbLr: new UntypedFormControl('', [Validators.required]),
      bbUp: new UntypedFormControl('', []),
      location: new UntypedFormControl('', [Validators.required]),
      completedAt: new UntypedFormControl('', []),
      description: new UntypedFormControl('', [Validators.required]),
      guestApprovedGDPR: new UntypedFormControl(false, [Validators.required]),
    });
  }

  /**
   * @param date
   * @returns The date in a dateTime format
   */
  getDateTime(date: string): Date {
    return new Date(date);
  }

  update(): void {
    this.isLoading = true;
    console.log({
      room: this.form.get('room')?.value,
      roomReady: this.roomReady,
      name: this.form.get('name')?.value,
      arrivalTime: this.getDateTime(this.form.get('arrivalTime')?.value),
      bags: this.form.get('bags')?.value,
      tagNr: this.form.get('tagNr')?.value,
      bbLr: this.form.get('bbLr')?.value,
      location: this.form.get('location')?.value,
      completedAt: this.form.get('completedAt')?.value,
      description: this.form.get('location')?.value,
    });
    return;
    this.service
      .updateCheckin({
        room: this.form.get('room')?.value,
        roomReady: this.roomReady,
        name: this.form.get('name')?.value,
        arrivalTime: this.getDateTime(this.form.get('arrivalTime')?.value),
        bags: this.form.get('bags')?.value,
        tagNr: this.form.get('tagNr')?.value,
        bbLr: this.form.get('bbLr')?.value,
        location: this.form.get('location')?.value,
        completedAt: this.form.get('completedAt')?.value,
        description: this.form.get('location')?.value,
      })
      .subscribe(
        () => {
          this.snackbar.open('Discount update!', 'Cool', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        (err: HttpErrorResponse) => {
          console.error(err);
          this.snackbar.open('Failed to update :(', 'Imma try again later', {
            duration: 15000,
          });
          this.isLoading = false;
        }
      );
  }
}
