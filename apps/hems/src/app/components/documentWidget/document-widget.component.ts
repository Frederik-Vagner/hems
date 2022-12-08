import { Component, Input } from '@angular/core';
import { IDocument } from '@hems/interfaces';

@Component({
  selector: 'hems-document-widget',
  templateUrl: './document-widget.component.html',
  styleUrls: [],
})
export class DocumentWidgetComponent {
  @Input()
  document!: IDocument;
}
