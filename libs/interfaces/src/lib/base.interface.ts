import { IUser } from './user.interface';

export interface IBase {
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreatedBy extends IBase {
  createdBy?: IUser;
}
