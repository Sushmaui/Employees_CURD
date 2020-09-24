import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Department} from '../models/department.model';
import {Employee}  from '../models/employee.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {EmployeeService} from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public creatEmployeeFrom: NgForm;
  previewPhoto = false;
  dateOfBirth: Date= new Date(2018,0,30);
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee;

  departments: Department[]=[
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
  ]
  
  constructor(private _employeeService: EmployeeService,
              private _router: Router,
              private _route: ActivatedRoute) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2018, 11, 31),
        dateInputFormat: 'DD/MM/YYYY',
      });
  }

  togglePhotoPreview(){
    this.previewPhoto=!this.previewPhoto;
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap=>{
      const id= +parameterMap.get('id');
      this.getEmployee(id);
    })
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.creatEmployeeFrom.reset();
      this.employee = {
        id: null,
        name: null,
        gender: null,
        phoneNumber: null,
        email: '',
        contactPreference: null,
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null,
      };
      
    } else {
      this.employee = Object.assign({}, this._employeeService.getEmployee(id));
    }
  }

  private newMethod() {
    this.creatEmployeeFrom.reset();
  }

  saveEmployee(): void{
    const newEmployee: Employee = Object.assign({}, this.employee)
    this._employeeService.save(newEmployee);
    this.creatEmployeeFrom.reset();
    this._router.navigate(['list']);
  }

}
