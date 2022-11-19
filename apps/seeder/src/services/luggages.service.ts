import { ILuggage } from '@hems/interfaces';
import { Luggage } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { luggages } from '../constants/luggages.constants';

@Injectable()
export class LuggagesSeederService {
  constructor(
    @InjectRepository(Luggage)
    private readonly repo: Repository<Luggage>
  ) {}

  create(): Array<Promise<Luggage>> {
    return luggages.map(async (luggage: ILuggage) => {
      try {
        return await this.repo.save(luggage);
      } catch (error) {
        throw new Error(error);
      }
    });
  }
}
