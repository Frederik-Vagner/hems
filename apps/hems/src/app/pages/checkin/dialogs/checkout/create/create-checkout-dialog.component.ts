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
  styleUrls: ['./create-checkout-dialog.component.css'],
})
export class CreateCheckoutDialogComponent {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;

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
      location: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl('', [Validators.required]),
      guestApprovedGDPR: new UntypedFormControl(null, [
        Validators.requiredTrue,
      ]),
    });
  }

  create(): void {
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
        description: this.form.get('location')?.value,
        luggageType: LuggageType.CHECKOUT,
        bbDown: ' ',
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Check In luggage item created!', 'Cool', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackbar.open('Failed to create :(', 'Imma try again later', {
            duration: 15000,
          });
          this.isLoading = false;
        },
      });
  }
}
