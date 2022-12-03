import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import {
  ICreateLuggageRequest,
  IUpdateLuggageRequest,
} from './luggage.interface';
import { LuggageType } from './luggageType.enum';

export class CreateLuggageRequest implements ICreateLuggageRequest {
  @ApiModelProperty({ example: LuggageType.CHECKIN })
  @IsNotEmpty()
  @IsEnum(LuggageType)
  luggageType!: LuggageType;

  @ApiModelProperty({ example: true })
  @IsOptional()
  roomReady?: boolean;

  @ApiModelProperty({ example: '420' })
  @IsNotEmpty()
  room!: string;

  @ApiModelProperty({ example: 'TJ' })
  @IsNotEmpty()
  name!: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  arrivalTime?: Date;

  @ApiModelProperty({ example: '3+4' })
  @IsNotEmpty()
  bags!: string;

  @ApiModelProperty({ example: 'Bikes, Ski Equipment' })
  @IsOptional()
  description?: string;

  @ApiModelProperty({ example: '8912' })
  @IsNotEmpty()
  tagNr!: string;

  @ApiModelProperty({ example: 'LB1' })
  @IsNotEmpty()
  location!: string;

  @ApiModelProperty({ example: 'TJ' })
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty({ example: 'TJ' })
  @IsNotEmpty()
  bbLr!: string;

  @ApiModelProperty({ example: 'ML' })
  @IsOptional()
  bbOut?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  dateNeeded?: Date;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date;
}

export class UpdateLuggageRequest implements IUpdateLuggageRequest {
  @ApiModelProperty({ example: LuggageType.CHECKIN })
  @IsOptional()
  @IsEnum(LuggageType)
  luggageType?: LuggageType;

  @ApiModelProperty({ example: true })
  @IsOptional()
  roomReady?: boolean;

  @ApiModelProperty({ example: '420' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: 'TJ' })
  @IsOptional()
  name?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  arrivalTime?: Date;

  @ApiModelProperty({ example: '3+4' })
  @IsOptional()
  bags?: string;

  @ApiModelProperty({ example: 'Bikes, Ski Equipment' })
  @IsOptional()
  description?: string;

  @ApiModelProperty({ example: '8912' })
  @IsOptional()
  tagNr?: string;

  @ApiModelProperty({ example: 'LB1' })
  @IsOptional()
  location?: string;

  @ApiModelProperty({ example: 'TJ' })
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty({ example: 'TJ' })
  @IsOptional()
  bbLr?: string;

  @ApiModelProperty({ example: 'ML' })
  @IsOptional()
  bbOut?: string;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  dateNeeded?: Date;

  @ApiModelProperty({ example: Date.now() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date;
}
