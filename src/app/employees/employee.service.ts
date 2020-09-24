import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
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

 
    getEmployees(): Employee[]{
        return (this.listEmployees);
    }

    getEmployee(id:number): Employee{
        return this.listEmployees.find(e => e.id ===id);
    }

    save(employee: Employee){
        this.listEmployees.push(employee);
    }


}