import {
  Assignment,
  Car,
  Document,
  Luggage,
  Task,
  User,
  Bike,
} from '@hems/models';
import { TaskGenerator } from '@hems/task-generator';
import { DynamicModule, Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config.service';
import { SeedService } from './seed.service';
import { AssignmentsSeederService } from './services/assignments.service';
import { BikesSeederService } from './services/bikes.service';
import { CarsSeederService } from './services/cars.service';
import { DocumentsSeederService } from './services/documents.service';
import { LuggagesSeederService } from './services/luggages.service';
import { TasksSeederService } from './services/tasks.service';
import { UsersSeederService } from './services/users.service';

@Module({})
export class SeedModule {
  public static register(): DynamicModule {
    return {
      module: SeedModule,
      imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        TypeOrmModule.forFeature([
          User,
          Luggage,
          Car,
          Task,
          Assignment,
          Document,
          Bike,
        ]),
      ],
      providers: [
        Logger,
        SeedService,
        UsersSeederService,
        LuggagesSeederService,
        CarsSeederService,
        TasksSeederService,
        AssignmentsSeederService,
        DocumentsSeederService,
        BikesSeederService,
        TaskGenerator,
      ],
      exports: [SeedService],
    };
  }
}
