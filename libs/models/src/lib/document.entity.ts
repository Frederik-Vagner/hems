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
  @Column({ nullable: true })
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  @Column({ nullable: true })
  lastViewedAt?: Date;

  @ApiModelProperty({ example: true, default: false })
  @Column()
  showOnDashboard!: boolean;

  @ApiModelProperty({ example: 'declarationOfIndepenence.pdf' })
  @Column()
  documentName!: string;
}
