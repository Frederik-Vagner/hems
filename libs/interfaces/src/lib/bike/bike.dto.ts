import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { ICreateBikeRequest, IUpdateBikeRequest } from './bike.interface';

export class CreateBikeRequest implements ICreateBikeRequest {
  @ApiModelProperty({ example: '1' })
  @IsNotEmpty()
  numberOfBikes!: string;

  @ApiModelProperty({ example: Date.now() })
  @IsNotEmpty()
  pickUpTime!: Date;

  @ApiModelProperty({ example: '1' })
  @IsNotEmpty()
  name!: string;

  @ApiModelProperty({ example: '1' })
  @IsNotEmpty()
  room!: string;

  @ApiModelProperty({ example: 'Guest' })
  @IsNotEmpty()
  reservedBy!: string;

  @ApiModelProperty({ example: true })
  @IsNotEmpty()
  bikeForm!: boolean;

  @ApiModelProperty({ example: true })
  @IsNotEmpty()
  returned!: boolean;

  @ApiModelProperty({ example: 'luxurious car' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date;
}

export class UpdateBikeRequest implements IUpdateBikeRequest {
    @ApiModelProperty({ example: '1' })
    @IsNotEmpty()
    numberOfBikes!: string;
  
    @ApiModelProperty({ example: Date.now() })
    @IsNotEmpty()
    pickUpTime!: Date;
  
    @ApiModelProperty({ example: '1' })
    @IsNotEmpty()
    name!: string;
  
    @ApiModelProperty({ example: '1' })
    @IsNotEmpty()
    room!: string;
  
    @ApiModelProperty({ example: 'Guest' })
    @IsNotEmpty()
    reservedBy!: string;
  
    @ApiModelProperty({ example: true })
    @IsNotEmpty()
    bikeForm!: boolean;
  
    @ApiModelProperty({ example: true })
    @IsNotEmpty()
    returned!: boolean;

    @ApiModelProperty({ example: 'luxurious car' })
    @IsOptional()
    comments?: string;
  
    @ApiModelProperty({ example: Date.now() })
    @IsOptional()
    @IsDateString()
    completedAt?: Date;
}
