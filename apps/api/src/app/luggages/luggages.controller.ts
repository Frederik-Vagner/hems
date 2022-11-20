import { CreateRequest, LuggageType, UpdateRequest } from '@hems/interfaces';
import { Luggage } from '@hems/models';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { LuggagesService } from './luggages.service';

@ApiTags('Luggages')
@Controller('luggages')
export class LuggagesController {
  constructor(private luggagesService: LuggagesService) {}

  @Get(':luggageType')
  @ApiOperation({
    summary: 'Get a list of checked in luggages for the given day.',
  })
  @ApiOkResponse({ type: [Luggage] })
  @HttpCode(200)
  async getLuggagesByLuggageTypeAndCreatedAt(
    @Param('luggageType')
    luggageType: LuggageType,
    @Query('createdAt')
    createdAt: string
  ) {
    const createdAtDate = new Date(Date.parse(createdAt));
    return this.luggagesService.findAllByLuggageTypeAndCreatedAt(
      luggageType,
      createdAtDate
    );
  }

  @Post()
  @ApiOperation({
    summary: 'Create a luggage entry.',
  })
  @ApiCreatedResponse({ type: Luggage })
  @HttpCode(201)
  async createLuggage(@Body() luggageData: CreateRequest) {
    return this.luggagesService.createLuggage(luggageData);
  }

  @Patch(':luggageId')
  @ApiOperation({
    summary: 'Update a luggage entry.',
  })
  @ApiCreatedResponse({ type: Luggage })
  @HttpCode(200)
  async updateLuggage(
    @Param('luggageId', ParseUUIDPipe) luggageId: string,
    @Body() luggageData: UpdateRequest
  ) {
    return this.luggagesService.updateLuggage(luggageId, luggageData);
  }
}
