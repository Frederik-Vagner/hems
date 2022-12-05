import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
// vscode organize-code will remove these two imports. They are actually needed
import { Express } from 'express'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Multer } from 'multer'

@Controller()
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get('/docs/:docName')
  async getSignedUrl(@Param('docName') docName: string) {
    const result = await this.filesService.getSignedLink(docName);
    return { url: result.url };
  }

  @Post('/docs')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('file', file);

    const uploadedFile = await this.filesService.uploadFile(
      file.buffer,
      file.originalname
    );
    console.log('File has been uploaded,', uploadedFile);
  }
}
