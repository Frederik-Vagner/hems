import { Component } from '@angular/core';
import { IDocument } from '@hems/interfaces';

@Component({
  selector: 'hems-documents',
  templateUrl: './documents.component.html',
  styleUrls: [],
})
export class DocumentsComponent {
  documentList: IDocument[] = [];

}
