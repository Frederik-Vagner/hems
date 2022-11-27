import {
  CreateTaskRequest,
  GetTasksResponse,
  SortOrder,
  TaskSortOptions,
  UpdateTaskRequest,
} from '@hems/interfaces';
import { Task } from '@hems/models';
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
import { RequiredQuery } from '../decorators/required-query.decorator';
import { toBool } from '../utils/query-params.utils';
import { TasksService } from './tasks.service';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get a list of Tasks for the given day.' })
  @ApiOkResponse({ type: GetTasksResponse })
  @HttpCode(200)
  async getTasksByCreatedAt(
    @RequiredQuery('createdAt') createdAt: string,
    @Query('status')
    status: string,
    @Query('listName')
    listName: string,
    @Query('search')
    search: string,
    @Query('sortBy')
    sortBy: TaskSortOptions,
    @Query('sortOrder')
    sortOrder: SortOrder
  ) {
    const createdAtDate = new Date(Date.parse(createdAt));
    return this.tasksService.findAllByCreatedAt(
      createdAtDate,
      toBool(status),
      listName,
      search,
      sortBy,
      sortOrder
    );
  }

  @Post()
  @ApiOperation({
    summary: 'Create a task entry.',
  })
  @ApiCreatedResponse({ type: Task })
  @HttpCode(201)
  async createTask(@Body() taskData: CreateTaskRequest) {
    return this.tasksService.createTask(taskData);
  }

  @Patch(':taskId')
  @ApiOperation({
    summary: 'Update a Task entry.',
  })
  @ApiCreatedResponse({ type: Task })
  @HttpCode(200)
  async updateTask(
    @Param('taskId', ParseUUIDPipe) taskId: string,
    @Body() taskData: UpdateTaskRequest
  ) {
    return this.tasksService.updateTask(taskId, taskData);
  }
}
