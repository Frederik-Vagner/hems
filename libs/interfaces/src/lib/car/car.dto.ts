import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { ICreateCarRequest, IUpdateCarRequest } from './car.interface';

export class CreateCarRequest implements ICreateCarRequest {
  @ApiModelProperty({ example: '2345' })
  @IsNotEmpty()
  tagNr!: string;

  @ApiModelProperty({ example: '211' })
  @IsNotEmpty()
  room!: string;

  @ApiModelProperty({ example: Date.now() })
  @IsNotEmpty()
  @IsDateString()
  arrivalDate!: Date;

  @ApiModelProperty({ example: Date.now() })
  @IsNotEmpty()
  @IsDateString()
  departureDate!: Date;

  @ApiModelProperty({ example: 'Madsen' })
  @IsNotEmpty()
  name!: string;

  @ApiModelProperty({ example: 'AB60789' })
  @IsNotEmpty()
  licensePlate!: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  expirationDate?: Date;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  pickupTime?: Date;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  deliveryTime?: Date;

  @ApiModelProperty({ example: 'fv' })
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty({ example: 'fv' })
  @IsOptional()
  bbUp?: string;

  @ApiModelProperty({ example: 'Front' })
  @IsNotEmpty()
  location!: string;

  @ApiModelProperty({ example: 'c102' })
  @IsOptional()
  parkingLot?: string;

  @ApiModelProperty({ example: 'fv' })
  @IsOptional()
  bbOut?: string;

  @ApiModelProperty({ example: 'luxurious car' })
  @IsNotEmpty()
  comments!: string;

  @ApiModelProperty({ example: true })
  @IsNotEmpty()
  charged!: boolean;
}

export class UpdateCarRequest implements IUpdateCarRequest {
  @ApiModelProperty({ example: '2345' })
  @IsOptional()
  tagNr?: string;

  @ApiModelProperty({ example: '211' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  arrivalDate?: Date;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  departureDate?: Date;

  @ApiModelProperty({ example: 'Madsen' })
  @IsOptional()
  name?: string;

  @ApiModelProperty({ example: 'AB60789' })
  @IsOptional()
  licensePlate?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  expirationDate?: Date;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  pickupTime?: Date;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  deliveryTime?: Date;

  @ApiModelProperty({ example: 'fv' })
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty({ example: 'fv' })
  @IsOptional()
  bbUp?: string;

  @ApiModelProperty({ example: 'Front' })
  @IsOptional()
  location?: string;

  @ApiModelProperty({ example: 'c102' })
  @IsOptional()
  parkingLot?: string;

  @ApiModelProperty({ example: 'fv' })
  @IsOptional()
  bbOut?: string;

  @ApiModelProperty({ example: 'luxurious car' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: true })
  @IsOptional()
  charged?: boolean;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date;
}
