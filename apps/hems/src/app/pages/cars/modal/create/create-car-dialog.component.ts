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
  createCarForm: UntypedFormGroup;
  checked = true;
  isLoading = false;
  guestApprovedGDPR = false;

  constructor(
    private service: CarService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.createCarForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [Validators.required]),
      tagNr: new UntypedFormControl('', [Validators.required]),
      arrivalDate: new UntypedFormControl(new Date(), [Validators.required]),
      departureDate: new UntypedFormControl(new Date(), [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      licensePlate: new UntypedFormControl('', [Validators.required]),
      expirationDate: new UntypedFormControl('', []),
      pickupTime: new UntypedFormControl('', []),
      deliveryTime: new UntypedFormControl('', []),
      bbDown: new UntypedFormControl('', []),
      bbUp: new UntypedFormControl('', []),
      location: new UntypedFormControl('', [Validators.required]),
      parkingLot: new UntypedFormControl('', []),
      bbOut: new UntypedFormControl('', []),
      comments: new UntypedFormControl('', []),
      charged: new UntypedFormControl('', []),
    });
  }

  create(): void {
    this.isLoading = true;
    this.service
      .createCar({
        room: this.createCarForm.get('room')?.value,
        tagNr: this.createCarForm.get('tagNr')?.value,
        arrivalDate: new Date(this.createCarForm.get('arrivalDate')?.value),
        departureDate: new Date(this.createCarForm.get('departureDate')?.value),
        name: this.createCarForm.get('name')?.value,
        licensePlate: this.createCarForm.get('licensePlate')?.value,
        expirationDate: new Date(this.createCarForm.get('expirationDate')?.value),
        pickupTime: new Date(this.createCarForm.get('pickupTime')?.value),
        deliveryTime: new Date(this.createCarForm.get('deliveryTime')?.value),
        bbDown: this.createCarForm.get('bbDown')?.value,
        bbUp: this.createCarForm.get('bbUp')?.value,
        location: this.createCarForm.get('location')?.value,
        parkingLot: this.createCarForm.get('parkingLot')?.value,
        bbOut: this.createCarForm.get('bbOut')?.value,
        comments: this.createCarForm.get('comments')?.value,
        charged: this.createCarForm.get('charged')?.value,
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
