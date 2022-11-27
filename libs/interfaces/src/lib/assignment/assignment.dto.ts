import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import {
  ICreateAssignmentRequest,
  IUpdateAssignmentRequest,
} from './assignment.interface';

export class CreateAssignmentRequest implements ICreateAssignmentRequest {
  @ApiModelProperty({ example: '211' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: 'RA' })
  @IsOptional()
  task?: string;

  @ApiModelProperty({ example: 'New keys and package delivery' })
  @IsNotEmpty()
  comments!: string;

  @ApiModelProperty({ example: 'Rec' })
  @IsNotEmpty()
  receivedBy!: string;

  @ApiModelProperty({ example: 'fv' })
  @IsOptional()
  performedBy?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsNotEmpty()
  @IsDateString()
  receivedAt!: Date;
}

export class UpdateAssignmentRequest implements IUpdateAssignmentRequest {
  @ApiModelProperty({ example: '211' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: 'RA' })
  @IsOptional()
  task?: string;

  @ApiModelProperty({ example: 'New keys and package delivery' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: 'Rec' })
  @IsOptional()
  receivedBy?: string;

  @ApiModelProperty({ example: 'fv' })
  @IsOptional()
  performedBy?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  receivedAt?: Date;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date;
}
