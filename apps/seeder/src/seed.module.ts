import { Assignment, Car, Luggage, Task, User } from '@hems/models';
import { TaskGenerator } from '@hems/task-generator';
import { DynamicModule, Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config.service';
import { SeedService } from './seed.service';
import { AssignmentSeederService } from './services/assignments.service';
import { CarsSeederService } from './services/cars.service';
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
        TypeOrmModule.forFeature([User, Luggage, Car, Task, Assignment]),
      ],
      providers: [
        Logger,
        SeedService,
        UsersSeederService,
        LuggagesSeederService,
        CarsSeederService,
        TasksSeederService,
        AssignmentSeederService,
        TaskGenerator,
      ],
      exports: [SeedService],
    };
  }
}
