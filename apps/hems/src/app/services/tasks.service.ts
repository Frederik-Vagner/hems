import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITask } from '@hems/interfaces';
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
  public get(createdAt: Date): Observable<ITask[]> {
    return this.http.get<ITask[]>(
      `${env.apiUrl}/tasks?createdAt=${createdAt.toISOString()}`
    );
  }
}
