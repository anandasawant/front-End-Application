import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7224/api/Employees';

  constructor(private http: HttpClient) { }


   getEmployees(): Observable<any> {
     return this.http.get(this.apiUrl);
   }

    getEmployee(id: number): Observable<any> {
     return this.http.get(`${this.apiUrl}/${id}`);
   }

    addEmployee(employee: any): Observable<any> {
    return this.http.post(this.apiUrl, employee);
   }

    updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, employee);
   }

    deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
   }
  // getHttpOptions() {
    
  //   return {
  //     headers: new HttpHeaders()
  //   };
  // }

  // getEmployees(): Observable<Employee[]> {
  //   return this.http.get<Employee[]>(this.apiUrl);
  // }
  // getEmployees(): Observable<any> {
  //   return this.http.get(this.apiUrl, this.getHttpOptions());
  // }

  // getEmployee(id: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${id}`, this.getHttpOptions());
  // }

  // addEmployee(employee: any): Observable<any> {
  //   return this.http.post(this.apiUrl, employee, this.getHttpOptions());
  // }

  // updateEmployee(id: number, employee: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${id}`, employee, this.getHttpOptions());
  // }

  // deleteEmployee(id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${id}`, this.getHttpOptions());
  // }
}
