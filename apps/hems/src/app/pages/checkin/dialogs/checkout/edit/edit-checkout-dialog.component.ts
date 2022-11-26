import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
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
import { LuggageService } from '../../../../../services/luggage.service';

@Component({
  selector: 'hems-edit-checkout-dialog',
  templateUrl: './edit-checkout-dialog.component.html',
  styleUrls: ['./edit-checkout-dialog.component.css'],
})
export class EditCheckoutDialogComponent {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;
  luggageId: string;

  constructor(
    public dialogRef: MatDialogRef<EditCheckoutDialogComponent>,
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
      completedAt: new UntypedFormControl(data.completedAt, []),
      description: new UntypedFormControl(data.description, []),
    });
  }

  update(): void {
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
        description: this.form.get('location')?.value,
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Luggage item updated!', 'Cool', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackbar.open('Failed to update :(', 'Imma try again later', {
            duration: 15000,
          });
          this.isLoading = false;
        },
      });
  }
}
