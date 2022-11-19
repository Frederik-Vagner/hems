import { ICompletedAt } from './base.interface';
import { LuggageType } from './luggageType.enum';
import { Location } from './location.enum';

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
  location: Location;
  bbDown: string; // Who took the luggage from the guest.
  bbLr: string; // Who put the luggage in the storage room.
  bbOut?: string; // Who gave the luggage to the guest.
}
