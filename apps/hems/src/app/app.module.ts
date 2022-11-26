import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { materialModules } from './material.constant';
import { CarsComponent } from './pages/cars/cars.component';
import { CreateCarComponent } from './pages/cars/modal/create/create.car.component';
import { EditCarComponent } from './pages/cars/modal/edit/edit.car.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AssignmentsPageComponent } from './pages/assignments/assignments-page.component';
import { CreateAssignmentModalComponent } from './components/modals/createAssignmentModal/create-assignment-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    CarsComponent,
    CheckinComponent,
    AssignmentsPageComponent,
    CreateCarComponent,
    EditCarComponent,
    CreateAssignmentModalComponent
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
