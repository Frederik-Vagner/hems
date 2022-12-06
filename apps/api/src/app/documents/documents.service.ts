import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from '@hems/models';
import { Like, Repository } from 'typeorm';
import {
  CreateDocumentRequest,
  DocumentSortOptions,
  SortOrder,
  UpdateDocumentRequest,
} from '@hems/interfaces';
import 'multer';
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
      order: this.getSortingConditions(sortBy, sortOrder),
    });
  }

  async findById(documentId: string) {
    const document = await this.documentRepo.findOneByOrFail({ documentId });

    document.lastViewedAt = new Date();

    return await this.documentRepo.save(document);
  }

  async createDocument(
    documentData: CreateDocumentRequest,
    document: Express.Multer.File
  ) {
    await this.fileService.uploadFile(document.buffer, document.originalname);
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

    await this.fileService.uploadFile(
      documentFile.buffer,
      documentFile.originalname
    );
    document.documentName = documentFile.originalname;

    return await this.documentRepo.save(document);
  }

  async deleteDocument(documentId: string) {
    const document = await this.documentRepo.findOneByOrFail({ documentId });

    await this.fileService.deleteFile(document.documentName);
    await this.documentRepo.delete(document);

    return { message: 'Deleted.' };
  }

  private getSortingConditions(
    sortBy: DocumentSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    switch (sortBy) {
      case DocumentSortOptions.CREATED_AT:
        return { createdAt: sortOrder };
      case DocumentSortOptions.LAST_VIEWED_AT:
        return { lastViewedAt: sortOrder };
      case DocumentSortOptions.SHOW_ON_DASHBOARD:
        return { showOnDashboard: sortOrder };
      case DocumentSortOptions.TITLE:
        return { title: sortOrder };
      default:
        return undefined;
    }
  }
}
