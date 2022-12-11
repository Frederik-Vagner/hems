import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDocument } from '@hems/interfaces';
import { SeeDocumentDialogComponent } from './seeDocumentDialog/see-document-dialog.component';

@Component({
  selector: 'hems-document-widget',
  templateUrl: './document-widget.component.html',
  styleUrls: ['./document-widget.component.scss'],
})
export class DocumentWidgetComponent {
  @Input() document!: IDocument;

  constructor(private dialog: MatDialog) {}

  openSeeDocumentDialog(document: IDocument): void {
    this.dialog.open(SeeDocumentDialogComponent, {
      width: '500px',
      data: document,
    });
  }
}
