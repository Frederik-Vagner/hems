import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarService } from '../../../../services/car.service';

@Component({
  selector: 'hems-create-car-dialog',
  templateUrl: './create-car-dialog.component.html',
  styleUrls: ['../../../../../assets/dialog.scss'],
})
export class CreateCarDialogComponent {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;
  guestApprovedGDPR = false;

  constructor(
    private service: CarService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.form = new UntypedFormGroup({
      room: new UntypedFormControl('', [Validators.required]),
      tagNr: new UntypedFormControl('', [Validators.required]),
      arrivalDate: new UntypedFormControl(new Date(), [Validators.required]),
      departureDate: new UntypedFormControl(new Date(), [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      licensePlate: new UntypedFormControl('', [Validators.required]),
      expirationDate: new UntypedFormControl(new Date(), [Validators.required]),
      pickupTime: new UntypedFormControl(new Date(), [Validators.required]),
      deliveryTime: new UntypedFormControl(new Date(), [Validators.required]),
      bbDown: new UntypedFormControl('', [Validators.required]),
      bbUp: new UntypedFormControl('', [Validators.required]),
      location: new UntypedFormControl('', [Validators.required]),
      parkingLot: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', []),
      charged: new UntypedFormControl('', []),
    });
  }

  create(): void {
    this.isLoading = true;
    this.service
      .createCar({
        room: this.form.get('room')?.value,
        tagNr: this.form.get('tagNr')?.value,
        arrivalDate: new Date(this.form.get('arrivalDate')?.value),
        departureDate: new Date(this.form.get('departureDate')?.value),
        name: this.form.get('name')?.value,
        licensePlate: this.form.get('licensePlate')?.value,
        expirationDate: new Date(this.form.get('expirationDate')?.value),
        pickupTime: new Date(this.form.get('pickupTime')?.value),
        deliveryTime: new Date(this.form.get('deliveryTime')?.value),
        bbDown: this.form.get('bbDown')?.value,
        bbUp: this.form.get('bbUp')?.value,
        location: this.form.get('location')?.value,
        parkingLot: this.form.get('parkingLot')?.value,
        comments: this.form.get('comments')?.value,
        charged: this.form.get('charged')?.value,
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Car added!', 'cool', { duration: 5000 });
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
