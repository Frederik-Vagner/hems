import { CompletedAt } from './base.entity';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ICar } from '@hems/interfaces';

@Entity('cars')
export class Car extends CompletedAt implements ICar {
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  carId!: string;

  @ApiModelProperty({ example: '2345' })
  @Column()
  tagNr!: string;

  @ApiModelProperty({ example: '211' })
  @Column()
  room!: string;

  @ApiModelProperty({ example: Date.now() })
  @Column()
  arrivalDate!: Date;

  @ApiModelProperty({ example: Date.now() })
  @Column()
  departureDate!: Date;

  @ApiModelProperty({ example: 'Madsen' })
  @Column()
  name!: string;

  @ApiModelProperty({ example: 'AB60789' })
  @Column()
  licensePlate!: string;

  @ApiModelProperty({ example: Date.now() })
  @Column({ nullable: true })
  expirationDate?: Date;

  @ApiModelProperty({ example: Date.now() })
  @Column({ nullable: true })
  pickupTime?: Date;

  @ApiModelProperty({ example: Date.now() })
  @Column({ nullable: true })
  deliveryTime?: Date;

  @ApiModelProperty({ example: 'FV' })
  @Column({ nullable: true })
  bbDown?: string;

  @ApiModelProperty({ example: 'FV' })
  @Column({ nullable: true })
  bbUp?: string;

  @ApiModelProperty({ example: 'Front' })
  @Column()
  location!: string;

  @ApiModelProperty({ example: 'c102' })
  @Column({ nullable: true })
  parkingLot?: string;

  @ApiModelProperty({ example: 'FV' })
  @Column({ nullable: true })
  bbOut?: string;

  @ApiModelProperty({ example: 'luxurious car' })
  @Column({ nullable: true })
  comments?: string;

  @ApiModelProperty({ example: true })
  @Column()
  charged!: boolean;
}
