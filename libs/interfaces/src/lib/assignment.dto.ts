import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import {
  ICreateAssignmentRequest,
  IUpdateAssignmentRequest,
} from './assignment.interface';

export class CreateAssignmentRequest implements ICreateAssignmentRequest {
  @ApiModelProperty()
  @IsNotEmpty()
  room!: string;

  @ApiModelProperty()
  @IsNotEmpty()
  task!: string;

  @ApiModelProperty()
  @IsOptional()
  @IsDateString()
  comments!: string;

  @ApiModelProperty()
  @IsNotEmpty()
  receivedBy!: string;

  @ApiModelProperty()
  @IsOptional()
  performedBy?: string;

}

export class UpdateAssignmentRequest implements IUpdateAssignmentRequest {
  @ApiModelProperty()
  @IsOptional()
  room?: string;

  @ApiModelProperty()
  @IsOptional()
  task?: string;

  @ApiModelProperty()
  @IsOptional()
  comments?: string;

  @ApiModelProperty()
  @IsOptional()
  receivedBy?: string;

  @ApiModelProperty()
  @IsOptional()
  performedBy?: string;

}
