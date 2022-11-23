import { Car } from "@hems/models";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsService } from './cars.service';
import { CarsController} from './cars.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Car])],
    providers: [CarsService],
    controllers: [CarsController],
    exports: [CarsService],
})
export class CarsModule{}