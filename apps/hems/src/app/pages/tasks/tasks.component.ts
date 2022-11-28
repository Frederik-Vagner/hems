import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITask } from '@hems/interfaces';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'hems-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  morningTasks: ITask[] = [];
  eveningTasks1: ITask[] = [];
  isLoading = false;

  constructor(
    private readonly tasksService: TasksService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.isLoading = true;
    this.tasksService.get(new Date()).subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        console.log(tasks);
      },
      error: (error) => {
        this.isLoading = false;
        console.error(error);
        this.snackBar.open(
          'Tasks have failed to load',
          'Imma try again later',
          {
            duration: 10000,
          }
        );
      },
    });
  }
}
