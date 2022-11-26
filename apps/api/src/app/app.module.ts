import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { AuthModule } from './auth/auth.module';
import { configService } from './config/config.service';
import { LuggagesModule } from './luggages/luggages.module';
import { LoggerMiddleware } from './middleware/logging.middleware';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { AssignmentsModule } from './assignments/assignments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ScheduleModule.forRoot(),
    AuthModule,
    UsersModule,
    LuggagesModule,
    CarsModule,
    TasksModule,
    AssignmentsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
