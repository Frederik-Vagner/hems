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
   * @param expiresIn how long the link should be valid for. In seconds. Between 360 and 86400 seconds.
   * @returns a url, or throws an error.
   */
  async getSignedLink(
    fileName: string,
    expiresIn: number
  ): Promise<{ url: string; exists: boolean }> {
    const accessKey = configService.getValue('LINODE_PERSONAL_TOKEN', true);
    const clusterId = configService.getValue('LINODE_STORAGE_CLUSTER_ID', true);
    const bucketId = configService.getValue('LINODE_STORAGE_BUCKET_ID', true);

    const { data } = await firstValueFrom(
      this.httpService
        .post(
          `https://api.linode.com/v4/object-storage/buckets/${clusterId}/${bucketId}/object-url`,
          {
            name: fileName,
            expires_in: expiresIn,
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

  /**
   * Uploads a file to the Linode S3 bucket. Updates the file if it already exists.
   * @param dataBuffer `Express.Multer.File` file.buffer.
   * @param fileName the name that the file should be uploaded under.
   * @example async uploadFile(@UploadedFile() file: Express.Multer.File) { const { url } = await this.filesService.uploadFile(file.buffer, file.originalname); }}
   * @returns signed URL link that allows access to the file for 10 minutes.
   * @throws InvalidAccessKeyIdError | UploadFailedError
   */
  async uploadFile(
    dataBuffer: Buffer,
    filename: string
  ): Promise<{ url: string }> {
    const clusterId = configService.getValue('LINODE_STORAGE_CLUSTER_ID', true);
    const bucketId = configService.getValue('LINODE_STORAGE_BUCKET_ID', true);
    const accessKey = configService.getValue('LINODE_STORAGE_ACCESS_KEY', true);
    const secretKey = configService.getValue('LINODE_STORAGE_SECRET_KEY', true);

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
      } else {
        this.logger.verbose(
          `New file uploaded to linode storage. Filename: ${filename}`
        );
        return this.getSignedLink(filename, 600);
      }
    } catch (error) {
      this.logger.error(
        'Failed to upload a file to Linode Object storage',
        error
      );
      if (error.name === 'InvalidAccessKeyId') {
        throw new Error('InvalidAccessKeyIdError');
      } else {
        throw new Error('UploadFailedError');
      }
    }
  }
}
