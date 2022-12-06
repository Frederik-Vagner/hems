import { Component, OnInit } from '@angular/core';
import {
  CarSortOptions,
  ICar,
  SortOrder,
  TableInfoOptions,
} from '@hems/interfaces';
import { CarService } from '../../services/car.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DisplayDateService } from '../../services/display-date.service';
import { CreateCarDialogComponent } from './createCarEntryDialog/create-car-dialog.component';
import { UpdateCarDialogComponent } from './updateCarEntryDialog/update-car-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { TableInfoDialogComponent } from '../../components/tableInfoDialog/table-info-dialog.component';

@Component({
  selector: 'hems-cars',
  templateUrl: './cars.component.html',
  styleUrls: [
    '../../../assets/styles/table.scss',
    '../../../assets/styles/checkbox.scss',
  ],
})
export class CarsComponent implements OnInit {
  carList: ICar[] = [];
  displayDate = new Date();
  sortBy: CarSortOptions = CarSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';

  carColumns = [
    'room',
    'tagNr',
    'arrivalDate',
    'departureDate',
    'name',
    'licensePlate',
    'expirationDateTime',
    'pickupDateTime',
    'bbDown',
    'bbUp',
    'location',
    'parkingLot',
    'deliveryDateTime',
    'bbOut',
    'comments',
    'charged',
  ];

  constructor(
    private readonly carService: CarService,
    private displayDateService: DisplayDateService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchCarList();
    });
  }

  updateCharge(carId: string, charged: boolean): void {
    this.carService
      .updateCar(carId, {
        charged: !charged,
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Car updated!', 'Thanks', { duration: 5000 });
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
      data: TableInfoOptions.CARS,
      width: '500px',
    });
  }

  openCreateCarDialog() {
    this.dialog.open(CreateCarDialogComponent, { width: '500px' });
  }

  openDialogEdit(carListEntry: ICar) {
    this.dialog.open(UpdateCarDialogComponent, {
      width: '500px',
      data: carListEntry,
    });
  }

  ngOnInit(): void {
    this.fetchCarList();
  }

  fetchCarList(): void {
    this.carService
      .getCar(this.displayDate, this.sortBy, this.sortOrder, this.search)
      .subscribe({
        next: (car) => {
          this.carList = car;
          console.log('checkout', car);
        },
        error: (error) => {
          console.error(error);
          this.snackBar.open(
            'Check Out data have failed to load, please try checking your connection.',
            'Okay',
            {
              duration: 10000,
            }
          );
        },
      });
  }
}
