import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BikeService } from '../../../services/bikes.service';

@Component({
  selector: 'hems-create-bike-dialog',
  templateUrl: './create-bike-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/checkbox.scss',
  ],
})
export class CreateBikeDialogComponent {
  createBikeForm: UntypedFormGroup;
  checked = true;
  isLoading = false;

  @ViewChild('numberOfBikes') numberOfBikesInput!: ElementRef;
  @ViewChild('pickUpTime') pickUpTimeInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('reservedBy') reservedByInput!: ElementRef;
  @ViewChild('bikeform') bikeformInput!: ElementRef;
  @ViewChild('returned') returnedInput!: ElementRef;

  constructor(
    private bikeService: BikeService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.createBikeForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[0-9]*$'),
      ]),
      numberOfBikes: new UntypedFormControl('', [Validators.required]),
      pickUpTime: new UntypedFormControl(new Date(), [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      reservedBy: new UntypedFormControl('', [Validators.required]),
      bikeForm: new UntypedFormControl('', []),
      returned: new UntypedFormControl('', []),
      comments: new UntypedFormControl('', []),
    });
  }

  onSubmit() {
    if (!this.createBikeForm.valid) {
      if (this.createBikeForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.createBikeForm.get('numberOfBikes')?.invalid) {
        this.numberOfBikesInput.nativeElement.focus();
      } else if (this.createBikeForm.get('pickUpTime')?.invalid) {
        this.pickUpTimeInput.nativeElement.focus();
      } else if (this.createBikeForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.createBikeForm.get('reservedBy')?.invalid) {
        this.reservedByInput.nativeElement.focus();
      } else if (this.createBikeForm.get('bikeForm')?.invalid) {
        this.bikeformInput.nativeElement.focus();
      } else if (this.createBikeForm.get('returned')?.invalid) {
        this.returnedInput.nativeElement.focus();
      }
    } else {
      this.createBikeListEntry();
    }
  }

  createBikeListEntry(): void {
    this.bikeService
      .createBike({
        room: this.createBikeForm.get('room')?.value,
        numberOfBikes: this.createBikeForm.get('numberOfBikes')?.value,
        pickUpTime: this.createBikeForm.get('pickUpTime')?.value,
        name: this.createBikeForm.get('name')?.value,
        reservedBy: this.createBikeForm.get('reservedBy')?.value,
        bikeForm: this.createBikeForm.get('bikeForm')?.value,
        returned: this.createBikeForm.get('returned')?.value,
        comments: this.createBikeForm.get('comments')?.value,
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Bike added!', 'Thanks', { duration: 5000 });
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
