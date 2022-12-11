import { CompletedAt } from './base.entity';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IBike } from '@hems/interfaces';

@Entity('bikes')
export class Bike extends CompletedAt implements IBike {
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  bikeId!: string;

  @ApiModelProperty({ example: '1' })
  @Column({ nullable: true })
  nrOfBikes?: string;

  @ApiModelProperty({ example: new Date() })
  @Column({ nullable: true })
  pickupTime?: Date;

  @ApiModelProperty({ example: 'Madsen' })
  @Column({ nullable: true })
  name?: string;

  @ApiModelProperty({ example: '211' })
  @Column({ nullable: true })
  room?: string;

  @ApiModelProperty({ example: 'Teodor' })
  @Column({ nullable: true })
  reservedBy?: string;

  @ApiModelProperty({ example: true })
  @Column({ nullable: true })
  bikeFormCompleted?: boolean;

  @ApiModelProperty({ example: 'Mate-bike' })
  @Column({ nullable: true })
  comments?: string;
}
