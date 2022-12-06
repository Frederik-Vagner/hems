import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CarSortOptions,
  CreateCarRequest,
  ICar,
  IUpdateCarRequest,
  SortOrder,
  UpdateCarRequest,
} from '@hems/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  public getCar(
    createdAt: Date,
    sortBy?: CarSortOptions,
    sortOrder?: SortOrder,
    search?: string
  ): Observable<ICar[]> {
    return this.http.get<ICar[]>(
      `${env.apiUrl}/cars?createdAt=${createdAt.toISOString()}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}`
    );
  }

  public createCar(params: CreateCarRequest): Observable<ICar> {
    return this.http.post<ICar>(`${env.apiUrl}/cars`, params);
  }

  public updateCar(id: string, params: UpdateCarRequest): Observable<ICar> {
    return this.http.patch<ICar>(`${env.apiUrl}/cars/${id}`, params);
  }

  public getCarById(id: string): Observable<ICar> {
    return this.http.get<ICar>(`${env.apiUrl}/cars/${id}`);
  }
}
