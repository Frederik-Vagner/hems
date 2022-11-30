import { Component, OnInit } from '@angular/core';
import { CarSortOptions, ICar, SortOrder } from '@hems/interfaces';
import { CarService } from '../../services/car.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CreateCarDialogComponent } from './modal/create/create-car-dialog.component';

@Component({
  selector: 'hems-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['../../../assets/table.scss'],
})
export class CarsComponent implements OnInit {
  carList: ICar[] = [];
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
    private snackBar: MatSnackBar,
    private dialogRef: MatDialog
  ) {}

  openCreateCarDialog() {
    this.dialogRef.open(CreateCarDialogComponent, { width: '500px' });
  }

  openDialogEdit(carListEntry: ICar) {
    console.log(carListEntry);
    
    //this.dialogRef.open();
  }

  ngOnInit(): void {
    this.fetchCarList();
  }

  formatDate(element: ICar): string {
    const parsedDate = new Date(element.arrivalDate);
    return parsedDate.toLocaleString(undefined, {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
    });
  }

  fetchCarList(): void {
    this.carService.getCar(new Date()).subscribe({
      next: (car) => {
        this.carList = car;
        console.log('checkout', car);
      },
      error: (error) => {
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

  editCarListEntry(id: string): void {
    alert(id);
    console.log(this.carList);
  }
}
