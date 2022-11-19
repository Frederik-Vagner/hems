    // TODO: create new carlist entry(post funtion)
    // TODO: get all carListEntries (getMethod)
    // TODO: update carListEntries (postMethod)
    // TODO: find carListEntry by id (getMethod)

import { query } from '@angular/animations';
import { Car } from '@hems/models';
import {
  Controller,
  Get,
  HttpCode,
  Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CarsService } from './cars.service';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService) {}

    @Get()
    @ApiOperation({
        summary: 'Get a list of cars for the given day.',
    })
    @ApiOkResponse({ type: [Car]})
    @HttpCode(200)
    async getCarsByCreatedAt(
        @Query('createdAt')
        createdAt: string
    ) {
        const createdAtDate = new Date(Date.parse(createdAt));
        return this.carsService.findAllByCreatedAt(
            createdAtDate,
        );
    }
}
