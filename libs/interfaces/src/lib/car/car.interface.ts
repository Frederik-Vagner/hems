import { ICompletedAt } from '../base.interface';

export interface ICar extends ICompletedAt {
  carId: string;
  room: string;
  tagNr: string;
  arrivalDate: Date;
  departureDate: Date;
  name: string;
  licensePlate: string;
  expirationDate?: Date;
  pickupTime?: Date;
  deliveryTime?: Date;
  bbDown?: string;
  bbUp?: string;
  location: string;
  parkingLot?: string;
  bbOut?: string;
  comments?: string;
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
  location: string;
  parkingLot?: string;
  bbOut?: string;
  comments?: string;
  charged: boolean;
  completedAt?: Date;
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
  location?: string;
  parkingLot?: string;
  bbOut?: string;
  comments?: string;
  charged?: boolean;
  completedAt?: Date;
}
