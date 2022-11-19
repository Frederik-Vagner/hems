import { Luggage } from '@hems/models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LuggagesService } from './luggages.service';
import { LuggagesController } from './luggages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Luggage])],
  providers: [LuggagesService],
  controllers: [LuggagesController],
  exports: [LuggagesService],
})
export class LuggagesModule {}
