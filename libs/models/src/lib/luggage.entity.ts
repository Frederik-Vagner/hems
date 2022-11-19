import { ILuggage, LuggageType, Location } from '@hems/interfaces';
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

  @ApiModelProperty({ example: 'Room 420' })
  @Column()
  room!: string;

  @ApiModelProperty({ example: 'Teodor "still" Jonasson' })
  @Column()
  name!: string;

  @ApiModelProperty({ example: Date.now() })
  @Column({ nullable: true })
  arrivalTime?: Date;

  @ApiModelProperty({ example: '3+4' })
  @Column()
  bags!: string;

  @ApiModelProperty({ example: 'Children, Bikes, Ski Equipment' })
  @Column()
  description!: string;

  @ApiModelProperty({ example: '891239993' })
  @Column()
  tagNr!: string;

  @ApiModelProperty({ example: Location.HVG_HOVEDVAGTSGADE })
  @Column({ type: 'enum', enum: Location })
  location!: Location;

  @ApiModelProperty({ example: 'Teodor Not So Jonas' })
  @Column()
  bbDown!: string;

  @ApiModelProperty({ example: 'Teo Jon' })
  @Column()
  bbLr!: string;

  @ApiModelProperty({ example: 'Mario' })
  @Column({ nullable: true })
  bbOut?: string;
}
