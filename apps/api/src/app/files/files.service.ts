import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { configService } from '../config/config.service';

@Injectable()
export class FilesService {
  private readonly logger = new Logger(FilesService.name);

  constructor(private readonly httpService: HttpService) {}

  async getSignedLink(
    docName: string
  ): Promise<{ url: string; exists: boolean }> {
    const clusterId = configService.getValue('LINODE_STORAGE_CLUSTER_ID', true);
    const bucketId = configService.getValue('LINODE_STORAGE_BUCKET_ID', true);
    const accessKey = configService.getValue('LINODE_STORAGE_ACCESS_KEY', true);

    const { data } = await firstValueFrom(
      this.httpService
        .post(
          `https://api.linode.com/v4/object-storage/buckets/${clusterId}/${bucketId}/object-url`,
          {
            name: docName,
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
    return data;
  }
}
