import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@hems/interfaces';
import { LuggageService } from '../../../services/luggage.service';

@Component({
  selector: 'hems-update-checkout-dialog',
  templateUrl: './update-checkout-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/checkbox.scss',
    '../../../../assets/styles/dialog.scss',
  ],
})
export class UpdateCheckoutDialogComponent {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;
  luggageId: string;

  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('bags') bagsInput!: ElementRef;
  @ViewChild('tagNr') tagNrInput!: ElementRef;
  @ViewChild('bbLr') bbLrInput!: ElementRef;
  @ViewChild('bbDown') bbDownInput!: ElementRef;
  @ViewChild('location') locationInput!: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<UpdateCheckoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ILuggage,
    private service: LuggageService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.luggageId = data.luggageId;
    this.form = new UntypedFormGroup({
      room: new UntypedFormControl(data.room, [Validators.required]),
      name: new UntypedFormControl(data.name, [Validators.required]),
      bags: new UntypedFormControl(data.bags, [Validators.required]),
      tagNr: new UntypedFormControl(data.tagNr, [Validators.required]),
      bbLr: new UntypedFormControl(data.bbLr, [Validators.required]),
      bbDown: new UntypedFormControl(data.bbDown, [Validators.required]),
      bbOut: new UntypedFormControl(data.bbOut, []),
      location: new UntypedFormControl(data.location, [Validators.required]),
      completedAt: new UntypedFormControl(new Date(), []),
      comments: new UntypedFormControl(data.comments, []),
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      if (this.form.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.form.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.form.get('bags')?.invalid) {
        this.bagsInput.nativeElement.focus();
      } else if (this.form.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.form.get('bbDown')?.invalid) {
        this.bbDownInput.nativeElement.focus();
      } else if (this.form.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      } else if (this.form.get('bbLr')?.invalid) {
        this.bbLrInput.nativeElement.focus();
      }
    } else {
      this.updateCheckout();
    }
  }

  updateCheckout(): void {
    this.isLoading = true;
    this.service
      .update(this.luggageId, {
        room: this.form.get('room')?.value,
        name: this.form.get('name')?.value,
        bags: this.form.get('bags')?.value,
        tagNr: this.form.get('tagNr')?.value,
        bbLr: this.form.get('bbLr')?.value,
        bbDown: this.form.get('bbDown')?.value,
        bbOut: this.form.get('bbOut')?.value,
        location: this.form.get('location')?.value,
        completedAt: this.form.get('completedAt')?.value,
        comments:
          this.form.get('comments')?.value.toString().length > 1
            ? this.form.get('comments')?.value
            : '-',
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Luggage item updated!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackbar.open('Failed to update, please try again.', 'Okay', {
            duration: 10000,
          });
          this.isLoading = false;
        },
      });
  }
}
