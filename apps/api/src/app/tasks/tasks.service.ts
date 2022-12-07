import {
  CreateTaskRequest,
  GetTasksResponse,
  SortOrder,
  TaskSortOptions,
  UpdateTaskRequest,
} from '@hems/interfaces';
import { Task } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Like, Repository } from 'typeorm';
import { filterStatus } from '../utils/query-params.utils';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>
  ) {}

  async findAllByCreatedAt(
    createdAt: Date,
    status: boolean | undefined,
    listName: string | undefined,
    search: string | undefined,
    sortBy: TaskSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ): Promise<GetTasksResponse> {
    const baseConditions = {
      createdAt: Between<Date>(
        new Date(createdAt.setUTCHours(0, 0, 0, 0)),
        new Date(createdAt.setUTCHours(23, 59, 59, 999))
      ),
      completedAt: filterStatus(status),
      listName,
    };
    const searchCondition = search ? Like(`%${search}%`) : undefined;

    const tasks = await this.taskRepo.find({
      where: [
        { ...baseConditions, time: searchCondition },
        { ...baseConditions, task: searchCondition },
        { ...baseConditions, initials: searchCondition },
      ],
      order: this.getSortingConditions(sortBy, sortOrder),
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

  private getSortingConditions(
    sortBy: TaskSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    switch (sortBy) {
      case TaskSortOptions.TIME:
        return { time: sortOrder };
      case TaskSortOptions.COMPLETED_AT:
        return { completedAt: sortOrder };
      default:
        return undefined;
    }
  }
}
