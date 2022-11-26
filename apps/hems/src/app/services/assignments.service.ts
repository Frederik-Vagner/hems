import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAssignment, ILuggage } from '@hems/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AssignmentsService {
  constructor(private http: HttpClient) {}

  public getAssignments(createdAt: Date): Observable<IAssignment[]> {
    return this.http.get<IAssignment[]>(
      `${env.apiUrl}/assignments?createdAt=${createdAt.toISOString()}`
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
}