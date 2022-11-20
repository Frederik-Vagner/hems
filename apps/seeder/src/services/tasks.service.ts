import { ITask } from '@hems/interfaces';
import { Task } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tasks } from '../constants/tasks.constant';

@Injectable()
export class TasksSeederService {
  constructor(
    @InjectRepository(Task)
    private readonly repo: Repository<Task>
  ) {}

  create(): Array<Promise<Task>> {
    return tasks.map(async (entity: ITask) => {
      try {
        return await this.repo.save(entity);
      } catch (error) {
        throw new Error(error);
      }
    });
  }
}