import { Task } from '@hems/models';
import { TaskGenerator } from '@hems/taskUtils';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksJobs } from './tasks.jobs';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TasksJobs, TaskGenerator],
})
export class TasksModule {}
