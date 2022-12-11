import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { ICreateBikeRequest, IUpdateBikeRequest } from './bike.interface';

export class CreateBikeRequest implements ICreateBikeRequest {
  @ApiModelProperty({ example: '1' })
  @IsNotEmpty()
  numberOfBikes!: string;

  @ApiModelProperty({ example: Date.now() })
  @IsNotEmpty()
  @IsDateString()
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
  bikeFormCompleted!: boolean;

  @ApiModelProperty({ example: true })
  @IsOptional()
  @IsDateString()
  returned?: Date | null;

  @ApiModelProperty({ example: 'luxurious car' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date | null;
}

export class UpdateBikeRequest implements IUpdateBikeRequest {
  @ApiModelProperty({ example: '1' })
  @IsOptional()
  numberOfBikes?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  pickUpTime?: Date | null;

  @ApiModelProperty({ example: '1' })
  @IsOptional()
  name?: string;

  @ApiModelProperty({ example: '1' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: 'Guest' })
  @IsOptional()
  reservedBy?: string;

  @ApiModelProperty({ example: true })
  @IsOptional()
  bikeFormCompleted?: boolean;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  returned?: Date | null;

  @ApiModelProperty({ example: 'luxurious car' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date | null;
}
