import {
  CarSortOptions,
  CreateCarRequest,
  SortOrder,
  UpdateCarRequest,
} from '@hems/interfaces';
import { Car } from '@hems/models';
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
import { CarsService } from './cars.service';
import { toBool } from '../utils/query-params.utils';
import { RequiredQuery } from '../decorators/required-query.decorator';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  @ApiOperation({
    summary: 'Get a list of cars from the given day and before.',
  })
  @ApiOkResponse({ type: [Car] })
  @HttpCode(200)
  async getCarsBeforeCreatedAt(
    @RequiredQuery('createdAt')
    createdAt: string,
    @Query('status')
    status: string,
    @Query('search')
    search: string,
    @Query('sortBy')
    sortBy: CarSortOptions,
    @Query('sortOrder')
    sortOrder: SortOrder
  ) {
    const createdAtDate = new Date(Date.parse(createdAt));
    return this.carsService.findAllBeforeCreatedAt(
      createdAtDate,
      toBool(status),
      search,
      sortBy,
      sortOrder
    );
  }

  @Post()
  @ApiOperation({
    summary: 'Create a car entry.',
  })
  @ApiCreatedResponse({ type: Car })
  @HttpCode(201)
  async createCar(@Body() carData: CreateCarRequest) {
    return this.carsService.createCar(carData);
  }

  @Patch(':carId')
  @ApiOperation({
    summary: 'Update a car entry.',
  })
  @ApiCreatedResponse({ type: Car })
  @HttpCode(200)
  async updateCar(
    @Param('carId', ParseUUIDPipe) carId: string,
    @Body() carData: UpdateCarRequest
  ) {
    return this.carsService.updateCar(carId, carData);
  }
}
