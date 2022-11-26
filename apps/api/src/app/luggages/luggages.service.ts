import {
  CreateLuggageRequest,
  LuggageSortOptions,
  LuggageType,
  SortOrder,
  UpdateLuggageRequest,
} from '@hems/interfaces';
import { Luggage } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, LessThan } from 'typeorm';

@Injectable()
export class LuggagesService {
  constructor(
    @InjectRepository(Luggage)
    private readonly luggageRepo: Repository<Luggage>
  ) {}

  async findAllByLuggageTypeAndCreatedAt(
    luggageType: LuggageType,
    createdAt: Date,
    sortBy: LuggageSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    return await this.luggageRepo.find({
      where:
        luggageType === LuggageType.LONG_TERM
          // Long term Query
          ? [
              { luggageType: LuggageType.LONG_TERM },
              {
                luggageType: LuggageType.CHECKIN || LuggageType.CHECKOUT,
                createdAt: LessThan<Date>(
                  new Date(createdAt.setUTCHours(0, 0, 0, 0))
                ),
              },
            ]
          // Checkin or Checkout Query
          : {
              luggageType,
              createdAt: Between<Date>(
                new Date(createdAt.setUTCHours(0, 0, 0, 0)),
                new Date(createdAt.setUTCHours(23, 59, 59, 999))
              ),
            },
      order: this.getSortingConditions(sortBy, sortOrder),
    });
  }

  async createLuggage(luggageData: CreateLuggageRequest) {
    return await this.luggageRepo.save(luggageData);
  }

  async updateLuggage(luggageId: string, luggageData: UpdateLuggageRequest) {
    const luggage = await this.luggageRepo.findOneByOrFail({ luggageId });

    for (const key in luggageData) {
      if (Object.prototype.hasOwnProperty.call(luggageData, key)) {
        luggage[key] = luggageData[key];
      }
    }

    return await this.luggageRepo.save(luggage);
  }

  private getSortingConditions(
    sortBy: LuggageSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    switch (sortBy) {
      case LuggageSortOptions.ARRIVAL_TIME:
        return { arrivalTime: sortOrder };
      case LuggageSortOptions.COMPLETED_AT:
        return { completedAt: sortOrder };
      default:
        return undefined;
    }
  }
}
