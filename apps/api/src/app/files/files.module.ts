import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';

@Module({
  imports: [HttpModule],
  providers: [FilesService],
  controllers: [FilesController],
  exports: [],
})
export class FilesModule {}
