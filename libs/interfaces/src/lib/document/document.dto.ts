import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { ICreateDocumentRequest } from './document.interface';
import { IUpdateAssignmentRequest } from '../assignment/assignment.interface';

export class CreateDocumentRequest implements ICreateDocumentRequest {
  @ApiModelProperty({ example: 'Title stuff' })
  @IsNotEmpty()
  title!: string;

  @ApiModelProperty({ example: 'This is such interesting data.' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  lastViewedAt?: Date;

  @ApiModelProperty({ example: true, default: false })
  @IsNotEmpty() // TODO: clarify if the annotation is needed seeing as we have a default value set
  showOnDashboard!: boolean;
}

export class UpdateDocumentRequest implements IUpdateAssignmentRequest {
  @ApiModelProperty({ example: 'Title stuff' })
  @IsOptional()
  title?: string;

  @ApiModelProperty({ example: 'This is such interesting data.' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  lastViewedAt?: Date;

  @ApiModelProperty({ example: true, default: false })
  @IsOptional() // TODO: clarify if the annotation is needed seeing as we have a default value set
  showOnDashboard?: boolean;
}
