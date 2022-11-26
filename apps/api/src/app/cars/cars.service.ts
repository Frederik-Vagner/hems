import { CreateCarRequest, UpdateCarRequest } from '@hems/interfaces';
import { Car } from '@hems/models';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, LessThanOrEqual, Not, Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepo: Repository<Car>
  ) {}

  async findAllBeforeCreatedAt(createdAt: Date, status: boolean | undefined) {
    Logger.log(status);
    return this.carRepo.find({
      where: {
        createdAt: LessThanOrEqual<Date>(
          new Date(createdAt.setUTCHours(23, 59, 59, 999))
        ),
        completedAt: this.filterStatus(status),
      },
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
}
