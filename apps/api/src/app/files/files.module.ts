import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { FilesService } from './files.service';

@Module({
  imports: [HttpModule],
  providers: [FilesService],
  controllers: [],
  exports: [FilesService],
})
export class FilesModule {}
