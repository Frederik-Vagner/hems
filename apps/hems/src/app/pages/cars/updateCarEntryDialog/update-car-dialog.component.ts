import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICar } from '@hems/interfaces';
import { CarService } from 'apps/hems/src/app/services/car.service';

@Component({
  selector: 'hems-update-car-dialog',
  templateUrl: './update-car-dialog.component.html',
  styleUrls: ['../../../../assets/dialog.scss'],
})
export class UpdateCarDialogComponent {
  updateCarForm: UntypedFormGroup;
  checked = true;
  isLoading = false;
  guestHasApproved = false;

  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('tagNr') tagNrInput!: ElementRef;
  @ViewChild('arrivalDate') arrivalDateInput!: ElementRef;
  @ViewChild('departureDate') departureDateInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('licensePlate') licensePlateInput!: ElementRef;
  @ViewChild('expirationDate') expirationDateInput!: ElementRef;
  @ViewChild('pickupTime') pickupTimeInput!: ElementRef;
  @ViewChild('bbDown') bbDownInput!: ElementRef;
  @ViewChild('location') locationInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;

  constructor(
    private carService: CarService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: ICar
  ) {
    this.updateCarForm = new UntypedFormGroup({
      room: new UntypedFormControl(data.room, [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[0-9]*$'),
      ]),
      tagNr: new UntypedFormControl(data.tagNr, [Validators.required]),
      arrivalDate: new UntypedFormControl(data.arrivalDate, [
        Validators.required,
      ]),
      departureDate: new UntypedFormControl(data.departureDate, [
        Validators.required,
      ]),
      name: new UntypedFormControl(data.name, [Validators.required]),
      licensePlate: new UntypedFormControl(data.licensePlate, [
        Validators.required,
      ]),
      expirationDate: new UntypedFormControl(data.expirationDate, []),
      pickupTime: new UntypedFormControl(data.pickupTime, []),
      deliveryTime: new UntypedFormControl(data.deliveryTime, []),
      bbDown: new UntypedFormControl(data.bbDown, []),
      bbUp: new UntypedFormControl(data.bbUp, []),
      location: new UntypedFormControl(data.location, [Validators.required]),
      parkingLot: new UntypedFormControl(data.parkingLot, []),
      bbOut: new UntypedFormControl(data.bbOut, []),
      comments: new UntypedFormControl(data.comments, []),
      charged: new UntypedFormControl(data.charged, []),
    });
  }

  onSubmit() {
    if (!this.updateCarForm.valid) {
      if (this.updateCarForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.updateCarForm.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.updateCarForm.get('arrivalDate')?.invalid) {
        this.arrivalDateInput.nativeElement.focus();
      } else if (this.updateCarForm.get('departureDate')?.invalid) {
        this.departureDateInput.nativeElement.focus();
      } else if (this.updateCarForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.updateCarForm.get('licensePlate')?.invalid) {
        this.licensePlateInput.nativeElement.focus();
      } else if (this.updateCarForm.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      }
    } else {
      this.updateCarListEntry();
    }
  }

  updateCarListEntry(): void {
    const skrt = {
      room: this.updateCarForm.get('room')?.value,
      tagNr: this.updateCarForm.get('tagNr')?.value,
      arrivalDate: new Date(this.updateCarForm.get('arrivalDate')?.value),
      departureDate: new Date(this.updateCarForm.get('departureDate')?.value),
      name: this.updateCarForm.get('name')?.value,
      licensePlate: this.updateCarForm.get('licensePlate')?.value,
      expirationDate: new Date(this.updateCarForm.get('expirationDate')?.value),
      pickupTime: new Date(this.updateCarForm.get('pickupTime')?.value),
      deliveryTime: new Date(this.updateCarForm.get('deliveryTime')?.value),
      bbDown: this.updateCarForm.get('bbDown')?.value,
      bbUp: this.updateCarForm.get('bbUp')?.value,
      location: this.updateCarForm.get('location')?.value,
      parkingLot: this.updateCarForm.get('parkingLot')?.value,
      bbOut: this.updateCarForm.get('bbOut')?.value,
      comments: this.updateCarForm.get('comments')?.value,
      charged: this.updateCarForm.get('charged')?.value,
    };
    console.log(skrt);
    

    this.carService
      .updateCar(this.data.carId, {
        room: this.updateCarForm.get('room')?.value,
        tagNr: this.updateCarForm.get('tagNr')?.value,
        arrivalDate: new Date(this.updateCarForm.get('arrivalDate')?.value),
        departureDate: new Date(this.updateCarForm.get('departureDate')?.value),
        name: this.updateCarForm.get('name')?.value,
        licensePlate: this.updateCarForm.get('licensePlate')?.value,
        expirationDate: new Date(
          this.updateCarForm.get('expirationDate')?.value
        ),
        pickupTime: new Date(this.updateCarForm.get('pickupTime')?.value),
        deliveryTime: new Date(this.updateCarForm.get('deliveryTime')?.value),
        bbDown: this.updateCarForm.get('bbDown')?.value,
        bbUp: this.updateCarForm.get('bbUp')?.value,
        location: this.updateCarForm.get('location')?.value,
        parkingLot: this.updateCarForm.get('parkingLot')?.value,
        bbOut: this.updateCarForm.get('bbOut')?.value,
        comments: this.updateCarForm.get('comments')?.value,
        charged: this.updateCarForm.get('charged')?.value,
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Car updated!', 'Thanks', { duration: 5000 });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackbar.open('Failed to update, please try again.', 'Okay', {
            duration: 15000,
          });
          this.isLoading = false;
        },
      });
  }
}
