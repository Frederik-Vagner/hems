import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  selector: 'hems-create-long-term-dialog',
  templateUrl: './create-long-term-dialog.component.html',
  styleUrls: [
    '../../../../assets/checkbox.scss',
    '../../../../assets/dialog.scss',
  ],
})
export class CreateLongTermDialogComponent implements OnInit {
  createLongTermForm = new UntypedFormGroup({});
  guestHasApproved = false;

  constructor(
    private luggageService: LuggageService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.createLongTermForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      name: new UntypedFormControl('', [Validators.required]),
      bags: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', [Validators.required]),
      tagNr: new UntypedFormControl('', [Validators.required]),
      dateNeeded: new UntypedFormControl('', []),
      bbLr: new UntypedFormControl('', [Validators.required]),
      location: new UntypedFormControl('', [Validators.required]),
      // bbOut: new UntypedFormControl('', [Validators.required]),
      // dateOut: new UntypedFormControl('', []),
    });
  }

  onSubmit(): void {
    if (!this.guestHasApproved) {
      this.snackbar.open('Guest needs to approve storing their data.', 'Okay', {
        duration: 10000,
      });
      return;
    } else {
      this.createLongTermEntry();
    }
  }

  createLongTermEntry(): void {
    this.luggageService
      .create({
        room: this.createLongTermForm.get('room')?.value,
        roomReady: false,
        name: this.createLongTermForm.get('name')?.value,
        bags: this.createLongTermForm.get('bags')?.value,
        description: this.createLongTermForm.get('comments')?.value,
        tagNr: this.createLongTermForm.get('tagNr')?.value,
        arrivalTime: this.createLongTermForm.get('dateNeeded')?.value,
        bbLr: this.createLongTermForm.get('bbLr')?.value,
        location: this.createLongTermForm.get('location')?.value,
        bbOut: '-',
        bbDown: '-',
        luggageType: LuggageType.LONG_TERM,
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Long term item created!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackbar.open('Failed to create, please try again.', 'Okay', {
            duration: 10000,
          });
        },
      });
  }
}
