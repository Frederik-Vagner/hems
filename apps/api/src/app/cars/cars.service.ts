import {
  CreateCarRequest,
  UpdateCarRequest,
  SortOrder,
  CarSortOptions,
} from '@hems/interfaces';
import { Car } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, LessThanOrEqual, Like, Not, Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepo: Repository<Car>
  ) {}

  async findAllBeforeCreatedAt(
    createdAt: Date,
    status: boolean | undefined,
    search: string | undefined,
    sortBy: CarSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    const baseConditions = {
      createdAt: LessThanOrEqual<Date>(
        new Date(createdAt.setUTCHours(23, 59, 59, 999))
      ),
      completedAt: this.filterStatus(status),
    };

    const searchCondition = search ? Like(`%${search}%`) : undefined;

    return this.carRepo.find({
      where: [
        { ...baseConditions, bbDown: searchCondition },
        { ...baseConditions, bbUp: searchCondition },
        { ...baseConditions, bbOut: searchCondition },
        { ...baseConditions, name: searchCondition },
        {
          ...baseConditions,
          licensePlate: searchCondition,
        },
        { ...baseConditions, room: searchCondition },
      ],
      order: this.getSortingConditions(sortBy, sortOrder),
    });
  }

  async createCar(carData: CreateCarRequest) {
    return await this.carRepo.save(carData);
  }

  async updateCar(carId: string, carData: UpdateCarRequest) {
    const car = await this.carRepo.findOneByOrFail({ carId });

    for (const key in carData) {
      if (Object.prototype.hasOwnProperty.call(carData, key)) {
        car[key] = carData[key];
      }
    }

    return await this.carRepo.save(car);
  }

  private filterStatus(status: boolean | undefined) {
    if (status === undefined) {
      return undefined;
    } else if (status === true) {
      return Not(IsNull());
    }
    return IsNull();
  }

  private getSortingConditions(
    sortBy: CarSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    switch (sortBy) {
      case CarSortOptions.DELIVERY_TIME:
        return { deliveryTime: sortOrder };
      case CarSortOptions.EXPIRATION_DATE:
        return { expirationDate: sortOrder };
      case CarSortOptions.PICKUP_TIME:
        return { pickupTime: sortOrder };
      default:
        return undefined;
    }
  }
}
