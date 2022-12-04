import { Controller, Get, Param } from '@nestjs/common';
import { FilesService } from './files.service';

@Controller()
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get('/docs/:docName')
  async getSignedUrl(@Param('docName') docName: string) {
    const result = await this.filesService.getSignedLink(docName);
    return { url: result.url };
  }
}
