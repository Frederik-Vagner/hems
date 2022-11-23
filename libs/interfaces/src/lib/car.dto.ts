import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { ICreateCarRequest, IUpdateCarRequest } from './car.interface';
import { Location } from './location.enum';

export class CreateCarRequest implements ICreateCarRequest {
  @ApiModelProperty({ example: '2345' })
  @IsNotEmpty()
  tagNr!: string;

  @ApiModelProperty({ example: '211' })
  @IsNotEmpty()
  room!: string;

  @ApiModelProperty({ example: '04/06/2022' })
  @IsDateString()
  @IsNotEmpty()
  arrivalDate!: Date;

  @ApiModelProperty({ example: '08/06/2022' })
  @IsDateString()
  @IsNotEmpty()
  departureDate!: Date;

  @ApiModelProperty({ example: 'madsen' })
  @IsNotEmpty()
  name!: string;

  @ApiModelProperty({ example: 'AB60789' })
  @IsNotEmpty()
  licensePlate!: string;

  @ApiModelProperty({ example: '01/04/2022 - 16:40' })
  @IsDateString()
  @IsOptional()
  expirationDate?: Date;

  @ApiModelProperty({ example: '9:00 / RN = Call Down' })
  @IsDateString()
  @IsOptional()
  pickupTime?: Date;

  @ApiModelProperty({ example: '02/04/2022 - 9:15' })
  @IsDateString()
  @IsOptional()
  deliveryTime?: Date;

  @ApiModelProperty({ example: 'fv' })
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty({ example: 'fv' })
  @IsOptional()
  bbUp?: string;

  @ApiModelProperty({ example: Location.FH_FRONT_HOTEL })
  @IsOptional()
  @IsEnum(Location)
  location?: Location;

  @ApiModelProperty({ example: 'c102' })
  @IsOptional()
  parkingLot?: string;

  @ApiModelProperty({ example: 'luxurious car' })
  @IsNotEmpty()
  comments!: string;

  @ApiModelProperty({ example: 'yes/no' })
  @IsNotEmpty()
  charged!: boolean;

  @ApiModelProperty({ example: '02/04/2022 - 9:15' })
  @IsDateString()
  @IsOptional()
  completedAt?: Date;
}

export class UpdateCarRequest implements IUpdateCarRequest {
  @ApiModelProperty({ example: '2345' })
  @IsOptional()
  tagNr?: string;

  @ApiModelProperty({ example: '211' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: '04/06/2022' })
  @IsDateString()
  @IsOptional()
  arrivalDate?: Date;

  @ApiModelProperty({ example: '08/06/2022' })
  @IsDateString()
  @IsOptional()
  departureDate?: Date;

  @ApiModelProperty({ example: 'madsen' })
  @IsOptional()
  name?: string;

  @ApiModelProperty({ example: 'AB60789' })
  @IsOptional()
  licensePlate?: string;

  @ApiModelProperty({ example: '01/04/2022 - 16:40' })
  @IsDateString()
  @IsOptional()
  expirationDate?: Date;

  @ApiModelProperty({ example: '9:00 / RN = Call Down' })
  @IsDateString()
  @IsOptional()
  pickupTime?: Date;

  @ApiModelProperty({ example: '02/04/2022 - 9:15' })
  @IsDateString()
  @IsOptional()
  deliveryTime?: Date;

  @ApiModelProperty({ example: 'fv' })
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty({ example: 'fv' })
  @IsOptional()
  bbUp?: string;

  @ApiModelProperty({ example: Location.FH_FRONT_HOTEL })
  @IsOptional()
  @IsEnum(Location)
  location?: Location;

  @ApiModelProperty({ example: 'c102' })
  @IsOptional()
  parkingLot?: string;

  @ApiModelProperty({ example: 'luxurious car' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: 'yes/no' })
  @IsOptional()
  charged?: boolean;

  @ApiModelProperty({ example: '02/04/2022 - 9:15' })
  @IsDateString()
  @IsOptional()
  completedAt?: Date;
}
