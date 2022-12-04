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
import { CheckinComponent } from './pages/checkin/checkin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LongtermComponent } from './pages/longterm/longterm.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { CreateLongTermDialogComponent } from './pages/longterm/createLongTermDialog/create-long-term-dialog.component';
import { UpdateLongTermDialogComponent } from './pages/longterm/updateLongTermDialog/update-long-term-dialog.component';
import { UpdateCarDialogComponent } from './pages/cars/updateCarEntryDialog/update-car-dialog.component';
import { CreateCarDialogComponent } from './pages/cars/createCarEntryDialog/create-car-dialog.component';
import { UpdateCheckinDialogComponent } from './pages/checkin/updateCheckinDialog/update-checkin-dialog.component';
import { CreateCheckinDialogComponent } from './pages/checkin/createCheckinDialog/create-checkin-dialog.component';
import { CheckoutComponent } from './pages/checkout/checkin.component';
import { CreateCheckoutDialogComponent } from './pages/checkout/createCheckoutDialog/create-checkout-dialog.component';
import { UpdateCheckoutDialogComponent } from './pages/checkout/updateCheckoutDialog/update-checkout-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    CarsComponent,
    TasksComponent,
    CheckinComponent,
    CheckoutComponent,
    AssignmentsComponent,
    LongtermComponent,
    UpdateCheckinDialogComponent,
    CreateCheckinDialogComponent,
    CreateAssignmentDialogComponent,
    UpdateAssignmentDialogComponent,
    CreateCheckoutDialogComponent,
    UpdateCheckoutDialogComponent,
    CreateLongTermDialogComponent,
    UpdateLongTermDialogComponent,
    CreateCarDialogComponent,
    UpdateCarDialogComponent,
    CarsComponent,
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
