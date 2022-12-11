import {
  CreateBikeRequest,
  UpdateBikeRequest,
  SortOrder,
  BikeSortOptions,
} from '@hems/interfaces';
import { Bike } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Like, Repository } from 'typeorm';
import { filterStatus } from '../utils/query-params.utils';

@Injectable()
export class BikesService {
  constructor(
    @InjectRepository(Bike)
    private readonly bikeRepo: Repository<Bike>
  ) {}

  async findAllByCreatedAt(
    createdAt: Date,
    status: boolean | undefined,
    search: string | undefined,
    sortBy: BikeSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    const baseConditions = {
      createdAt: Between<Date>(
        new Date(createdAt.setUTCHours(0, 0, 0, 0)),
        new Date(createdAt.setUTCHours(23, 59, 59, 999))
      ),
      completedAt: filterStatus(status),
    };

    const searchCondition = search ? Like(`%${search}%`) : undefined;

    return this.bikeRepo.find({
      where: [
        { ...baseConditions, name: searchCondition },
        { ...baseConditions, reservedBy: searchCondition },
        { ...baseConditions, room: searchCondition },
      ],
      order: this.getSortingConditions(sortBy, sortOrder),
    });
  }

  async createBike(bikeData: CreateBikeRequest) {
    return await this.bikeRepo.save(bikeData);
  }

  async updateBike(bikeId: string, bikeData: UpdateBikeRequest) {
    const bike = await this.bikeRepo.findOneByOrFail({ bikeId });

    for (const key in bikeData) {
      if (Object.prototype.hasOwnProperty.call(bikeData, key)) {
        bike[key] = bikeData[key];
      }
    }

    return await this.bikeRepo.save(bike);
  }

  private getSortingConditions(
    sortBy: BikeSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    switch (sortBy) {
      case BikeSortOptions.BIKE_FORM_COMPLETED:
        return { bikeFormCompleted: sortOrder };
      case BikeSortOptions.COMPLETED_AT:
        return { completedAt: sortOrder };
      case BikeSortOptions.PICKUP_TIME:
        return { pickupTime: sortOrder };
      case BikeSortOptions.CREATED_AT:
        return { createdAt: sortOrder };
      case BikeSortOptions.NAME:
        return { name: sortOrder };
      case BikeSortOptions.RESERVED_BY:
        return { reservedBy: sortOrder };
      case BikeSortOptions.ROOM:
        return { room: sortOrder };
      default:
        return undefined;
    }
  }
}
