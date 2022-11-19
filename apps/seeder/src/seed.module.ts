import { Car, Luggage, User } from '@hems/models';
import { DynamicModule, Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config.service';
import { SeedService } from './seed.service';
import { UsersSeederService } from './services/users.service';
import { LuggagesSeederService } from './services/luggages.service';
import { CarsSeederService } from './services/cars.service';

@Module({})
export class SeedModule {
  public static register(): DynamicModule {
    return {
      module: SeedModule,
      imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        TypeOrmModule.forFeature([User, Luggage, Car]),
      ],
      providers: [
        Logger,
        SeedService,
        UsersSeederService,
        LuggagesSeederService,
        CarsSeederService
      ],
      exports: [SeedService],
    };
  }
}
