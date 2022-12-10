import { Bike } from '@hems/models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikesService } from './bikes.service';
import { BikesController } from './bikes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bike])],
  providers: [BikesService],
  controllers: [BikesController],
  exports: [BikesService],
})
export class BikeModule {}
