import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import {
  ICreateLuggageRequest,
  IUpdateLuggageRequest,
} from './luggage.interface';
import { LuggageType } from './luggageType.enum';

export class CreateLuggageRequest implements ICreateLuggageRequest {
  @ApiModelProperty()
  @IsNotEmpty()
  @IsEnum(LuggageType)
  luggageType!: LuggageType;

  @ApiModelProperty()
  @IsOptional()
  roomReady?: boolean;

  @ApiModelProperty()
  @IsNotEmpty()
  room!: string;

  @ApiModelProperty()
  @IsNotEmpty()
  name!: string;

  @ApiModelProperty()
  @IsOptional()
  @IsDateString()
  arrivalTime?: Date;

  @ApiModelProperty()
  @IsNotEmpty()
  bags!: string;

  @ApiModelProperty()
  @IsNotEmpty()
  description!: string;

  @ApiModelProperty()
  @IsNotEmpty()
  tagNr!: string;

  @ApiModelProperty()
  @IsNotEmpty()
  location!: string;

  @ApiModelProperty()
  @IsNotEmpty()
  bbDown!: string;

  @ApiModelProperty()
  @IsNotEmpty()
  bbLr!: string;

  @ApiModelProperty()
  @IsOptional()
  bbOut?: string;
}

export class UpdateLuggageRequest implements IUpdateLuggageRequest {
  @ApiModelProperty()
  @IsOptional()
  @IsEnum(LuggageType)
  luggageType?: LuggageType;

  @ApiModelProperty()
  @IsOptional()
  roomReady?: boolean;

  @ApiModelProperty()
  @IsOptional()
  room?: string;

  @ApiModelProperty()
  @IsOptional()
  name?: string;

  @ApiModelProperty()
  @IsOptional()
  @IsDateString()
  arrivalTime?: Date;

  @ApiModelProperty()
  @IsOptional()
  bags?: string;

  @ApiModelProperty()
  @IsOptional()
  description?: string;

  @ApiModelProperty()
  @IsOptional()
  tagNr?: string;

  @ApiModelProperty()
  @IsOptional()
  location?: string;

  @ApiModelProperty()
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty()
  @IsOptional()
  bbLr?: string;

  @ApiModelProperty()
  @IsOptional()
  bbOut?: string;
}
