import { Assignment } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';

@Injectable()
export class AssignmentsService {
  
  constructor(
    @InjectRepository(Assignment)
    private readonly assignmentRepo: Repository<Assignment>
  ) {}

  async findAllToday(createdAt: Date) {
    return await this.assignmentRepo.find({
      where:{
        createdAt: Between<Date>(
          new Date(createdAt.setUTCHours(0, 0, 0, 0)),
          new Date(createdAt.setUTCHours(23, 59, 59, 999))
        )}
    }); 
  }
}
