import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    '../../../../assets/styles/checkbox.scss',
    '../../../../assets/styles/dialog.scss',
  ],
})
export class CreateLongTermDialogComponent implements OnInit {
  createLongTermForm = new UntypedFormGroup({});

  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('bags') bagsInput!: ElementRef;
  @ViewChild('tagNr') tagNrInput!: ElementRef;
  @ViewChild('bbLr') bbLrInput!: ElementRef;
  @ViewChild('location') locationInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;

  constructor(
    private luggageService: LuggageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.createLongTermForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      dateIn: new UntypedFormControl(new Date(), [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      bags: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', []),
      tagNr: new UntypedFormControl('', [Validators.required]),
      bbLr: new UntypedFormControl('', [Validators.required]),
      location: new UntypedFormControl('', [Validators.required]),
      dateNeeded: new UntypedFormControl('', []),
    });
  }

  onSubmit(): void {
    if (!this.createLongTermForm.valid) {
      if (this.createLongTermForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.createLongTermForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.createLongTermForm.get('bags')?.invalid) {
        this.bagsInput.nativeElement.focus();
      } else if (this.createLongTermForm.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.createLongTermForm.get('bbLr')?.invalid) {
        this.bbLrInput.nativeElement.focus();
      } else if (this.createLongTermForm.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      } else if (this.createLongTermForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      }
    } else {
      this.createLongTermEntry();
    }
  }

  createLongTermEntry(): void {
    this.luggageService
      .create({
        room: this.createLongTermForm.get('room')?.value,
        // roomReady: false,
        name: this.createLongTermForm.get('name')?.value,
        arrivalTime: this.createLongTermForm.get('dateIn')?.value,
        bags: this.createLongTermForm.get('bags')?.value,
        comments: this.createLongTermForm.get('comments')?.value,
        tagNr: this.createLongTermForm.get('tagNr')?.value,
        dateNeeded: this.createLongTermForm.get('dateNeeded')?.value,
        bbLr: this.createLongTermForm.get('bbLr')?.value
          ? this.createLongTermForm.get('bbLr')?.value.toUpperCase()
          : '-',
        location: this.createLongTermForm.get('location')?.value
          ? this.createLongTermForm.get('location')?.value.toUpperCase()
          : '-',
        luggageType: LuggageType.LONG_TERM,
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Long term item created!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackBar.open('Failed to create, please try again.', 'Okay', {
            duration: 10000,
          });
        },
      });
  }
}
