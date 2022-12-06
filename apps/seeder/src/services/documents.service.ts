import { IDocument } from '@hems/interfaces';
import { Document } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { documents } from '../constants/documents.constant';

@Injectable()
export class DocumentsSeederService {
  constructor(
    @InjectRepository(Document)
    private readonly repo: Repository<Document>
  ) {}

  create(): Array<Promise<Document>> {
    return documents.map(async (document: IDocument) => {
      try {
        return await this.repo.save(document);
      } catch (error) {
        throw new Error(error);
      }
    });
  }
}
