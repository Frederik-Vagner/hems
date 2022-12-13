import { Component, OnInit } from '@angular/core';
import { BikeSortOptions, IBike, SortOrder, TableInfoOptions } from '@hems/interfaces';
import { BikeService } from '../../services/bikes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DisplayDateService } from '../../services/display-date.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CreateBikeDialogComponent } from './createBikeEntryDialog/create-bike-dialog.component';
import { UpdateBikeDialogComponent } from './updateBikeEntryDialog/update-bike-dialog.component';
import { filterByCompletedAtAndOrderResults } from '../../utils/order.util';
import { TableInfoDialogComponent } from '../../components/tableInfoDialog/table-info-dialog.component';

@Component({
  selector: 'hems-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: [
    '../../../assets/styles/table.scss',
    '../../../assets/styles/checkbox.scss',
  ],
})
export class BikesComponent implements OnInit {
  originalBikeList: IBike[] = [];
  filteredBikeList: IBike[] = [];
  displayDate = new Date();
  sortBy: BikeSortOptions = BikeSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';

  bikeColumns = [
    'room',
    'name',
    'reservedBy',
    'nrOfBikes',
    'pickUpTime',
    'completedAt',
    'comments',
    'bikeFormCompleted',
  ];

  constructor(
    private readonly bikeService: BikeService,
    private displayDateService: DisplayDateService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchBikeList();
    });
  }

  ngOnInit(): void {
    this.fetchBikeList();
  }

  fetchBikeList(): void {
    this.bikeService
      .getBike(this.displayDate, this.sortBy, this.sortOrder, this.search)
      .subscribe({
        next: (bikes) => {
          this.originalBikeList = bikes;
          this.filteredBikeList = filterByCompletedAtAndOrderResults(
            this.originalBikeList,
            false,
            this.displayDate
          );
          console.log('bikes', bikes);
        },
        error: (error) => {
          console.error(error);
          this.snackBar.open(
            'Bike data has failed to load, please try checking your connection.',
            'Okay',
            {
              duration: 10000,
            }
          );
        },
      });
  }

  updateBikeFormCompleted(bikeId: string, bikeFormCompleted: boolean): void {
    this.bikeService
      .updateBike(bikeId, {
        bikeFormCompleted: !bikeFormCompleted,
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Bike updated!', 'Thanks', { duration: 5000 });
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackbar.open('Failed to update, please try again.', 'Okay', {
            duration: 15000,
          });
        },
      });
  }

  openTableInfo(): void {
    this.dialog.open(TableInfoDialogComponent, {
      data: TableInfoOptions.BIKES,
      width: '500px',
    });
  }

  openCreateBikeDialog() {
    this.dialog.open(CreateBikeDialogComponent, { width: '500px' });
  }

  openDialogEdit(bikeListEntry: IBike) {
    this.dialog.open(UpdateBikeDialogComponent, {
      width: '500px',
      data: bikeListEntry,
    });
  }
}
