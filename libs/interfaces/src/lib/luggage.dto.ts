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

  @ApiModelProperty({ example: 'Room 420' })
  @IsNotEmpty()
  room!: string;

  @ApiModelProperty({ example: 'Teodor Jonasson' })
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
  @IsNotEmpty()
  description!: string;

  @ApiModelProperty({ example: '8912' })
  @IsNotEmpty()
  tagNr!: string;

  @ApiModelProperty({ example: 'LB1' })
  @IsNotEmpty()
  location!: string;

  @ApiModelProperty({ example: 'Teodor Jonas' })
  @IsNotEmpty()
  bbDown!: string;

  @ApiModelProperty({ example: 'Teo Jon' })
  @IsNotEmpty()
  bbLr!: string;

  @ApiModelProperty({ example: 'Mario' })
  @IsOptional()
  bbOut?: string;
}

export class UpdateLuggageRequest implements IUpdateLuggageRequest {
  @ApiModelProperty({ example: LuggageType.CHECKIN })
  @IsOptional()
  @IsEnum(LuggageType)
  luggageType?: LuggageType;

  @ApiModelProperty({ example: true })
  @IsOptional()
  roomReady?: boolean;

  @ApiModelProperty({ example: 'Room 420' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: 'Teodor Jonasson' })
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

  @ApiModelProperty({ example: 'Teodor Jonas' })
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty({ example: 'Teo Jon' })
  @IsOptional()
  bbLr?: string;

  @ApiModelProperty({ example: 'Mario' })
  @IsOptional()
  bbOut?: string;
}
