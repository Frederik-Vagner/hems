import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { configService } from '../config/config.service';

@Injectable()
export class FilesService {
  private readonly logger = new Logger(FilesService.name);

  constructor(private readonly httpService: HttpService) {}

  /**
   * Makes a request to Linode and creates a signed url allowing access to the given file.
   * @param fileName the name of the file.
   * @returns a url, or throws an error.
   */
  async getSignedLink(
    fileName: string
  ): Promise<{ url: string; exists: boolean }> {
    const clusterId = configService.getValue('LINODE_STORAGE_CLUSTER_ID', true);
    const bucketId = configService.getValue('LINODE_STORAGE_BUCKET_ID', true);
    const accessKey = configService.getValue('LINODE_STORAGE_ACCESS_KEY', true);

    const { data } = await firstValueFrom(
      this.httpService
        .post(
          `https://api.linode.com/v4/object-storage/buckets/${clusterId}/${bucketId}/object-url`,
          {
            name: fileName,
            expires_in: 600,
            method: 'GET',
          },
          { headers: { Authorization: `Bearer ${accessKey}` } }
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(
              'Failed to get the signed url from Linode',
              error.response.data
            );
            throw new Error('Failed to get the signed url from Linode');
          })
        )
    );
    if (!data.exists) {
      throw new Error(`The file doesn't exist`);
    }
    return data;
  }

  async uploadFile(dataBuffer: Buffer, fileName: string) {
    const clusterId = configService.getValue('LINODE_STORAGE_CLUSTER_ID', true);
    const bucketId = configService.getValue('LINODE_STORAGE_BUCKET_ID', true);
    const accessKey = configService.getValue('LINODE_STORAGE_ACCESS_KEY', true);
    const secretKey = configService.getValue('LINODE_STORAGE_SECRET_KEY', true);

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
        Key: fileName,
      })
    );
    console.log('result', uploadResult);

    return uploadResult;
  }
}
