import { Component } from '@angular/core';
import { ICar, Location } from '@hems/interfaces';

@Component({
  selector: 'hems-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  displayedColumns: string[] = ['room', 'tagNr', 'arrivalDate', 'departureDate', 'name', 'licensePlate', 'expirationDateTime', 'pickupDateTime', 'bbDown', 'bbUp', 'location', 'parkingLot', 'deliveryDateTime', 'bbOut', 'comment', 'charged', 'actions'];
  dataSource = ELEMENT_DATA;

  carList: ICar[] = [
    {
      carId: "uuid test stuff",
      tagNr: "string",
      room: "string",
      arrivalDate: new Date(),
      departureDate:  new Date(),
      name: "string",
      licensePlate: "string",
      expirationDate:  new Date(),
      pickupTime:  new Date(),
      deliveryTime:  new Date(),
      bbDown: "string",
      bbUp: "string",
      location: Location.F_FRONT,
      parkingLot: "string",
      comments: "string",
      charged: false,
    },
    {
      carId: "uuid test stuff",
      tagNr: "string",
      room: "string",
      arrivalDate: new Date(),
      departureDate:  new Date(),
      name: "string",
      licensePlate: "string",
      expirationDate:  new Date(),
      pickupTime:  new Date(),
      deliveryTime:  new Date(),
      bbDown: "string",
      bbUp: "string",
      location: Location.F_FRONT,
      parkingLot: "string",
      comments: "string",
      charged: false,
    },
    {
      carId: "uuid test stuff",
      tagNr: "string",
      room: "string",
      arrivalDate: new Date(),
      departureDate:  new Date(),
      name: "string",
      licensePlate: "string",
      expirationDate:  new Date(),
      pickupTime:  new Date(),
      deliveryTime:  new Date(),
      bbDown: "string",
      bbUp: "string",
      location: Location.F_FRONT,
      parkingLot: "string",
      comments: "string",
      charged: false,
    },
  ];

  editCarListEntry(id: string): void {
    alert(id);
    console.log(this.carList)
  }
}

export interface PeriodicElement {
  room: string;
  position: number;
  tagNr: number;
  arrivalDate: string;
  departureDate: string;
  name: string;
  licensePlate: string;
  expirationDateTime: string;
  pickupDateTime: string;
  bbDown: string;
  bbUp: string;
  location: string;
  parkingLot: string;
  deliveryDateTime: string;
  bbOut: string;
  comment: string;
  charged: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, room: 'Hydrogen', tagNr: 1.0079, arrivalDate: 'H', departureDate: 'test1', name: 'hans', licensePlate: 'ab44534', expirationDateTime: '34', pickupDateTime: 'rt', bbDown: 'fv', bbUp: 'fv', location: 'hvg', parkingLot: 'awd', deliveryDateTime: '56', bbOut: 'fv', comment: 'LUX', charged: 'yes', actions: 'button'},
];