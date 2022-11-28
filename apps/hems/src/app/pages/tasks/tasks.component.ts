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
  eveningTasks: ITask[] = [];
  isLoading = false;

  morningColumns = [
    'time', 
    'task', 
    'done', 
    'initials',
    'actions'
  ];

  eveningColumns = [
    'time', 
    'task', 
    'done', 
    'initials',
    'actions'
  ];

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
        tasks.forEach(task => {
          if (task.listName === 'Morning') {
            this.morningTasks.push(task)
          } else if (task.listName === 'Evening') {
            this.eveningTasks.push(task)
          }
        })
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
