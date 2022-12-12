import {
  CreateDocumentRequest,
  DocumentSortOptions,
  SortOrder,
  UpdateDocumentRequest,
} from '@hems/interfaces';
import { Document } from '@hems/models';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import 'multer';
import { Like, Repository } from 'typeorm';
import { FilesService } from '../files/files.service';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private readonly documentRepo: Repository<Document>,
    private readonly fileService: FilesService
  ) {}

  async findAll(
    showOnDashboard: boolean | undefined,
    search: string | undefined,
    sortBy: DocumentSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    const baseConditions = {
      showOnDashboard,
    };

    const searchCondition = search ? Like(`%${search}%`) : undefined;

    return this.documentRepo.find({
      where: { ...baseConditions, title: searchCondition }, // This particular query does not support multiple where clauses
      order: { ...this.getSortingConditions(sortBy, sortOrder) },
    });
  }

  async findById(documentId: string) {
    const document = await this.documentRepo.findOneByOrFail({ documentId });

    document.lastViewedAt = new Date();

    return await this.documentRepo.save(document);
  }

  async getFileLink(filename: string) {
    try {
      return await this.fileService.getSignedLink(filename, 600);
    } catch (error) {
      throw new HttpException(
        'Failed to get the document link. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async createDocument(
    documentData: CreateDocumentRequest,
    document: Express.Multer.File
  ) {
    try {
      await this.fileService.uploadFile(document.buffer, document.originalname);
    } catch (error) {
      throw new HttpException(
        'Failed to upload the document. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    return await this.documentRepo.save({
      ...documentData,
      documentName: document.originalname,
    });
  }

  async updateDocument(
    documentId: string,
    documentData: UpdateDocumentRequest
  ) {
    const document = await this.documentRepo.findOneByOrFail({ documentId });

    for (const key in documentData) {
      if (Object.prototype.hasOwnProperty.call(documentData, key)) {
        document[key] = documentData[key];
      }
    }

    return await this.documentRepo.save(document);
  }

  async updateDocumentFile(
    documentId: string,
    documentFile: Express.Multer.File
  ) {
    const document = await this.documentRepo.findOneByOrFail({ documentId });

    try {
      await this.fileService.uploadFile(
        documentFile.buffer,
        documentFile.originalname
      );
    } catch (error) {
      throw new HttpException(
        'Failed to upload the document. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    document.documentName = documentFile.originalname;

    return await this.documentRepo.save(document);
  }

  async deleteDocument(documentId: string) {
    const document = await this.documentRepo.findOneByOrFail({ documentId });

    try {
      await this.fileService.deleteFile(document.documentName);
    } catch (error) {
      throw new HttpException(
        'Failed to delete the document. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    await this.documentRepo.remove(document);
    return { message: 'Deleted.' };
  }

  private getSortingConditions(
    sortBy: DocumentSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    switch (sortBy) {
      case DocumentSortOptions.CREATED_AT:
        return {
          createdAt: {
            nulls: 'LAST' as 'LAST' | 'first' | 'last' | 'FIRST',
            sortOrder,
          },
        };
      case DocumentSortOptions.LAST_VIEWED_AT:
        return {
          lastViewedAt: {
            nulls: 'LAST' as 'LAST' | 'first' | 'last' | 'FIRST',
            direction: SortOrder.DESCENDING,
          },
        };
      case DocumentSortOptions.SHOW_ON_DASHBOARD:
        return {
          showOnDashboard: {
            nulls: 'LAST' as 'LAST' | 'first' | 'last' | 'FIRST',
            sortOrder,
          },
        };
      case DocumentSortOptions.TITLE:
        return {
          title: {
            nulls: 'LAST' as 'LAST' | 'first' | 'last' | 'FIRST',
            sortOrder,
          },
        };
      default:
        return undefined;
    }
  }
}
