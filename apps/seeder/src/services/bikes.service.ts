import { IBike } from '@hems/interfaces';
import { Bike } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { bikes } from '../constants/bikes.constant';

@Injectable()
export class BikesSeederService {
  constructor(
    @InjectRepository(Bike)
    private readonly repo: Repository<Bike>
  ) {}

  create(): Array<Promise<Bike>> {
    return bikes.map(async (bike: IBike) => {
      try {
        return await this.repo.save(bike);
      } catch (error) {
        throw new Error(error);
      }
    });
  }
}
