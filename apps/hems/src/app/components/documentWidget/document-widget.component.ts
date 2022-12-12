import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDocument } from '@hems/interfaces';
import { SeeDocumentDialogComponent } from './dialogs/seeDocumentDialog/see-document-dialog.component';

@Component({
  selector: 'hems-document-widget',
  templateUrl: './document-widget.component.html',
  styleUrls: ['./document-widget.component.scss'],
})
export class DocumentWidgetComponent {
  @Input() document!: IDocument;

  constructor(private dialog: MatDialog) {}

  openSeeDocumentDialog(documentId: string): void {
    this.dialog.open(SeeDocumentDialogComponent, {
      data: documentId,
    });
  }
}
