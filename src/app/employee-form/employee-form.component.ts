import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent {
  employee = {
    name: '',
    email: '',
    salary: 0,
    position: '',
    DateOfBirt: '',
    imagePath: '',
    department:''
   

  };

  constructor(private employeeService: EmployeeService, private router: Router) { }

  // addEmployee(): void {
  //   this.employeeService.addEmployee(this.employee).subscribe(() => {
  //     this.router.navigate(['/employees']);
  //   });

  //   console.log(this.employee);
  // }
  addEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(
      (response) => {
        console.log('Employee added successfully', response);
        // reset the form or update UI as needed
      },
      (error) => {
        console.error('Error adding employee', error);
      }
    );
  }
  
    
}
