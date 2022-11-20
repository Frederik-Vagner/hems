import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { ICreateRequest, IUpdateRequest } from './luggage.interface';
import { LuggageType } from './luggageType.enum';

export class CreateRequest implements ICreateRequest {
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
  bbDown!: string;

  @ApiModelProperty()
  @IsNotEmpty()
  bbLr!: string;

  @ApiModelProperty()
  @IsOptional()
  bbOut?: string;
}

export class UpdateRequest implements IUpdateRequest {
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
  bbDown?: string;

  @ApiModelProperty()
  @IsOptional()
  bbLr?: string;

  @ApiModelProperty()
  @IsOptional()
  bbOut?: string;
}
