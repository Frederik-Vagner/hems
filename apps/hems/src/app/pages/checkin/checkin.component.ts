import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@hems/interfaces';
import { LuggageService } from '../../services/luggage.service';

@Component({
  selector: 'hems-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {
  checkinLuggage?: ILuggage[];
  checkoutLuggage?: ILuggage[];
  listNames?: string[];
  chosenListName = '';
  isLoadingCheckin = false;
  isLoadingCheckout = false;

  displayedColumns = ['actions'];

  constructor(
    private readonly luggageService: LuggageService,
    private snackBar: MatSnackBar
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
}
