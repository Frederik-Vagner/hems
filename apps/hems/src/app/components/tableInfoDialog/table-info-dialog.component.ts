import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableInfoOptions } from '@hems/interfaces';

@Component({
  selector: 'hems-table-info-dialog',
  templateUrl: './table-info-dialog.component.html',
  styleUrls: ['./table-info-dialog.component.scss', '../../../assets/styles/dialog.scss'],
})
export class TableInfoDialogComponent {
  tableName: TableInfoOptions;

  constructor(@Inject(MAT_DIALOG_DATA) public data: TableInfoOptions) {
    this.tableName = data;
  }
}
