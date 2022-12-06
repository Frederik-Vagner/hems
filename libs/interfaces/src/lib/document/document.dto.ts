import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { IUpdateAssignmentRequest } from '../assignment/assignment.interface';
import { CompletedAtResponse } from '../base.dto';
import { ICreateDocumentRequest, IDocument } from './document.interface';

export class GetDocumentResponse
  extends CompletedAtResponse
  implements IDocument
{
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  documentId!: string;

  @ApiModelProperty({ example: 'Title stuff' })
  title!: string;

  @ApiModelProperty({ example: 'This is such interesting data.' })
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  lastViewedAt?: Date;

  @ApiModelProperty({ example: true, default: false })
  showOnDashboard!: boolean;

  @ApiModelProperty({ example: 'declarationOfIndepenence.pdf' })
  documentName!: string;
}

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
  @IsNotEmpty()
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
  @IsOptional()
  showOnDashboard?: boolean;
}

export class DeleteDocumentResponse {
  @ApiModelProperty({ example: 'Deleted.' })
  message = 'Deleted.';
}

export class GetDocumentByIdResponse extends GetDocumentResponse {
  @ApiModelProperty({
    example:
      'https://eu-central-1.linodeobjects.com:443/hems-documents/21234.pdf?Signature=XEiYEET1C4T3I25s0I5K1IOH%2Co%3X&Expires=1670271241&AWSAccessKeyId=123456789EAEA',
  })
  downloadUrl!: string;
}
