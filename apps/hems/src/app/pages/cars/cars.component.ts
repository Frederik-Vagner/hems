import { Component, OnInit } from '@angular/core';
import { CarSortOptions, ICar, SortOrder } from '@hems/interfaces';
import { CarService } from '../../services/car.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DisplayDateService } from '../../services/display-date.service';
import { CreateCarDialogComponent } from './createCarEntryDialog/create-car-dialog.component';
import { UpdateAssignmentDialogComponent } from '../assignments/updateAssignmentDialog/update-assignment-dialog.component';

@Component({
  selector: 'hems-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['../../../assets/table.scss'],
})
export class CarsComponent implements OnInit {
  carList: ICar[] = [];
  displayDate = new Date();
  sortBy: CarSortOptions | undefined;
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
    'comment',
    'charged',
  ];

  constructor(
    private readonly carService: CarService,
    private displayDateService: DisplayDateService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialog
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchCarList();
    });
  }

  openCreateCarDialog() {
    this.dialogRef.open(CreateCarDialogComponent, { width: '500px' });
  }

  openDialogEdit(carListEntry: ICar) {
    this.dialogRef.open(UpdateAssignmentDialogComponent, {
      width: '500px',
      data: carListEntry,
    });
  }

  ngOnInit(): void {
    this.fetchCarList();
  }

  fetchCarList(): void {
    this.carService.getCar(this.displayDate).subscribe({
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
