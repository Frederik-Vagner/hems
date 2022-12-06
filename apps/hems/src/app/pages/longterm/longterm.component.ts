import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ILuggage,
  LuggageSortOptions,
  SortOrder,
  TableInfoOptions,
} from '@hems/interfaces';
import { TableInfoDialogComponent } from '../../components/tableInfoDialog/table-info-dialog.component';
import { DisplayDateService } from '../../services/display-date.service';
import { LuggageService } from '../../services/luggage.service';
import { CreateLongTermDialogComponent } from './createLongTermDialog/create-long-term-dialog.component';
import { UpdateLongTermDialogComponent } from './updateLongTermDialog/update-long-term-dialog.component';

@Component({
  selector: 'hems-longterm',
  templateUrl: 'longterm.component.html',
  styleUrls: ['../../../assets/styles/table.scss'],
})
export class LongtermComponent implements OnInit {
  luggage: ILuggage[] = [];
  currentLuggages?: ILuggage[];
  listNames?: string[];
  chosenListName = '';
  isLoading = false;
  sortBy: LuggageSortOptions | undefined;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  displayDate = new Date();

  displayedColumns = [
    'dateIn',
    'room',
    'name',
    'nrOfBags',
    'tagNr',
    'dateNeeded',
    'bbLr',
    'location',
    'bbOut',
    'dateOut',
    'comments',
  ];

  constructor(
    private readonly luggageService: LuggageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private displayDateService: DisplayDateService
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchLuggage();
    });
  }

  ngOnInit(): void {
    this.fetchLuggage();
  }

  fetchLuggage(): void {
    this.isLoading = true;
    this.luggageService
      .getLongTerm(this.displayDate, this.sortBy, this.sortOrder, this.search)
      .subscribe({
        next: (luggage) => {
          this.luggage = luggage;
        },
        error: (error) => {
          this.isLoading = false;
          console.error(error);
          this.snackBar.open('Luggages have failed to load', 'Okay', {
            duration: 10000,
          });
        },
      });
  }

  openTableInfo(): void {
    this.dialog.open(TableInfoDialogComponent, {
      data: TableInfoOptions.LONG_TERM,
      width: '500px',
    });
  }

  editLongTermListEntry(luggage: ILuggage): void {
    this.dialog.open(UpdateLongTermDialogComponent, {
      width: '500px',
      data: luggage,
    });
  }

  createLongTermEntry(): void {
    this.dialog.open(CreateLongTermDialogComponent, {
      width: '500px',
    });
  }
}
