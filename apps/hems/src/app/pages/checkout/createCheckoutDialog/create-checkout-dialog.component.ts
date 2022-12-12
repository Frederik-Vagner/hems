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
import { LuggageService } from '../../../services/luggage.service';

@Component({
  selector: 'hems-create-checkout-dialog',
  templateUrl: './create-checkout-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/checkbox.scss',
    '../../../../assets/styles/dialog.scss',
  ],
})
export class CreateCheckoutDialogComponent {
  createCheckoutForm: UntypedFormGroup;
  checked = true;
  isLoading = false;

  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('bags') bagsInput!: ElementRef;
  @ViewChild('tagNr') tagNrInput!: ElementRef;
  @ViewChild('bbLr') bbLrInput!: ElementRef;
  @ViewChild('bbDown') bbDownInput!: ElementRef;
  @ViewChild('location') locationInput!: ElementRef;

  constructor(
    private service: LuggageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.createCheckoutForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      name: new UntypedFormControl('', [Validators.required]),
      bags: new UntypedFormControl('', [Validators.required]),
      tagNr: new UntypedFormControl('', [Validators.required]),
      bbLr: new UntypedFormControl('', [Validators.required]),
      bbDown: new UntypedFormControl('', [Validators.required]),
      bbOut: new UntypedFormControl('', []),
      completedAt: new UntypedFormControl('', []),
      location: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', []),
    });
  }

  onSubmit(): void {
    if (!this.createCheckoutForm.valid) {
      if (this.createCheckoutForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.createCheckoutForm.get('bags')?.invalid) {
        this.bagsInput.nativeElement.focus();
      } else if (this.createCheckoutForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.createCheckoutForm.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.createCheckoutForm.get('bbDown')?.invalid) {
        this.bbDownInput.nativeElement.focus();
      } else if (this.createCheckoutForm.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      } else if (this.createCheckoutForm.get('bbLr')?.invalid) {
        this.bbLrInput.nativeElement.focus();
      }
    } else {
      this.createCheckout();
    }
  }

  createCheckout(): void {
    this.isLoading = true;
    this.service
      .create({
        room: this.createCheckoutForm.get('room')?.value,
        // roomReady: this.createCheckoutForm.get('roomReady')?.value,
        name: this.createCheckoutForm.get('name')?.value,
        arrivalTime: new Date(this.createCheckoutForm.get('arrivalTime')?.value),
        bags: this.createCheckoutForm.get('bags')?.value,
        tagNr: this.createCheckoutForm.get('tagNr')?.value,
        bbLr: this.createCheckoutForm.get('bbLr')?.value.toUpperCase(),
        bbDown: this.createCheckoutForm.get('bbDown')?.value.toUpperCase(),
        bbOut: this.createCheckoutForm.get('bbOut')?.value.toUpperCase(),
        completedAt: this.createCheckoutForm.get('completedAt')?.value,
        location: this.createCheckoutForm.get('location')?.value.toUpperCase(),
        comments: this.createCheckoutForm.get('comments')?.value,
        luggageType: LuggageType.CHECKOUT,
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Check In luggage item created!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackBar.open('Failed to create, please try again.', 'Okay', {
            duration: 10000,
          });
          this.isLoading = false;
        },
      });
  }
}
