import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
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
  selector: 'hems-create-checkout-dialog',
  templateUrl: './create-checkout-dialog.component.html',
  styleUrls: [
    '../../../../../../assets/checkbox.scss',
    '../../../../../../assets/dialog.scss',
  ],
})
export class CreateCheckoutDialogComponent {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;
  guestApprovedGDPR = false;

  constructor(
    private service: LuggageService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.form = new UntypedFormGroup({
      room: new UntypedFormControl('', [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      bags: new UntypedFormControl('', [Validators.required]),
      tagNr: new UntypedFormControl('', [Validators.required]),
      bbLr: new UntypedFormControl('', [Validators.required]),
      bbDown: new UntypedFormControl('', [Validators.required]),
      location: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl('', []),
    });
  }

  create(): void {
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
        bbDown: this.form.get('bbDown')?.value,
        location: this.form.get('location')?.value,
        description: this.form.get('description')?.value,
        luggageType: LuggageType.CHECKOUT,
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