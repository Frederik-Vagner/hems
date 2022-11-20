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

  async findAllByCreatedAt(createdAt: Date) {
    return this.carRepo.find({
      where: {
        createdAt: LessThanOrEqual<Date>(
          new Date(createdAt.setUTCHours(23, 59, 59, 999))
        ),
      },
      order: { arrivalDate: 'DESC' },
    });
  }
}
