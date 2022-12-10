import { Component, Input, OnInit, TemplateRef } from '@angular/core';

interface IAction {
  actionName: string;
  onClick: () => void;
  style: string;
}

@Component({
  selector: 'hems-widget-item',
  templateUrl: './widget-item.component.html',
  styleUrls: [],
})
export class WidgetItemComponent {
  @Input() title?: string;
  //@Input() content!: TemplateRef<unknown>;
  //@Input() actions?: IAction[];
}
