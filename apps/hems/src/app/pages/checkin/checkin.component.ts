import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage, LuggageSortOptions, SortOrder } from '@hems/interfaces';
import { DisplayDateService } from '../../services/display-date.service';
import { LuggageService } from '../../services/luggage.service';
import { CreateCheckinDialogComponent } from './createCheckinDialog/create-checkin-dialog.component';
import { UpdateCheckinDialogComponent } from './updateCheckinDialog/update-checkin-dialog.component';

@Component({
  selector: 'hems-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['../../../assets/styles/table.scss'],
})
export class CheckinComponent implements OnInit {
  checkinLuggage: ILuggage[] = [];
  listNames?: string[];
  isLoading = false;
  displayDate = new Date();
  sortBy: LuggageSortOptions = LuggageSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';

  checkinColumns = [
    'room',
    // 'roomReady',
    'name',
    'arrivalTime',
    'bags',
    'tagNr',
    'bbLr',
    'location',
    'completedAt',
    'bbOut',
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
      .getCheckin(this.displayDate, this.sortBy, this.sortOrder, this.search)
      .subscribe({
        next: (luggage) => {
          this.checkinLuggage = luggage;
        },
        error: (error) => {
          this.isLoading = false;
          console.error(error);
          this.snackBar.open(
            'Check In data have failed to load, please reload the page.',
            'Okay',
            {
              duration: 10000,
            }
          );
        },
      });
  }

  openTableInfo(): void {
    console.log('skrt');
  }

  openCheckinEditDialog(luggage: ILuggage): void {
    this.dialog.open(UpdateCheckinDialogComponent, {
      width: '500px',
      data: luggage,
    });
  }

  openCheckinCreateDialog(): void {
    this.dialog.open(CreateCheckinDialogComponent, {
      width: '500px',
    });
  }
}
