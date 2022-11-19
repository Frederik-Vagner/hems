import { ITask } from '@hems/interfaces';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CompletedAt } from './base.entity';

@Entity('tasks')
export class Task extends CompletedAt implements ITask {
  @ApiModelProperty({ example: '80a0d2ac-ec67-482e-9017-909b72a74be7' })
  @PrimaryGeneratedColumn('uuid')
  taskId!: string;

  @ApiModelProperty({ example: '09.30' })
  @Column()
  time!: string;

  @ApiModelProperty({example: 'Clear out trash'})
  @Column()
  task!: string;

  @ApiModelProperty({ example: 'DS' })
  @Column()
  initials!: string;
}
