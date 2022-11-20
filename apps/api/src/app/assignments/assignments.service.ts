import {
  CreateAssignmentRequest,
  UpdateAssignmentRequest,
} from '@hems/interfaces';
import { Assignment } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectRepository(Assignment)
    private readonly assignmentRepo: Repository<Assignment>
  ) {}

  async findAllByCreatedAt(createdAt: Date) {
    return await this.assignmentRepo.find({
      where: {
        createdAt: Between<Date>(
          new Date(createdAt.setUTCHours(0, 0, 0, 0)),
          new Date(createdAt.setUTCHours(23, 59, 59, 999))
        ),
      },
    });
  }

  async createAssignment(assignmentData: CreateAssignmentRequest) {
    return await this.assignmentRepo.save(assignmentData);
  }

  async updateAssignment(
    assignmentId: string,
    assignmentData: UpdateAssignmentRequest
  ) {
    const assignment = await this.assignmentRepo.findOneByOrFail({
      assignmentId,
    });

    for (const key in assignmentData) {
      if (Object.prototype.hasOwnProperty.call(assignmentData, key)) {
        assignment[key] = assignmentData[key];
      }
    }

    return await this.assignmentRepo.save(assignment);
  }
}
