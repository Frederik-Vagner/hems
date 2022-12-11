import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DocumentSortOptions,
  IDocument,
  IGetDocumentByIdResponse,
  IUpdateDocumentRequest,
  SortOrder,
} from '@hems/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  constructor(private http: HttpClient) {}

  /**
   * Fetch all Documents
   *
   * @returns an observable with the documents.
   */
  public getDocuments(
    sortBy?: DocumentSortOptions,
    sortOrder?: SortOrder,
    search?: string
  ): Observable<IDocument[]> {
    return this.http.get<IDocument[]>(
      `${env.apiUrl}/documents?sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}`
    );
  }

  public createDocument(params: IDocument): Observable<IDocument> {
    return this.http.post<IDocument>(`${env.apiUrl}/documents`, params);
  }

  public getDocumentById(id: string): Observable<IGetDocumentByIdResponse> {
    return this.http.get<IGetDocumentByIdResponse>(
      `${env.apiUrl}/documents/${id}`
    );
  }

  public getDocumentFile(url: string): Observable<Blob> {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(url, {
      headers: headers,
      responseType: 'blob',
    });
  }

  public updateDocument(
    id: string,
    params: IUpdateDocumentRequest
  ): Observable<IDocument> {
    return this.http.patch<IDocument>(`${env.apiUrl}/documents/${id}`, params);
  }
}
