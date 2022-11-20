import { Component } from '@angular/core';

@Component({
  selector: 'hems-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  displayedColumns: string[] = ['position', 'room', 'tagNr', 'arrivalDate', 'departureDate', 'name', 'licensePlate', 'expirationDateTime', 'pickupDateTime', 'bbDown', 'bbUp', 'location', 'parkingLot', 'deliveryDateTime', 'bbOut', 'comment', 'charged', 'actions'];
  dataSource = ELEMENT_DATA;

  editCarListEntry(id: string): void {
    alert(id);
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