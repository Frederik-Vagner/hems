import { ITask } from '@hems/interfaces';
import { Task } from '@hems/models';
import { TaskGenerator } from '@hems/task-generator';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksSeederService {
  constructor(
    @InjectRepository(Task)
    private readonly repo: Repository<Task>,
    private readonly generator: TaskGenerator
  ) {}

  create(): Array<Promise<Task>> {
    return this.getSeedingTasks().map(async (entity: ITask) => {
      try {
        return await this.repo.save(entity);
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  private getSeedingTasks() {
    const startDate = new Date(Date.now());
    startDate.setMonth(startDate.getMonth() - 3); // day three months in the past
    const endDate = new Date(Date.now());
    endDate.setTime(endDate.getTime() - 24 * 60 * 60 * 1000); // day before today
    const tasks = this.generator.getTasksForPeriod(startDate, endDate); // completed tasks set in the past
    tasks.push(...this.generator.getDailyTasks(new Date(Date.now()), false)); // new set of uncompleted tasks for the current date
    return tasks;
  }
}
