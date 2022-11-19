import { LuggageType } from '@hems/interfaces';
import { Luggage } from '@hems/models';
import {
  Controller,
  Get,
  HttpCode,
  Param,
  Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
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
}
