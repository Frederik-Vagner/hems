import { Component, OnInit } from '@angular/core';
import {
    BikeSortOptions,
    IBike,
    SortOrder,
  } from '@hems/interfaces';
  import { BikeService } from '../../services/bikes.service';
  import { MatSnackBar } from '@angular/material/snack-bar';
  import { MatDialog } from '@angular/material/dialog';
  import { DisplayDateService } from '../../services/display-date.service';
  import { HttpErrorResponse } from '@angular/common/http';
import { CreateBikeDialogComponent } from './createBikeEntryDialog/create-bike-dialog.component';
import { UpdateBikeDialogComponent } from './updateBikeEntryDialog/update-bike-dialog.component';

@Component({
    selector: 'hems-bikes',
    templateUrl: './bikes.component.html',
    styleUrls: [
      '../../../assets/styles/table.scss',
      '../../../assets/styles/checkbox.scss',
    ],
  })

  export class BikesComponent implements OnInit {
    bikeList: IBike[] = [];
    displayDate = new Date();
    sortBy: BikeSortOptions = BikeSortOptions.CREATED_AT;
    sortOrder: SortOrder = SortOrder.ASCENDING;
    search = '';
  
    bikeColumns = [
    'numberOfBikes',
    'pickUpTime',
    'name',
    'room',
    'reservedBy',
    'bikeForm',
    'returned',
    'comments',
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
  
    updateBikeForm(bikeId: string, bikeForm: boolean): void {
      this.bikeService
        .updateBike(bikeId, {
          bikeForm: !bikeForm,
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
  
  
    openCreateBikeDialog() {
      this.dialog.open(CreateBikeDialogComponent, { width: '500px' });
    }
  
    openDialogEdit(bikeListEntry: IBike) {
      this.dialog.open(UpdateBikeDialogComponent, {
        width: '500px',
        data: bikeListEntry,
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
            this.bikeList = bikes;
            console.log('checkout', bikes);
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
  }
  