import { IAssignment } from '@hems/interfaces';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CompletedAt } from './base.entity';

@Entity('assignments')
export class Assignment extends CompletedAt implements IAssignment {

  @ApiModelProperty({ example: '80a0d2ac-ec67-482e-9017-909b72a74be7' })
  @PrimaryGeneratedColumn('uuid')
  assignmentId!: string;

  @ApiModelProperty({ example: '211' })
  @Column()
  room!: string;

  @ApiModelProperty({example: 'RA'})
  @Column()
  task!: string;

  @ApiModelProperty({ example: 'New keys and package delivery' })
  @Column()
  comments!: string;

  @ApiModelProperty({example: 'Rec'})
  @Column()
  receivedBy!: string;

  @ApiModelProperty({example: 'fv'})
  @Column()
  performedBy!: string;

}
