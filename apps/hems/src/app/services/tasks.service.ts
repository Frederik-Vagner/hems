import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetTasksResponse } from '@hems/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  /**
   * Fetch all tasks
   *
   * @returns an observable with the tasks for the given day.
   */
  public get(createdAt: Date): Observable<GetTasksResponse> {
    return this.http.get<GetTasksResponse>(
      `${env.apiUrl}/tasks?createdAt=${createdAt.toISOString()}`
    );
  }
}
