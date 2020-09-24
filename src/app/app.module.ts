import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDatepickerModule}  from 'ngx-bootstrap/datepicker';
import {SelectRequiredValidatorDirective} from './shared/select-required-validator.directive';
import {EmployeeService} from './employees/employee.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import {CreateEmployeeCanDeactivateGuardService} from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { PageNotFoundComponent } from './page-not-found.component'
import { EmployeeDetailsGuardsService } from './employees/employee-details-guard.service';
//import {EmployeeFilterPipe} from './employees/employee-filter.pipe'

const appRoutes: Routes=[
  {path: 'list', component: ListEmployeesComponent},
  {path: 'edit/:id', 
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  {path: 'employees/:id', 
    component: EmployeeDetailsComponent,
    canActivate: [EmployeeDetailsGuardsService]
  },
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'notfound', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    //EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService,CreateEmployeeCanDeactivateGuardService,EmployeeDetailsGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
