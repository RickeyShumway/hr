import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentsComponent } from './components/departments/departments.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { AnalyticsTableComponent } from './components/analytics-table/analytics-table.component';
import { MaterialModule } from './modules/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    TimesheetComponent,
    AnalyticsComponent,
    TopNavbarComponent,
    AnalyticsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
