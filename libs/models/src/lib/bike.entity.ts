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
  @Column()
  numberOfBikes!: string;

  @ApiModelProperty({ example: Date.now() })
  @Column({ nullable: true })
  pickUpTime?: Date;

  @ApiModelProperty({ example: 'Madsen' })
  @Column()
  name!: string;

  @ApiModelProperty({ example: '211' })
  @Column()
  room!: string;

  @ApiModelProperty({ example: '?' })
  @Column()
  reservedBy!: string;

  @ApiModelProperty({ example: true })
  @Column()
  bikeForm!: boolean;

  @ApiModelProperty({ example: true })
  @Column()
  returned!: boolean;

  @ApiModelProperty({ example: 'Mate-bike' })
  @Column({ nullable: true })
  comments?: string;
}
