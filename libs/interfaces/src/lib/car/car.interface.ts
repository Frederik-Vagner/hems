import { ICompletedAt } from '../base.interface';

export interface ICar extends ICompletedAt {
  carId: string;
  room: string;
  tagNr: string;
  arrivalDate: Date;
  departureDate: Date;
  name: string;
  licensePlate: string;
  expirationDate?: Date | null;
  pickupTime?: Date | null;
  deliveryTime?: Date | null;
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
  expirationDate?: Date | null;
  pickupTime?: Date | null;
  deliveryTime?: Date | null;
  bbDown?: string;
  bbUp?: string;
  location: string;
  parkingLot?: string;
  bbOut?: string;
  comments?: string;
  charged: boolean;
  completedAt?: Date | null;
}

export interface IUpdateCarRequest {
  tagNr?: string;
  room?: string;
  arrivalDate?: Date | null;
  departureDate?: Date | null;
  name?: string;
  licensePlate?: string;
  expirationDate?: Date | null;
  pickupTime?: Date | null;
  deliveryTime?: Date | null;
  bbDown?: string;
  bbUp?: string;
  location?: string;
  parkingLot?: string;
  bbOut?: string;
  comments?: string;
  charged?: boolean;
  completedAt?: Date | null;
}
