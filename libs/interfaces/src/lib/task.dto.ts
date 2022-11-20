import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { ICreateTask, IUpdateTask } from './task.interface';

export class CreateTaskRequest implements ICreateTask {
  @ApiModelProperty({ example: '09.30' })
  @IsNotEmpty()
  time!: string;

  @ApiModelProperty({ example: 'Clear out trash' })
  @IsNotEmpty()
  task!: string;

  @ApiModelProperty({ example: 'DS' })
  @IsNotEmpty()
  initials!: string;

  @ApiModelProperty({ example: 'Midnight' })
  @IsNotEmpty()
  listName!: string;
}

export class UpdateTaskRequest implements IUpdateTask {
  @ApiModelProperty({ example: '09.30' })
  @IsOptional()
  time?: string;

  @ApiModelProperty({ example: 'Clear out trash' })
  @IsOptional()
  task?: string;

  @ApiModelProperty({ example: 'DS' })
  @IsOptional()
  initials?: string;

  @ApiModelProperty({ example: 'Midnight' })
  @IsOptional()
  listName?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsDateString()
  @IsOptional()
  completedAt?: Date;
}
