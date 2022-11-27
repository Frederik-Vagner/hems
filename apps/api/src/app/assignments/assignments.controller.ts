import {
  AssignmentSortOptions,
  CreateAssignmentRequest,
  SortOrder,
  UpdateAssignmentRequest,
} from '@hems/interfaces';
import { Assignment } from '@hems/models';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { toBool } from '../utils/query-params.utils';
import { AssignmentsService } from './assignments.service';

@ApiTags('Assignments')
@Controller('assignments')
export class AssignmentsController {
  constructor(private assignmentsService: AssignmentsService) {}

  @Get()
  @ApiOperation({ summary: 'Get a list of Assignments for the given day.' })
  @ApiOkResponse({ type: [Assignment] })
  @HttpCode(200)
  async getAssignmentsByCreatedAt(
    @Query('createdAt')
    createdAt: string,
    @Query('status')
    status: string,
    @Query('room')
    room: string,
    @Query('search')
    search: string,
    @Query('sortBy')
    sortBy: AssignmentSortOptions,
    @Query('sortOrder')
    sortOrder: SortOrder
  ) {
    const createdAtDate = new Date(Date.parse(createdAt));
    return this.assignmentsService.findAllByCreatedAt(
      createdAtDate,
      toBool(status),
      room,
      search,
      sortBy,
      sortOrder
    );
  }

  @Post()
  @ApiOperation({
    summary: 'Create an assignment entry.',
  })
  @ApiCreatedResponse({ type: Assignment })
  @HttpCode(201)
  async createAssignment(@Body() assignmentData: CreateAssignmentRequest) {
    return this.assignmentsService.createAssignment(assignmentData);
  }

  @Patch(':assignmentId')
  @ApiOperation({
    summary: 'Update an Assignment entry.',
  })
  @ApiCreatedResponse({ type: Assignment })
  @HttpCode(200)
  async updateAssignment(
    @Param('assignmentId', ParseUUIDPipe) assignmentId: string,
    @Body() assignmentData: UpdateAssignmentRequest
  ) {
    return this.assignmentsService.updateAssignment(
      assignmentId,
      assignmentData
    );
  }
}
