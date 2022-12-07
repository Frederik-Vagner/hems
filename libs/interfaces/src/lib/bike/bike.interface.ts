import { ICompletedAt } from '../base.interface';

export interface IBike extends ICompletedAt {
    bikeId: string;
    numberOfBikes: string;
    pickUpTime?: Date | null;
    name: string;
    room: string;
    reservedBy: string;
    bikeForm: boolean;
    returned: boolean;
    comments?: string;
  }

  export interface ICreateBikeRequest {
    numberOfBikes: string;
    pickUpTime?: Date | null;
    name: string;
    room: string;
    reservedBy: string;
    bikeForm: boolean;
    returned: boolean;
    comments?: string;
    completedAt?: Date | null;
  }

  export interface IUpdateBikeRequest {
    numberOfBikes: string;
    pickUpTime?: Date | null;
    name: string;
    room: string;
    reservedBy: string;
    bikeForm: boolean;
    returned: boolean;
    comments?: string;
    completedAt?: Date | null;
  }