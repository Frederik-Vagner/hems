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
  description: string;
  tagNr: string;
  location: string;
  bbDown: string; // Who took the luggage from the guest.
  bbLr: string; // Who put the luggage in the storage room.
  bbOut?: string; // Who gave the luggage to the guest.
}

export interface ICreateLuggageRequest {
  room: string;
  roomReady?: boolean;
  name: string;
  bags: string;
  description: string;
  arrivalTime?: Date;
  tagNr: string;
  location: string;
  bbDown: string; 
  bbLr: string; 
  bbOut?: string; // probably shouldnt actually be part of creating the longterm
  luggageType: LuggageType;
}

export interface IUpdateLuggageRequest {
  luggageType?: LuggageType;
  roomReady?: boolean;
  room?: string;
  name?: string;
  arrivalTime?: Date;
  bags?: string;
  description?: string;
  tagNr?: string;
  location?: string;
  bbDown?: string;
  bbLr?: string;
  bbOut?: string;
  completedAt?: Date;
}
