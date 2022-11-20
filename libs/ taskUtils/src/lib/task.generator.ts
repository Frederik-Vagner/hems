import { Task } from '@hems/models';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  eveningShiftTasks,
  eveningShiftTimes,
  generalTasks,
  generalTimes,
  listNames,
  morningShiftTasks,
  morningShiftTimes,
  sampleInitials,
} from './task.data';

@Injectable()
export class TaskGenerator {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepo: Repository<Task>
  ) {}

  private getRandom(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  private getShiftTasks(
    listName: string,
    shiftTimes: string[],
    tasks: string[],
    date: Date
  ) {
    const shiftTasks: Task[] = [];
    for (const time of shiftTimes) {
      shiftTasks.push(
        this.tasksRepo.create({
          time,
          task: this.getRandom(tasks),
          initials: this.getRandom(sampleInitials),
          listName,
          createdAt: date,
          completedAt: this.getRandom([null, date]),
        })
      );
    }

    return shiftTasks;
  }

  getDailyTasks(date = new Date(Date.now())) {
    const dailyTasks: Task[] = [];

    for (const listName of listNames) {
      switch (listName) {
        case 'Morning':
          dailyTasks.push(
            ...this.getShiftTasks(
              listName,
              morningShiftTimes,
              morningShiftTasks,
              date
            )
          );
          break;
        case 'Evening':
          dailyTasks.push(
            ...this.getShiftTasks(
              listName,
              eveningShiftTimes,
              eveningShiftTasks,
              date
            )
          );
          break;
        default:
          dailyTasks.push(
            ...this.getShiftTasks(listName, generalTimes, generalTasks, date)
          );
      }
    }

    return dailyTasks;
  }

  getTasksForPeriod(from: Date, to: Date) {
    const periodTasks: Task[] = [];

    for (const day = from; day <= to; day.setDate(day.getDate() + 1)) {
      periodTasks.push(...this.getDailyTasks(new Date(day)));
    }

    return periodTasks;
  }

  generateDailyTasks(date = new Date(Date.now())) {
    this.getDailyTasks(date).forEach((task) => {
      this.tasksRepo.save(task);
    });
  }
}
