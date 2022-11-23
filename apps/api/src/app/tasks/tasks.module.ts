import { Task } from '@hems/models';
import { TaskGenerator } from '@hems/taskUtils';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { TasksJobs } from './tasks.jobs';
import { TasksService } from './tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TasksJobs, TaskGenerator, TasksService],
  controllers: [TasksController],
  exports: [TasksService],
})
export class TasksModule {}
