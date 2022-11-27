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
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { RequiredQuery } from '../decorators/required-query.decorator';
import { toBool } from '../utils/query-params.utils';
import { CarsService } from './cars.service';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  @ApiOperation({
    summary: 'Get a list of cars from the given day and before.',
  })
  @ApiOkResponse({ type: [Car] })
  @ApiQuery({ name: 'createdAt', required: true, example: new Date() })
  @ApiQuery({ name: 'status', required: false, example: 'true' })
  @ApiQuery({ name: 'search', required: false, example: 'text' })
  @ApiQuery({
    name: 'sortBy',
    enum: CarSortOptions,
    required: false,
    example: CarSortOptions.DELIVERY_TIME,
  })
  @ApiQuery({
    name: 'sortOrder',
    enum: SortOrder,
    required: false,
    example: SortOrder.ASCENDING,
  })
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
