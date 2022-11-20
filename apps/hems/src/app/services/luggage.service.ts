import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILuggage } from '@hems/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LuggageService {
  constructor(private http: HttpClient) {}

  /**
   * Fetch all tasks
   *
   * @returns an observable with the tasks for the given day.
   */
  public get(createdAt: Date): Observable<ILuggage[]> {
    return this.http.get<ILuggage[]>(
      `${env.apiUrl}/luggages/longTerm?createdAt=${createdAt.toISOString()}`
    );
  }
}
