import { ICompletedAt } from '../base.interface';

export interface IBike extends ICompletedAt {
  bikeId: string;
  nrOfBikes?: string;
  pickUpTime?: Date | null;
  name?: string;
  room?: string;
  reservedBy?: string;
  bikeFormCompleted?: boolean;
  comments?: string;
}

export interface ICreateBikeRequest {
  nrOfBikes?: string;
  pickUpTime?: Date | null;
  name?: string;
  room?: string;
  reservedBy?: string;
  bikeFormCompleted?: boolean;
  comments?: string;
  completedAt?: Date | null;
}

export interface IUpdateBikeRequest {
  nrOfBikes?: string;
  pickUpTime?: Date | null;
  name?: string;
  room?: string;
  reservedBy?: string;
  bikeFormCompleted?: boolean;
  comments?: string;
  completedAt?: Date | null;
}
