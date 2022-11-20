import { CreateCarRequest, UpdateCarRequest } from '@hems/interfaces';
import { Car } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepo: Repository<Car>
  ) {}

  async findAllBeforeCreatedAt(createdAt: Date) {
    return this.carRepo.find({
      where: {
        createdAt: LessThanOrEqual<Date>(
          new Date(createdAt.setUTCHours(23, 59, 59, 999))
        ),
      },
      order: { arrivalDate: 'DESC' },
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
}
