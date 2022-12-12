import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'hems-create-document-dialog',
  templateUrl: './create-document-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    './create-document-dialog.component.scss',
    '../../../../assets/styles/checkbox.scss',
  ],
})
export class CreateDocumentDialogComponent implements OnInit {
  createDocumentForm = new UntypedFormGroup({});
  showOnDashboard = false;
  isLoading = false;

  @ViewChild('title') titleInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.createDocumentForm = new UntypedFormGroup({
      title: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', [
        Validators.maxLength(1000),
        Validators.required,
      ]),
    });
  }

  onSubmit(): void {
    if (!this.createDocumentForm.valid) {
      if (this.createDocumentForm.get('room')?.invalid) {
        this.titleInput.nativeElement.focus();
      } else if (this.createDocumentForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      }
    } else {
      this.createDocument();
    }
  }

  createDocument(): void {
    this.isLoading = true;
  }
}
