import { Task } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class CombatTechniquesService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>
  ) {}

  /**
   * Find all Task entities.
   * @returns Array of entities.
   */
  async findAll(createdAt: Date): Promise<Task[]> {
    let day = createdAt.getDate();
    let month = createdAt.getMonth();
    let year = createdAt.getFullYear();
    // Figure out how to compare the Task date to the above.
    return this.taskRepo.find({
      where: { createdAt: Equal(createdAt.getDate()) },
    });
  }
}
