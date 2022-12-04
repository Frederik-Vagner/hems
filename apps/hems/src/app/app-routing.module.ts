import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsComponent } from './pages/assignments/assignments.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LongtermComponent } from './pages/longterm/longterm.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  }, // AuthGuard ensures that only authorized users can view this route
  {
    path: 'checkin',
    component: CheckinComponent,
  },
  {
    path: 'checkOut',
    component: CheckinComponent,
  },
  {
    path: 'long-term',
    component: LongtermComponent,
  },
  {
    path: 'car-list',
    component: CarsComponent,
  },
  {
    path: 'daily-tasks',
    component: TasksComponent,
  },
  {
    path: 'assignments',
    component: AssignmentsComponent,
  },
  { path: '404', component: PageNotFoundComponent }, // PageNotFound for all other page requests
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }, // Redirect to dashboard page
  { path: '**', redirectTo: '404' }, // PageNotFound for all other page requests
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
