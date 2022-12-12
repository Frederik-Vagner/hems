import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DocumentSortOptions, IDocument, SortOrder } from '@hems/interfaces';
import { DocumentsService } from '../../services/documents.service';
import { CreateDocumentDialogComponent } from './createDocumentDialog/create-document-dialog.component';

@Component({
  selector: 'hems-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss','../../../assets/styles/table.scss' ],
})
export class DocumentsComponent implements OnInit {
  documentList: IDocument[] = [];
  sortBy: DocumentSortOptions = DocumentSortOptions.LAST_VIEWED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';

  constructor(
    private documentService: DocumentsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchDocuments();
  }

  fetchDocuments(): void {
    this.documentService
      .getDocuments(this.sortBy, this.sortOrder, this.search)
      .subscribe({
        next: (documents) => {
          this.documentList = documents;
          console.log('Fetched Documents: ', documents);
        },
        error: (error) => {
          console.error(error);
          this.snackBar.open('Documents have failed to load', 'Okay', {
            duration: 10000,
          });
        },
      });
  }

  openCreateDocumentDialog(): void {
    this.dialog.open(CreateDocumentDialogComponent, {
      width: '500px',
    })
  }
}
