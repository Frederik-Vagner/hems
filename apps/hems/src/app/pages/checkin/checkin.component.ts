import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@hems/interfaces';
import { LuggageService } from '../../services/luggage.service';
import { CreateCheckinDialogComponent } from './dialogs/checkin/createCheckinDialog/create-checkin-dialog.component';
import { UpdateCheckinDialogComponent } from './dialogs/checkin/updateCheckinDialog/update-checkin-dialog.component';
import { CreateCheckoutDialogComponent } from './dialogs/checkout/createCheckoutDialog/create-checkout-dialog.component';
import { UpdateCheckoutDialogComponent } from './dialogs/checkout/updateCheckoutDialog/update-checkout-dialog.component';

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
  ];

  checkoutColumns = [
    'room',
    'name',
    'bags',
    'tagNr',
    'bbDown',
    'location',
    'bbLr',
    'completedAt',
    'bbOut',
    'description',
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

  openCheckoutEditDialog(luggage: ILuggage): void {
    this.dialog.open(UpdateCheckoutDialogComponent, {
      width: '500px',
      data: luggage,
    });
  }

  openCheckoutCreateDialog(): void {
    this.dialog.open(CreateCheckoutDialogComponent, {
      width: '500px',
    });
  }

  formatDate(date: string, timeOnly: boolean = false): string {
    if (!date) {
      return '';
    }
    const parsedDate = new Date(date);
    return parsedDate.toLocaleString(undefined, {
      month: timeOnly ? undefined : '2-digit',
      day: timeOnly ? undefined : '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
    });
  }
}
