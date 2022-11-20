import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ICar, Location } from '@hems/interfaces';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


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
      bbOut: "string",
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
      bbOut: "string",
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
      bbOut: "string",
      comments: "string",
      charged: false,
    },
  ];

  cars!: ICar[];
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

