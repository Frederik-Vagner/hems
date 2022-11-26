import {
  CreateTaskRequest,
  GetTasksResponse,
  UpdateTaskRequest,
} from '@hems/interfaces';
import { Task } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>
  ) {}

  async findAllByCreatedAt(createdAt: Date): Promise<GetTasksResponse> {
    const tasks = await this.taskRepo.find({
      where: {
        createdAt: Between<Date>(
          new Date(createdAt.setUTCHours(0, 0, 0, 0)),
          new Date(createdAt.setUTCHours(23, 59, 59, 999))
        ),
      },
    });
    const listNames = (
      await this.taskRepo
        .createQueryBuilder('task')
        .select('task.listName', 'listName')
        .distinct(true)
        .getRawMany()
    ).map((listName) => {
      return listName.listName;
    });

    return { tasks, listNames };
  }

  async createTask(taskData: CreateTaskRequest) {
    return await this.taskRepo.save(taskData);
  }

  async updateTask(taskId: string, taskData: UpdateTaskRequest) {
    const task = await this.taskRepo.findOneByOrFail({ taskId });

    for (const key in taskData) {
      if (Object.prototype.hasOwnProperty.call(taskData, key)) {
        task[key] = taskData[key];
      }
    }

    return await this.taskRepo.save(task);
  }
}
