import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { ICreateRequest } from "./luggage.interface";
import { LuggageType } from "./luggageType.enum";

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