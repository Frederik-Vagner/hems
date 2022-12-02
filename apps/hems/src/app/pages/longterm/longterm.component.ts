import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage, LuggageSortOptions, SortOrder } from '@hems/interfaces';
import { DisplayDateService } from '../../services/display-date.service';
import { LuggageService } from '../../services/luggage.service';
import { CreateLongTermDialogComponent } from './createLongTermDialog/create-long-term-dialog.component';
import { UpdateLongTermDialogComponent } from './updateLongTermDialog/update-long-term-dialog.component';

@Component({
  selector: 'hems-longterm',
  templateUrl: 'longterm.component.html',
  styleUrls: ['../../../assets/table.scss'],
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
    'description',
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
    console.log('running');
    console.log(this.displayDate, this.sortBy, this.sortOrder, this.search);

    this.isLoading = true;
    this.luggageService
      .getLongTerm(this.displayDate, this.sortBy, this.sortOrder, this.search)
      .subscribe({
        next: (luggage) => {
          this.luggage = luggage;
          console.log(luggage);
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
