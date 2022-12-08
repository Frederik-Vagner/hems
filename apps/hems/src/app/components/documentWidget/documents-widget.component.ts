import { Component, Input } from '@angular/core';
import { IDocument } from '@hems/interfaces';

@Component({
  selector: 'hems-documents-widget',
  templateUrl: './documents-widget.component.html',
  styleUrls: [],
})
export class DocumentsWidgetComponent {
  @Input()
  document!: IDocument;
}
