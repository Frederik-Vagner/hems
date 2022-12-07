import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@hems/interfaces';
import { LuggageService } from '../../../services/luggage.service';

@Component({
  selector: 'hems-update-long-term-dialog',
  templateUrl: './update-long-term-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/checkbox.scss',
    '../../../../assets/styles/dialog.scss',
  ],
})
export class UpdateLongTermDialogComponent implements OnInit {
  updateLongTermForm = new UntypedFormGroup({});
  guestHasApproved = false;
  maxDatetime = new Date(new Date().getTime() + 50000);

  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('bags') bagsInput!: ElementRef;
  @ViewChild('tagNr') tagNrInput!: ElementRef;
  @ViewChild('bbLr') bbLrInput!: ElementRef;
  @ViewChild('location') locationInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;

  constructor(
    private luggageService: LuggageService,
    @Inject(MAT_DIALOG_DATA) public data: ILuggage,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.updateLongTermForm = new UntypedFormGroup({
      dateIn: new UntypedFormControl(this.data.createdAt, [
        Validators.required,
      ]),
      room: new UntypedFormControl(this.data.room, [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      name: new UntypedFormControl(this.data.name, [Validators.required]),
      bags: new UntypedFormControl(this.data.bags, [Validators.required]),
      comments: new UntypedFormControl(this.data.comments, [
        Validators.required,
      ]),
      tagNr: new UntypedFormControl(this.data.tagNr, [Validators.required]),
      dateNeeded: new UntypedFormControl(this.data.arrivalTime, []),
      bbLr: new UntypedFormControl(this.data.bbLr, [Validators.required]),
      location: new UntypedFormControl(this.data.location, [
        Validators.required,
      ]),
      bbOut: new UntypedFormControl(this.data.bbOut, []),
      dateOut: new UntypedFormControl(this.data.completedAt, []),
    });
  }

  onSubmit(): void {
    if (!this.updateLongTermForm.valid) {
      if (this.updateLongTermForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.updateLongTermForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.updateLongTermForm.get('bags')?.invalid) {
        this.bagsInput.nativeElement.focus();
      } else if (this.updateLongTermForm.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.updateLongTermForm.get('bbLr')?.invalid) {
        this.bbLrInput.nativeElement.focus();
      } else if (this.updateLongTermForm.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      } else if (this.updateLongTermForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      }
    } else {
      this.updateLongTermEntry();
    }
  }

  updateLongTermEntry(): void {
    this.luggageService
      .update(this.data.luggageId, {
        room: this.updateLongTermForm.get('room')?.value,
        name: this.updateLongTermForm.get('name')?.value,
        bags: this.updateLongTermForm.get('bags')?.value,
        comments: this.updateLongTermForm.get('comments')?.value,
        tagNr: this.updateLongTermForm.get('tagNr')?.value,
        arrivalTime: this.updateLongTermForm.get('dateNeeded')?.value,
        bbLr: this.updateLongTermForm.get('bbLr')?.value.toUpperCase(),
        location: this.updateLongTermForm.get('location')?.value,
        bbOut: this.updateLongTermForm.get('bbOut')?.value.toUpperCase(),
        completedAt: this.updateLongTermForm.get('dateOut')?.value,
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Long term item updated!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackbar.open('Failed to update, please try again.', 'Okay', {
            duration: 10000,
          });
        },
      });
  }
}
