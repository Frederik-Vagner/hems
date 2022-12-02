import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'hems-create-car-dialog',
  templateUrl: './create-car-dialog.component.html',
  styleUrls: [
    '../../../../assets/dialog.scss',
    '../../../../assets/checkbox.scss',
  ],
})
export class CreateCarDialogComponent {
  createCarForm: UntypedFormGroup;
  checked = true;
  isLoading = false;
  guestHasApproved = false;

  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('tagNr') tagNrInput!: ElementRef;
  @ViewChild('arrivalDate') arrivalDateInput!: ElementRef;
  @ViewChild('departureDate') departureDateInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('licensePlate') licensePlateInput!: ElementRef;
  @ViewChild('location') locationInput!: ElementRef;

  constructor(
    private carService: CarService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.createCarForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[0-9]*$'),
      ]),
      tagNr: new UntypedFormControl('', [Validators.required]),
      arrivalDate: new UntypedFormControl(new Date(), [Validators.required]),
      departureDate: new UntypedFormControl('', [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      licensePlate: new UntypedFormControl('', [Validators.required]),
      expirationDate: new UntypedFormControl('', []),
      pickupTime: new UntypedFormControl('', []),
      deliveryTime: new UntypedFormControl('', []),
      bbDown: new UntypedFormControl('', []),
      location: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', []),
    });
  }

  onSubmit() {
    if (!this.guestHasApproved) {
      this.snackbar.open('Guest needs to approve storing their data.', 'Okay', {
        duration: 10000,
      });
      return;
    }

    if (!this.createCarForm.valid) {
      if (this.createCarForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.createCarForm.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.createCarForm.get('arrivalDate')?.invalid) {
        this.arrivalDateInput.nativeElement.focus();
      } else if (this.createCarForm.get('departureDate')?.invalid) {
        this.departureDateInput.nativeElement.focus();
      } else if (this.createCarForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.createCarForm.get('licensePlate')?.invalid) {
        this.licensePlateInput.nativeElement.focus();
      } else if (this.createCarForm.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      }
    } else {
      this.createCarListEntry();
    }
  }

  createCarListEntry(): void {
    const skrt = {
      room: this.createCarForm.get('room')?.value,
      tagNr: this.createCarForm.get('tagNr')?.value,
      arrivalDate: new Date(this.createCarForm.get('arrivalDate')?.value),
      departureDate: new Date(this.createCarForm.get('departureDate')?.value),
      name: this.createCarForm.get('name')?.value,
      licensePlate: this.createCarForm.get('licensePlate')?.value,
      expirationDate: new Date(
        this.createCarForm.get('expirationDate')?.value
      ),
      pickupTime: new Date(this.createCarForm.get('pickupTime')?.value),
      deliveryTime: new Date(this.createCarForm.get('deliveryTime')?.value),
      bbDown: this.createCarForm.get('bbDown')?.value,
      bbUp: this.createCarForm.get('bbUp')?.value,
      location: this.createCarForm.get('location')?.value,
      parkingLot: this.createCarForm.get('parkingLot')?.value,
      bbOut: this.createCarForm.get('bbOut')?.value,
      comments: this.createCarForm.get('comments')?.value,
      charged: this.createCarForm.get('charged')?.value,
    };
    console.log(skrt);
    
    this.carService
      .createCar({
        room: this.createCarForm.get('room')?.value,
        tagNr: this.createCarForm.get('tagNr')?.value,
        arrivalDate: new Date(this.createCarForm.get('arrivalDate')?.value),
        departureDate: new Date(this.createCarForm.get('departureDate')?.value),
        name: this.createCarForm.get('name')?.value,
        licensePlate: this.createCarForm.get('licensePlate')?.value,
        expirationDate: new Date(
          this.createCarForm.get('expirationDate')?.value
        ),
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
          this.snackbar.open('Car added!', 'Thanks', { duration: 5000 });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackbar.open('Failed to create, please try again.', 'Okay', {
            duration: 15000,
          });
          this.isLoading = false;
        },
      });
  }
}
