import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ICreateLuggageRequest,
  ILuggage,
  IUpdateLuggageRequest,
} from '@hems/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LuggageService {
  constructor(private http: HttpClient) {}

  public getCheckin(createdAt: Date): Observable<ILuggage[]> {
    return this.http.get<ILuggage[]>(
      `${env.apiUrl}/luggages/checkin?createdAt=${createdAt.toISOString()}`
    );
  }

  public getCheckout(createdAt: Date): Observable<ILuggage[]> {
    return this.http.get<ILuggage[]>(
      `${env.apiUrl}/luggages/checkout?createdAt=${createdAt.toISOString()}`
    );
  }

  public getLongTerm(createdAt: Date): Observable<ILuggage[]> {
    return this.http.get<ILuggage[]>(
      `${env.apiUrl}/luggages/longTerm?createdAt=${createdAt.toISOString()}`
    );
  }

  public update(
    id: string,
    params: IUpdateLuggageRequest
  ): Observable<ILuggage> {
    return this.http.patch<ILuggage>(`${env.apiUrl}/luggages/${id}`, params);
  }

  public create(params: ICreateLuggageRequest): Observable<ILuggage> {
    return this.http.post<ILuggage>(`${env.apiUrl}/luggages`, params);
  }
}
