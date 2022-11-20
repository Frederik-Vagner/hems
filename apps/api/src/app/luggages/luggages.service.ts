import { CreateRequest, LuggageType, UpdateRequest } from '@hems/interfaces';
import { Luggage } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';

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
    return await this.luggageRepo.find({
      where:
        luggageType === LuggageType.LONG_TERM
          ? null
          : {
              luggageType,
              createdAt: Between<Date>(
                new Date(createdAt.setUTCHours(0, 0, 0, 0)),
                new Date(createdAt.setUTCHours(23, 59, 59, 999))
              ),
            },
    });
  }

  async createLuggage(luggageData: CreateRequest) {
    return await this.luggageRepo.save(luggageData);
  }

  async updateLuggage(luggageId: string, luggageData: UpdateRequest) {
    const luggage = await this.luggageRepo.findOneByOrFail({ luggageId });

    for (const key in luggageData) {
      if (Object.prototype.hasOwnProperty.call(luggageData, key)) {
        luggage[key] = luggageData[key];
      }
    }

    return await this.luggageRepo.save(luggage);
  }
}
