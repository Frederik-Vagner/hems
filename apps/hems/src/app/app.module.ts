import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { materialModules } from './material.constant';
import { AssignmentsComponent } from './pages/assignments/assignments.component';
import { CreateAssignmentDialogComponent } from './pages/assignments/createAssignmentDialog/create-assignment-dialog.component';
import { UpdateAssignmentDialogComponent } from './pages/assignments/updateAssignmentDialog/update-assignment-dialog.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CreateCarDialogComponent } from './pages/cars/modal/create/create-car-dialog.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { CreateCheckinDialogComponent } from './pages/checkin/dialogs/checkinDialogs/createCheckinDialog/create-checkin-dialog.component';
import { UpdateCheckinDialogComponent } from './pages/checkin/dialogs/checkinDialogs/updateCheckinDialog/update-checkin-dialog.component';
import { CreateCheckoutDialogComponent } from './pages/checkin/dialogs/checkoutDialogs/createCheckoutDialog/create-checkout-dialog.component';
import { UpdateCheckoutDialogComponent } from './pages/checkin/dialogs/checkoutDialogs/updateCheckoutDialog/update-checkout-dialog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateLongTermDialogComponent } from './pages/longterm/createLongTermDialog/create-long-term-dialog.component';
import { LongtermComponent } from './pages/longterm/longterm.component';
import { UpdateLongTermDialogComponent } from './pages/longterm/updateLongTermDialog/update-long-term-dialog.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { EditTaskDialogComponent } from './pages/tasks/editTaskDialog/editTaskDialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    CarsComponent,
    TasksComponent,
    CheckinComponent,
    AssignmentsComponent,
    LongtermComponent,
    CreateCarDialogComponent,
    UpdateCheckinDialogComponent,
    CreateCheckinDialogComponent,
    UpdateCheckoutDialogComponent,
    CreateCheckoutDialogComponent,
    CreateAssignmentDialogComponent,
    UpdateAssignmentDialogComponent,
    CreateLongTermDialogComponent,
    UpdateLongTermDialogComponent,
    EditTaskDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
