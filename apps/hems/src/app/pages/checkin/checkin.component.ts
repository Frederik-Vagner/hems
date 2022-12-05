import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@hems/interfaces';
import { DisplayDateService } from '../../services/display-date.service';
import { LuggageService } from '../../services/luggage.service';
import { CreateCheckinDialogComponent } from './dialogs/checkinDialogs/createCheckinDialog/create-checkin-dialog.component';
import { UpdateCheckinDialogComponent } from './dialogs/checkinDialogs/updateCheckinDialog/update-checkin-dialog.component';
import { CreateCheckoutDialogComponent } from './dialogs/checkoutDialogs/createCheckoutDialog/create-checkout-dialog.component';
import { UpdateCheckoutDialogComponent } from './dialogs/checkoutDialogs/updateCheckoutDialog/update-checkout-dialog.component';

@Component({
  selector: 'hems-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['../../../assets/styles/table.scss'],
})
export class CheckinComponent implements OnInit {
  checkinLuggage: ILuggage[] = [];
  checkoutLuggage: ILuggage[] = [];
  listNames?: string[];
  isLoadingCheckin = false;
  isLoadingCheckout = false;
  displayDate = new Date();

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
    'bbOut',
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
    this.isLoadingCheckin = true;
    this.isLoadingCheckout = true;
    this.luggageService.getCheckin(this.displayDate).subscribe({
      next: (luggage) => {
        this.checkinLuggage = luggage;
        console.log(this.checkinLuggage)
      },
      error: (error) => {
        this.isLoadingCheckin = false;
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

    this.luggageService.getCheckout(this.displayDate).subscribe({
      next: (luggage) => {
        this.checkoutLuggage = luggage;
      },
      error: (error) => {
        this.isLoadingCheckout = false;
        console.error(error);
        this.snackBar.open(
          'Check Out data have failed to load, please reload the page.',
          'Okay',
          {
            duration: 10000,
          }
        );
      },
    });
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
}
