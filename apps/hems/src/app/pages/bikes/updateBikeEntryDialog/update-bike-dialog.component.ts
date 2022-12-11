import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IBike } from '@hems/interfaces';
import { BikeService } from '../../../services/bikes.service';

@Component({
  selector: 'hems-update-bike-dialog',
  templateUrl: './update-bike-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/checkbox.scss',
  ],
})
export class UpdateBikeDialogComponent {
  updateBikeForm: UntypedFormGroup;
  checked = true;
  isLoading = false;
  bikeFormCompleted = false;

  @ViewChild('numberOfBikes') numberOfBikesInput!: ElementRef;
  @ViewChild('pickUpTime') pickUpTimeInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('reservedBy') reservedByInput!: ElementRef;
  @ViewChild('returned') returnedInput!: ElementRef;

  constructor(
    private bikeService: BikeService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: IBike
  ) {
    this.updateBikeForm = new UntypedFormGroup({
      room: new UntypedFormControl(data.room, [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[0-9]*$'),
      ]),
      numberOfBikes: new UntypedFormControl(data.numberOfBikes, [
        Validators.required,
      ]),
      pickUpTime: new UntypedFormControl(data.pickUpTime, [
        Validators.required,
      ]),
      name: new UntypedFormControl(data.name, [Validators.required]),
      reservedBy: new UntypedFormControl(data.reservedBy, [
        Validators.required,
      ]),
      returned: new UntypedFormControl(data.returned, []),
      comments: new UntypedFormControl(data.comments, []),
    });
  }

  onSubmit() {
    if (!this.updateBikeForm.valid) {
      if (this.updateBikeForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.updateBikeForm.get('numberOfBikes')?.invalid) {
        this.numberOfBikesInput.nativeElement.focus();
      } else if (this.updateBikeForm.get('pickUpTime')?.invalid) {
        this.pickUpTimeInput.nativeElement.focus();
      } else if (this.updateBikeForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.updateBikeForm.get('reservedBy')?.invalid) {
        this.reservedByInput.nativeElement.focus();
      }
    } else {
      this.updateBikeListEntry();
    }
  }

  updateBikeListEntry(): void {
    this.bikeService
      .updateBike(this.data.bikeId, {
        room: this.updateBikeForm.get('room')?.value,
        numberOfBikes: this.updateBikeForm.get('numberOfBikes')?.value,
        pickUpTime: new Date(this.updateBikeForm.get('pickUpTime')?.value),
        name: this.updateBikeForm.get('name')?.value,
        reservedBy: this.updateBikeForm.get('reservedBy')?.value,
        bikeFormCompleted: this.bikeFormCompleted,
        returned: this.updateBikeForm.get('returned')?.value,
        comments: this.updateBikeForm.get('comments')?.value,
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Bike updated!', 'Thanks', { duration: 5000 });
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
