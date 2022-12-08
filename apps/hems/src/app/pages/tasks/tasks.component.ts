import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITask, TableInfoOptions } from '@hems/interfaces';
import { TableInfoDialogComponent } from '../../components/tableInfoDialog/table-info-dialog.component';
import { DisplayDateService } from '../../services/display-date.service';
import { TasksService } from '../../services/tasks.service';
import { orderByCompletedStatus } from '../../utils/order.util';
import { EditTaskDialogComponent } from './editTaskDialog/editTaskDialog.component';

@Component({
  selector: 'hems-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['../../../assets/styles/table.scss'],
})
export class TasksComponent implements OnInit {
  morningTasks: ITask[] = [];
  eveningTasks: ITask[] = [];
  displayDate = new Date();

  isLoading = false;

  headerRow = ['time', 'task', 'done', 'initials', 'actions'];

  constructor(
    private readonly tasksService: TasksService,
    private snackBar: MatSnackBar,
    private displayDateService: DisplayDateService,
    private dialog: MatDialog
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchTasks();
    });
  }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.isLoading = true;
    this.tasksService.getTasks(this.displayDate).subscribe({
      next: (tasks) => {
        this.morningTasks = orderByCompletedStatus(
          tasks.tasks.filter((task) => task.listName === 'Morning')
        );
        this.eveningTasks = orderByCompletedStatus(
          tasks.tasks.filter((task) => task.listName === 'Evening')
        );
      },
      error: (error) => {
        this.isLoading = false;
        console.error(error);
        this.snackBar.open('Tasks have failed to load', 'Okay', {
          duration: 10000,
        });
      },
    });
  }

  openTableInfo(): void {
    this.dialog.open(TableInfoDialogComponent, {
      data: TableInfoOptions.TASKS,
      width: '500px',
    });
  }

  openEditTaskDialog(task: ITask): void {
    this.dialog.open(EditTaskDialogComponent, {
      width: '500px',
      data: task,
    });
  }
}
