import { IDocument } from '@hems/interfaces';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

@Entity('documents')
export class Document extends Base implements IDocument {
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  documentId!: string;

  @ApiModelProperty({ example: 'Title stuff' })
  @Column()
  title!: string;

  @ApiModelProperty({ example: 'This is such interesting data.' })
  @Column()
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  @Column()
  lastViewedAt?: Date;

  @ApiModelProperty({ example: true, default: false })
  @Column() // TODO: clarify if the annotation is needed seeing as we have a default value set
  showOnDashboard!: boolean;

  @ApiModelProperty({ example: 'https://link-to-document' })
  @Column()
  documentUrl!: string;
}
