import { ICompletedAt } from '../base.interface';
import { LuggageType } from './luggageType.enum';

export interface ILuggage extends ICompletedAt {
  luggageId: string;
  luggageType: LuggageType;
  roomReady?: boolean;
  room: string;
  name: string;
  arrivalTime?: Date | null;
  bags: string;
  comments?: string;
  tagNr: string;
  location: string;
  bbDown?: string; // Who took the luggage from the guest.
  bbLr: string; // Who put the luggage in the storage room.
  bbOut?: string; // Who gave the luggage to the guest.
  dateNeeded?: Date | null;
}

export interface ICreateLuggageRequest {
  luggageType: LuggageType;
  room: string;
  roomReady?: boolean;
  name: string;
  bags: string;
  comments?: string;
  arrivalTime?: Date | null;
  tagNr: string;
  location: string;
  bbDown?: string;
  bbLr: string;
  bbOut?: string; // probably shouldnt actually be part of creating the longterm -> Teodor, this is why it is marked as an optional field... no want, no provide
  dateNeeded?: Date | null;
  completedAt?: Date | null;
}

export interface IUpdateLuggageRequest {
  luggageType?: LuggageType;
  roomReady?: boolean;
  room?: string;
  name?: string;
  arrivalTime?: Date | null;
  bags?: string;
  comments?: string;
  tagNr?: string;
  location?: string;
  bbDown?: string;
  bbLr?: string;
  bbOut?: string;
  dateNeeded?: Date | null;
  completedAt?: Date | null;
}
