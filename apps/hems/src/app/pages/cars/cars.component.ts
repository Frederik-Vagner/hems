import { Component } from '@angular/core';
import { ICar } from '@hems/interfaces';
import { CarService } from '../../services/car.service'
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'hems-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  carList: ICar[] = [];

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
    private snackBar: MatSnackBar
  ) {}

  foods = [
    {value: 'steak-0', viewValue: 'Room'},
    {value: 'pizza-1', viewValue: 'Name'},
    {value: 'tacos-2', viewValue: 'Pick Up Time'},
  ];

  ngOnInit(): void {
    this.fetchCar();
  }

  formatDate(element: ICar): string{
    const parsedDate = new Date(element.arrivalDate)
    return parsedDate.toLocaleString(undefined, {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit'
    })
  }

  fetchCar(): void {
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
    console.log(this.carList)
  }
}