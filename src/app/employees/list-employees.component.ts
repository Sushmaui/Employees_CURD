import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];

  private _searchTerm: string;

  get searchTerm():string{
    return this._searchTerm;
  }

  set searchTerm(value:string){
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(searchString: string){
    return this.employees.filter(employee =>
        employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  constructor(private _employeeService: EmployeeService,
    private _router: Router) { }

    //need to change code here.....................................
    // constructor(private _employeeService: EmployeeService,
    //   private _router: Router, private _route: ActivatedRoute) {
    //   this.employees = this._route.snapshot.data['employeeList'];
    //   if (this._route.snapshot.queryParamMap.has('searchTerm')) {
    //     this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    //   } else {
    //     this.filteredEmployees = this.employees;
    //   }
    // }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    this.filteredEmployees=this.employees;
    
  }
  
}
