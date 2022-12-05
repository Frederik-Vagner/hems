import {
  CreateDocumentRequest,
  DocumentSortOptions,
  SortOrder,
  UpdateDocumentRequest,
} from '@hems/interfaces';
import { Document } from '@hems/models';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { toBool } from '../utils/query-params.utils';
import { DocumentsService } from './documents.service';
import 'multer';

const FILE_MAX_SIZE = 50000000;
const FILE_TYPES = /(pdf|docx)\b/;

@ApiTags('Documents')
@Controller('documents')
export class DocumentsController {
  constructor(private documentsService: DocumentsService) {}

  @Get()
  @ApiOperation({
    summary: 'Get a list of documents.',
  })
  @ApiOkResponse({ type: [Document] })
  @ApiQuery({ name: 'showOnDashboard', required: false, example: 'true' })
  @ApiQuery({ name: 'search', required: false, example: 'text' })
  @ApiQuery({
    name: 'sortBy',
    enum: DocumentSortOptions,
    required: false,
    example: DocumentSortOptions.LAST_VIEWED_AT,
  })
  @ApiQuery({
    name: 'sortOrder',
    enum: SortOrder,
    required: false,
    example: SortOrder.ASCENDING,
  })
  @HttpCode(200)
  async getDocuments(
    @Query('showOnDashboard')
    showOnDashboard: string,
    @Query('search')
    search: string,
    @Query('sortBy')
    sortBy: DocumentSortOptions,
    @Query('sortOrder')
    sortOrder: SortOrder
  ) {
    return this.documentsService.findAll(
      toBool(showOnDashboard),
      search,
      sortBy,
      sortOrder
    );
  }

  @Get(':documentId')
  @ApiOperation({
    summary: 'Get a document entry by id.',
  })
  @ApiOkResponse({ type: Document })
  @HttpCode(200)
  async getDocumentById(
    @Param('documentId', ParseUUIDPipe) documentId: string
  ) {
    return this.documentsService.findById(documentId);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a document entry.',
  })
  @ApiCreatedResponse({ type: Document })
  @HttpCode(201)
  @UseInterceptors(FileInterceptor('document'))
  async createDocument(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: FILE_TYPES })
        .addMaxSizeValidator({ maxSize: FILE_MAX_SIZE })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        })
    )
    document: Express.Multer.File,
    @Body() documentData: CreateDocumentRequest
  ) {
    return this.documentsService.createDocument(documentData, document);
  }

  @Patch(':documentId')
  @ApiOperation({
    summary: 'Update a document entry.',
  })
  @ApiCreatedResponse({ type: Document })
  @HttpCode(200)
  async updateDocument(
    @Param('documentId', ParseUUIDPipe) documentId: string,

    @Body() documentData: UpdateDocumentRequest
  ) {
    return this.documentsService.updateDocument(documentId, documentData);
  }

  @Patch('/file/:documentId')
  @ApiOperation({
    summary: 'Upload a new file for the document entry.',
  })
  @ApiCreatedResponse({ type: Document })
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('document'))
  async updateDocumentFile(
    @Param('documentId', ParseUUIDPipe) documentId: string,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: FILE_TYPES })
        .addMaxSizeValidator({ maxSize: FILE_MAX_SIZE })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        })
    )
    document: Express.Multer.File
  ) {
    return this.documentsService.updateDocumentFile(documentId, document);
  }
}
