import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage, LuggageSortOptions, SortOrder } from '@hems/interfaces';
import { DisplayDateService } from '../../services/display-date.service';
import { LuggageService } from '../../services/luggage.service';
import { CreateCheckoutDialogComponent } from './createCheckoutDialog/create-checkout-dialog.component';
import { UpdateCheckoutDialogComponent } from './updateCheckoutDialog/update-checkout-dialog.component';

@Component({
  selector: 'hems-checkin',
  templateUrl: './checkout.component.html',
  styleUrls: ['../../../assets/styles/table.scss'],
})
export class CheckoutComponent implements OnInit {
  checkoutLuggage: ILuggage[] = [];
  listNames?: string[];
  isLoading = false;
  displayDate = new Date();
  sortBy: LuggageSortOptions | undefined;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';

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
      .getCheckout(this.displayDate, this.sortBy, this.sortOrder, this.search)
      .subscribe({
        next: (luggage) => {
          this.checkoutLuggage = luggage;
        },
        error: (error) => {
          this.isLoading = false;
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
