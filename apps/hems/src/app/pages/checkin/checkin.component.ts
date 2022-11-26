import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@hems/interfaces';
import { LuggageService } from '../../services/luggage.service';
import { CreateCheckinDialogComponent } from './dialogs/checkin/create/create-checkin-dialog.component';
import { EditCheckinDialogComponent } from './dialogs/checkin/edit/edit-checkin-dialog.component';

@Component({
  selector: 'hems-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {
  checkinLuggage: ILuggage[] = [];
  checkoutLuggage: ILuggage[] = [];
  listNames?: string[];
  chosenListName = '';
  isLoadingCheckin = false;
  isLoadingCheckout = false;

  checkinColumns = [
    'room',
    'roomReady',
    'name',
    'arrivalTime',
    'bags',
    'tagNr',
    'bbLr',
    'location',
    'completedAt',
    'bbUp',
    'description',
    'actions',
  ];

  checkoutColumns = [
    'room',
    'name',
    'arrivalTime',
    'bags',
    'tagNr',
    'bbDown',
    'location',
    'bbLr',
    'completedAt',
    'description',
    'actions',
  ];

  constructor(
    private readonly luggageService: LuggageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchLuggage();
  }

  fetchLuggage(): void {
    this.isLoadingCheckin = true;
    this.isLoadingCheckout = true;
    this.luggageService.getCheckin(new Date()).subscribe({
      next: (luggage) => {
        this.checkinLuggage = luggage;
        console.log('checkin', luggage);
        this.reorderCheckinData();
      },
      error: (error) => {
        this.isLoadingCheckin = false;
        console.error(error);
        this.snackBar.open(
          'Check In data have failed to load',
          'Imma try again later',
          {
            duration: 10000,
          }
        );
      },
    });

    this.luggageService.getCheckout(new Date()).subscribe({
      next: (luggage) => {
        this.checkoutLuggage = luggage;
        console.log('checkout', luggage);
        this.reorderCheckoutData();
      },
      error: (error) => {
        this.isLoadingCheckout = false;
        console.error(error);
        this.snackBar.open(
          'Check Out data have failed to load',
          'Imma try again later',
          {
            duration: 10000,
          }
        );
      },
    });
  }

  /**
   * Makes it so completed tasks are at the bottom of the list
   */
  reorderCheckinData(): void {
    const uncompletedItems = this.checkinLuggage.filter(
      (item) => !item.completedAt
    );
    const completedItems = this.checkinLuggage.filter(
      (item) => item.completedAt
    );
    this.checkinLuggage = uncompletedItems.concat(completedItems);
  }

  /**
   * Makes it so completed tasks are at the bottom of the list
   */
  reorderCheckoutData(): void {
    const uncompletedItems = this.checkoutLuggage.filter(
      (item) => !item.completedAt
    );
    const completedItems = this.checkoutLuggage.filter(
      (item) => item.completedAt
    );
    this.checkoutLuggage = uncompletedItems.concat(completedItems);
  }

  openCheckinEditDialog(luggage: ILuggage): void {
    this.dialog.open(EditCheckinDialogComponent, {
      width: '500px',
      data: luggage,
    });
  }

  openCheckinCreateDialog(): void {
    this.dialog.open(CreateCheckinDialogComponent, {
      width: '500px',
    });
  }

  openCheckoutEditDialog(): void {
    console.log('WIP');
  }

  openCheckoutCreateDialog(): void {
    console.log('WIP');
  }
}
