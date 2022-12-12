import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetTasksResponse, ITask, IUpdateTask } from '@hems/interfaces';
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
  public getTasks(createdAt: Date): Observable<GetTasksResponse> {
    return this.http.get<GetTasksResponse>(
      `${
        env.apiUrl
      }/tasks?createdAt=${createdAt.toISOString()}&sortBy=time&sortOrder=ASC`
    );
  }

  public getTaskById(id: string): Observable<ITask> {
    return this.http.get<ITask>(`${env.apiUrl}/tasks${id}`);
  }

  public updateTask(id: string, params: IUpdateTask): Observable<ITask> {
    return this.http.patch<ITask>(`${env.apiUrl}/tasks/${id}`, params);
  }
}
