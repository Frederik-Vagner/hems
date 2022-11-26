import { ILuggage, LuggageType } from '@hems/interfaces';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CompletedAt } from './base.entity';

@Entity('luggages')
export class Luggage extends CompletedAt implements ILuggage {
  @ApiModelProperty({ example: '80a0d2ac-ec67-482e-9017-909b72a74be7' })
  @PrimaryGeneratedColumn('uuid')
  luggageId!: string;

  @ApiModelProperty({ example: LuggageType.CHECKIN })
  @Column({ type: 'enum', enum: LuggageType })
  luggageType!: LuggageType;

  @ApiModelProperty({ example: true })
  @Column({ nullable: true })
  roomReady?: boolean;

  @ApiModelProperty({ example: '420' })
  @Column()
  room!: string;

  @ApiModelProperty({ example: 'TJ' })
  @Column()
  name!: string;

  @ApiModelProperty({ example: Date.now() })
  @Column({ nullable: true })
  arrivalTime?: Date;

  @ApiModelProperty({ example: '3+4' })
  @Column()
  bags!: string;

  @ApiModelProperty({ example: 'Bikes, Ski Equipment' })
  @Column()
  description!: string;

  @ApiModelProperty({ example: '8912' })
  @Column()
  tagNr!: string;

  @ApiModelProperty({ example: 'LB1' })
  @Column()
  location!: string;

  @ApiModelProperty({ example: 'TJ' })
  @Column()
  bbDown!: string;

  @ApiModelProperty({ example: 'TJ' })
  @Column()
  bbLr!: string;

  @ApiModelProperty({ example: 'ML' })
  @Column({ nullable: true })
  bbOut?: string;
}
