import {
  CreateCarRequest,
  UpdateCarRequest,
  SortOrder,
  CarSortOptions,
} from '@hems/interfaces';
import { Car } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, Like, Repository } from 'typeorm';
import { filterStatus } from '../utils/query-params.utils';

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
      completedAt: filterStatus(status),
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
        return { pickUpTime: sortOrder };
      case CarSortOptions.CREATED_AT:
        return { createdAt: sortOrder };
      default:
        return undefined;
    }
  }
}
