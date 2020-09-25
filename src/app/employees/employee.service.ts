import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import {HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
// import { catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
    constructor(private httpClient: HttpClient){}
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 2389456194,
            email: 'Mark@tech.com',
            dateOfBirth: new Date('10/25/1991'),
            department: '3',
            isActive: true,
            photoPath: 'assets/images/man.png'
        },
        {
            id: 2,
            name: 'Joe',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'joe@tech.com',
            dateOfBirth: new Date('11/20/1971'),
            department: '2',
            isActive: true,
            photoPath: 'assets/images/men.jpg'
        },
        {
            id: 3,
            name: 'Sammy',
            gender: 'Female',
            contactPreference: 'Email',
            email: 'sammmy@tech.com',
            dateOfBirth: new Date('11/20/1992'),
            department: '4',
            isActive: true,
            photoPath: 'assets/images/women.png'
        },
    ];

    baseUrl = 'http://localhost:3000/employees';
 
    getEmployees(): Observable<Employee[]>{
        return this.httpClient.get<Employee[]>(this.baseUrl);
    }

    // private handleError(errorResponse: HttpErrorResponse){
    //     if(errorResponse.error instanceof ErrorEvent){
    //         console.log('Client Side Error:', errorResponse.error.message);
    //     }else{
    //         console.log('Server Side Error:', errorResponse)
    //     }

    //     return new ErrorObservable('There is problem with the service. We are notified & working on it')
    // }

    getEmployee(id:number): Observable<Employee>{
        return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
    }

    addEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>(this.baseUrl, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })

    }

    updateEmployee(employee: Employee): Observable<void> {
        return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })

    }

    deleteEmployee(id:number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
    }

}