import { Task } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { eveningTasks, morningTasks, sampleInitials } from './tasks.constant';

@Injectable()
export class TaskGenerator {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepo: Repository<Task>
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private getRandom(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  getDailyTasks(date = new Date(Date.now()), completed: boolean): Task[] {
    const dailyTasks: Task[] = [];

    for (const task of morningTasks) {
      const randomTime = new Date(date);
      randomTime.setMinutes(Math.floor(Math.random() * 60));
      dailyTasks.push(
        this.tasksRepo.create({
          task: task.task,
          time: task.time,
          createdAt: date,
          listName: 'Morning',
          completedAt: completed ? randomTime : undefined,
          initials: completed ? this.getRandom(sampleInitials) : '',
        })
      );
    }
    for (const task of eveningTasks) {
      const randomTime = new Date(date);
      randomTime.setMinutes(Math.floor(Math.random() * 60));
      dailyTasks.push(
        this.tasksRepo.create({
          task: task.task,
          time: task.time,
          createdAt: date,
          listName: 'Evening',
          completedAt: completed ? randomTime : undefined,
          initials: completed ? this.getRandom(sampleInitials) : '',
        })
      );
    }

    return dailyTasks;
  }

  getTasksForPeriod(from: Date, to: Date): Task[] {
    const periodTasks: Task[] = [];

    for (const day = from; day <= to; day.setDate(day.getDate() + 1)) {
      periodTasks.push(...this.getDailyTasks(new Date(day), true));
    }

    return periodTasks;
  }

  generateDailyTasks(date = new Date(Date.now())) {
    this.getDailyTasks(date, false).forEach((task) => {
      this.tasksRepo.save(task);
    });
  }
}
