import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  checkLoginDetails(login:Employee): Observable<any> {
    return this.http.post("http://localhost:9090/employee/signIn", login, {responseType: "text"});
  }

  employeeUpdateDetails(data:any,email:string): Observable<any> {
    return this.http.post(`http://localhost:9090/employee/updateEmp/${email}`, data, {responseType: "text"});
  }

  getEmployee(email: string):Observable<any> {
    return this.http.get<Employee>(`http://localhost:9090/employee/getEmployeeByEmail/${email}`)
    
  }
  sendRequest(data:any):Observable<any> {
    return this.http.post(`http://localhost:9090/employee/sendRequest`, data, {responseType: "text"});
    
  }
}



