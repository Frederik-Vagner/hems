import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TaskGenerator } from '@hems/taskUtils';

@Injectable()
export class TasksJobs {
  constructor(private readonly tasksGenerator: TaskGenerator) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    this.tasksGenerator.generateDailyTasks();
    Logger.log('Daily tasks generated!');
  }
}
