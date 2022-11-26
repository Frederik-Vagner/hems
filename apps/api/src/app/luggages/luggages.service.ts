import {
  CreateLuggageRequest,
  LuggageType,
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
    createdAt: Date
  ) {
    const luggageList =
      luggageType === LuggageType.LONG_TERM
        ? await this.getLongTermLuggage(createdAt)
        : await this.getLuggageByLuggageTypeAndCreatedAt(
            luggageType,
            createdAt
          );
    return luggageList;
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

  private async getLuggageByLuggageTypeAndCreatedAt(
    luggageType: LuggageType,
    createdAt: Date
  ) {
    return await this.luggageRepo.find({
      where: {
        luggageType,
        createdAt: Between<Date>(
          new Date(createdAt.setUTCHours(0, 0, 0, 0)),
          new Date(createdAt.setUTCHours(23, 59, 59, 999))
        ),
      },
    });
  }

  private async getLongTermLuggage(createdAt: Date) {
    const luggageList = await this.luggageRepo.find({
      where: {
        luggageType: LuggageType.LONG_TERM,
      },
    });

    luggageList.push(
      ...(await this.luggageRepo.find({
        where: {
          luggageType: LuggageType.CHECKIN || LuggageType.CHECKOUT,
          createdAt: LessThan<Date>(
            new Date(createdAt.setUTCHours(0, 0, 0, 0))
          ),
        },
      }))
    );
  }
}
