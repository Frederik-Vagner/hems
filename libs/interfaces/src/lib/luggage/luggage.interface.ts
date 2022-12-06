import { ICompletedAt } from '../base.interface';
import { LuggageType } from './luggageType.enum';

export interface ILuggage extends ICompletedAt {
  luggageId: string;
  luggageType: LuggageType;
  roomReady?: boolean;
  room: string;
  name: string;
  arrivalTime?: Date;
  bags: string;
  comments?: string;
  tagNr: string;
  location: string;
  bbDown?: string; // Who took the luggage from the guest.
  bbLr: string; // Who put the luggage in the storage room.
  bbOut?: string; // Who gave the luggage to the guest.
  dateNeeded?: Date;
}

export interface ICreateLuggageRequest {
  luggageType: LuggageType;
  room: string;
  // roomReady?: boolean;
  name: string;
  bags: string;
  comments?: string;
  arrivalTime?: Date;
  tagNr: string;
  location: string;
  bbDown?: string;
  bbLr: string;
  dateNeeded?: Date;
}

export interface IUpdateLuggageRequest {
  luggageType?: LuggageType;
  roomReady?: boolean;
  room?: string;
  name?: string;
  arrivalTime?: Date;
  bags?: string;
  comments?: string;
  tagNr?: string;
  location?: string;
  bbDown?: string;
  bbLr?: string;
  bbOut?: string;
  dateNeeded?: Date;
  completedAt?: Date;
}
