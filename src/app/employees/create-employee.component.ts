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
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  previewPhoto = false;
  panelTitle: string;
  dateOfBirth: Date= new Date(2018,0,30);
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee;

  departments: Department[]=[
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
  ];
  
  constructor(private _employeeService: EmployeeService,
              private _router: Router,
              private _route: ActivatedRoute) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true,
        dateInputFormat: 'MM/DD/YYYY',
      });
  }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap=>{
      const id= +parameterMap.get('id');
      this.getEmployee(id);
    });
  }

  private getEmployee(id: number) {
    if (id === 0) {
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
<<<<<<< HEAD
      };
      this.panelTitle = 'Create Employee'
      this.createEmployeeForm.reset();

=======
      }; 
      this.creatEmployeeFrom.reset();
>>>>>>> d90258bfecd035e57e82fa259a86d7fa2bec3197
    } else {
      this.panelTitle = 'Edit Employee'
      this._employeeService.getEmployee(id).subscribe(
        (employee) => this.employee =employee,
        (error:any) => console.log(error)
      );
    }
  }

  // private newMethod() {
  //   this.createEmployeeForm.reset();
  // }

  saveEmployee(): void {
    if(this.employee.id == null){
      this._employeeService.addEmployee(this.employee).subscribe(
        (data: Employee) => {
          console.log(data);
          this.createEmployeeForm.reset();
          this._router.navigate(['list']);
        },
        (error: any)=>console.log(error)
      );
    }else{
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
          this.createEmployeeForm.reset();
          this._router.navigate(['list']);
        },
        (error: any)=>console.log(error)
      );
    }
    

  }

}
