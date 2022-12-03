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

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private readonly documentRepo: Repository<Document>
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
      where: [
        { ...baseConditions, comments: searchCondition },
        { ...baseConditions, title: searchCondition },
      ],
      order: this.getSortingConditions(sortBy, sortOrder),
    });
  }

  async createDocument(documentData: CreateDocumentRequest) {
    // TODO: Make sure there is only one file submitted
    // TODO: Make sure file is a PDF or DOCX
    // TODO: Make sure file is not bigger than 50MB
    return await this.documentRepo.save(documentData);
  }

  async updateDocument(
    documentId: string,
    documentData: UpdateDocumentRequest
  ) {
    const document = await this.documentRepo.findOneByOrFail({ documentId });

    // TODO: Make sure there is only one file submitted
    // TODO: Make sure file is a PDF or DOCX
    // TODO: Make sure file is not bigger than 50MB

    for (const key in documentData) {
      if (Object.prototype.hasOwnProperty.call(documentData, key)) {
        document[key] = documentData[key];
      }
    }

    return await this.documentRepo.save(document);
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
