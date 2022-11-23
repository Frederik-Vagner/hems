import { CompletedAt } from './base.entity';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ICar, Location } from '@hems/interfaces';

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

  @ApiModelProperty({ example: '04/06/2022' })
  @Column()
  arrivalDate!: Date;

  @ApiModelProperty({ example: '08/06/2022' })
  @Column()
  departureDate!: Date;

  @ApiModelProperty({ example: 'madsen' })
  @Column()
  name!: string;

  @ApiModelProperty({ example: 'AB60789' })
  @Column()
  licensePlate!: string;

  @ApiModelProperty({ example: '01/04/2022 - 16:40' })
  @Column({ nullable: true })
  expirationDate?: Date;

  @ApiModelProperty({ example: '9:00 / RN = Call Down' })
  @Column({ nullable: true })
  pickupTime?: Date;

  @ApiModelProperty({ example: '02/04/2022 - 9:15' })
  @Column({ nullable: true })
  deliveryTime?: Date;

  @ApiModelProperty({ example: 'fv' })
  @Column({ nullable: true })
  bbDown?: string;

  @ApiModelProperty({ example: 'fv' })
  @Column({ nullable: true })
  bbUp?: string;

  @ApiModelProperty({ example: Location.FH_FRONT_HOTEL })
  @Column({
    type: 'enum',
    enum: Location,
    default: Location.PARKING_LOT_A,
    nullable: true,
  })
  location?: Location;

  @ApiModelProperty({ example: 'c102' })
  @Column({ nullable: true })
  parkingLot?: string;

  @ApiModelProperty({ example: 'luxurious car' })
  @Column()
  comments!: string;

  @ApiModelProperty({ example: 'yes/no' })
  @Column()
  charged!: boolean;

  @ApiModelProperty({ example: '02/04/2022 - 9:15' })
  @Column({ nullable: true })
  completedAt?: Date;
}
