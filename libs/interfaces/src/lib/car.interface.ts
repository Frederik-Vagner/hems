import { ICompletedAt } from './base.interface';
import { Location } from './location.enum';

export interface ICar extends ICompletedAt {
  carId: string;
  tagNr: string;
  room: string;
  arrivalDate: Date;
  departureDate: Date;
  name: string;
  licensePlate: string;
  expirationDate?: Date;
  pickupTime?: Date;
  deliveryTime?: Date;
  bbDown?: string;
  bbUp?: string;
  location?: Location;
  parkingLot?: string;
  comments: string;
  charged: boolean;
}

export interface ICreateCarRequest {
  tagNr: string;
  room: string;
  arrivalDate: Date;
  departureDate: Date;
  name: string;
  licensePlate: string;
  expirationDate?: Date;
  pickupTime?: Date;
  deliveryTime?: Date;
  bbDown?: string;
  bbUp?: string;
  location?: Location;
  parkingLot?: string;
  comments: string;
  charged: boolean;
}

export interface IUpdateCarRequest {
  tagNr?: string;
  room?: string;
  arrivalDate?: Date;
  departureDate?: Date;
  name?: string;
  licensePlate?: string;
  expirationDate?: Date;
  pickupTime?: Date;
  deliveryTime?: Date;
  bbDown?: string;
  bbUp?: string;
  location?: Location;
  parkingLot?: string;
  comments?: string;
  charged?: boolean;
  completedAt?: Date;
}
