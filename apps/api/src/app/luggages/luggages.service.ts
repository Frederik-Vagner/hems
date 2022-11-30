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
import { Repository, Between, LessThan, Like } from 'typeorm';
import { filterStatus } from '../utils/query-params.utils';

@Injectable()
export class LuggagesService {
  constructor(
    @InjectRepository(Luggage)
    private readonly luggageRepo: Repository<Luggage>
  ) {}

  async findAllByLuggageTypeAndCreatedAt(
    luggageType: LuggageType,
    createdAt: Date,
    status: boolean | undefined,
    location: string | undefined,
    search: string | undefined,
    sortBy: LuggageSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    const baseConditions = {
      luggageType,
      createdAt: Between<Date>(
        new Date(createdAt.setUTCHours(0, 0, 0, 0)),
        new Date(createdAt.setUTCHours(23, 59, 59, 999))
      ),
      completedAt: filterStatus(status),
    };
    const baseConditionsLongTerm = {
      luggageType: LuggageType.LONG_TERM,
      location,
    };
    const baseConditionsLongTermExtra = {
      luggageType: LuggageType.CHECKIN || LuggageType.CHECKOUT,
      createdAt: LessThan<Date>(new Date(createdAt.setUTCHours(0, 0, 0, 0))),
      location,
    };

    const searchCondition = search ? Like(`%${search}%`) : undefined;

    return await this.luggageRepo.find({
      where:
        luggageType === LuggageType.LONG_TERM
          ? // Long term Query
            [
              { ...baseConditionsLongTerm, bbDown: searchCondition },
              { ...baseConditionsLongTerm, bbLr: searchCondition },
              { ...baseConditionsLongTerm, bbOut: searchCondition },
              { ...baseConditionsLongTerm, room: searchCondition },
              { ...baseConditionsLongTerm, name: searchCondition },

              { ...baseConditionsLongTermExtra, bbDown: searchCondition },
              { ...baseConditionsLongTermExtra, bbLr: searchCondition },
              { ...baseConditionsLongTermExtra, bbOut: searchCondition },
              { ...baseConditionsLongTermExtra, room: searchCondition },
              { ...baseConditionsLongTermExtra, name: searchCondition },
            ]
          : // Checkin or Checkout Query
            [
              { ...baseConditions, bbDown: searchCondition },
              { ...baseConditions, bbLr: searchCondition },
              { ...baseConditions, bbOut: searchCondition },
              { ...baseConditions, room: searchCondition },
              { ...baseConditions, name: searchCondition },
            ],
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
