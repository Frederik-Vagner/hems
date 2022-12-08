import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDocument } from '@hems/interfaces';
import { DocumentsService } from '../../services/documents.service';

@Component({
  selector: 'hems-documents',
  templateUrl: './documents.component.html',
  styleUrls: [],
})
export class DocumentsComponent implements OnInit {
  documentList: IDocument[] = [];

  constructor(
    private documentService: DocumentsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchDocuments();
  }

  fetchDocuments(): void {
    this.documentService.getDocuments().subscribe({
      next: (documents) => {
        this.documentList = documents;        
      },
      error: (error) => {
        console.error(error);
        this.snackBar.open('Documents have failed to load', 'Okay', {
          duration: 10000,
        });
      },
    });
  }
}
