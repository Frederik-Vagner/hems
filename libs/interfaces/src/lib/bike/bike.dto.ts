import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsOptional } from 'class-validator';
import { ICreateBikeRequest, IUpdateBikeRequest } from './bike.interface';

export class CreateBikeRequest implements ICreateBikeRequest {
  @ApiModelProperty({ example: '1' })
  @IsOptional()
  nrOfBikes?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  pickUpTime?: Date | null;

  @ApiModelProperty({ example: 'Teodor' })
  @IsOptional()
  name?: string;

  @ApiModelProperty({ example: '132' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: 'Guest' })
  @IsOptional()
  reservedBy?: string;

  @ApiModelProperty({ example: true })
  @IsOptional()
  bikeFormCompleted?: boolean;

  @ApiModelProperty({ example: 'glossy bike' })
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
  nrOfBikes?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  pickUpTime?: Date | null;

  @ApiModelProperty({ example: 'Teodor' })
  @IsOptional()
  name?: string;

  @ApiModelProperty({ example: '132' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: 'Guest' })
  @IsOptional()
  reservedBy?: string;

  @ApiModelProperty({ example: true })
  @IsOptional()
  bikeFormCompleted?: boolean;

  @ApiModelProperty({ example: 'glossy bike' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date | null;
}
