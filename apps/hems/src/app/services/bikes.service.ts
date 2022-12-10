import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BikeSortOptions,
  CreateBikeRequest,
  IBike,
  IUpdateBikeRequest,
  SortOrder,
  UpdateBikeRequest,
} from '@hems/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  constructor(private http: HttpClient) {}

  public getBike(
    createdAt: Date,
    sortBy?: BikeSortOptions,
    sortOrder?: SortOrder,
    search?: string
  ): Observable<IBike[]> {
    return this.http.get<IBike[]>(
      `${
        env.apiUrl
      }/bikes?createdAt=${createdAt.toISOString()}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}`
    );
  }

  public createBike(params: CreateBikeRequest): Observable<IBike> {
    return this.http.post<IBike>(`${env.apiUrl}/bikes`, params);
  }

  public updateBike(id: string, params: UpdateBikeRequest): Observable<IBike> {
    return this.http.patch<IBike>(`${env.apiUrl}/bikes/${id}`, params);
  }

  public getBikeById(id: string): Observable<IBike> {
    return this.http.get<IBike>(`${env.apiUrl}/bikes/${id}`);
  }
}
