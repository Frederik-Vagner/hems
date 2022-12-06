import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { IDocument } from '@hems/interfaces';
import { Document } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import * as path from 'path';
import { Repository } from 'typeorm';
import { documents } from '../constants/documents.constant';

@Injectable()
export class DocumentsSeederService {
  constructor(
    @InjectRepository(Document)
    private readonly repo: Repository<Document>
  ) {}

  create(): Array<Promise<Document>> {
    // The file that will be uploaded to Linode
    const documentBuffer = fs.readFileSync(
      path.join(__dirname, '/assets/document.pdf')
    );

    return documents.map(async (document: IDocument) => {
      try {
        await this.uploadFileToLinode(documentBuffer, document.documentName);
        return await this.repo.save(document);
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  async uploadFileToLinode(dataBuffer: Buffer, filename: string) {
    const clusterId = this.getValue('LINODE_STORAGE_CLUSTER_ID', true);
    const bucketId = this.getValue('LINODE_STORAGE_BUCKET_ID', true);
    const accessKey = this.getValue('LINODE_STORAGE_ACCESS_KEY', true);
    const secretKey = this.getValue('LINODE_STORAGE_SECRET_KEY', true);

    try {
      const s3 = new S3Client({
        region: clusterId,
        credentials: {
          accessKeyId: accessKey,
          secretAccessKey: secretKey,
        },
        endpoint: `https://${clusterId}.linodeobjects.com`,
      });

      const uploadResult = await s3.send(
        new PutObjectCommand({
          Bucket: bucketId,
          Body: dataBuffer,
          Key: filename,
        })
      );
      if (uploadResult.$metadata.httpStatusCode != 200) {
        throw new Error('UploadFailedError');
      }
    } catch (error) {
      console.warn(`Failed to upload document with name ${filename}`);
    }
  }

  private getValue(key: string, throwOnMissing: boolean): string {
    const value = process.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }
}
