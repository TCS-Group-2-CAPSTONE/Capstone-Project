import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Product } from './product';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  checkLoginDetails(login:Admin): Observable<any> {
    return this.http.post("http://localhost:9090/admin/adminLogin", login, {responseType: "text"});
  }

  addProduct(product:Product): Observable<any> {
    return this.http.post("http://localhost:9090/product/addProduct", product, {responseType: "text"});
  }

  deleteProduct(product:Product): Observable<any> {
    return this.http.delete("http://localhost:9090/product/deleteProduct/" + product.name, {responseType: "text"});
  }

  updateProduct(product:any): Observable<any> {
    return this.http.put("http://localhost:9090/product/updateProduct", product, {responseType: "text"});
  }

  addEmployee(employee:Employee): Observable<any> {
    return this.http.post("http://localhost:9090/admin/addEmployee", employee, {responseType: "text"});
  }

  deleteEmployee(employee:Employee) : Observable<any> {
    return this.http.delete("http://localhost:9090/admin/deleteEmployee/" + employee.email_address, {responseType: "text"});
  }

  getRequests(): Observable<any> {
    return this.http.get("http://localhost:9090/request/viewRequests", {responseType: "text"});
  }

  deleteRequest(employeeId:any): Observable<any> {
    return this.http.delete("http://localhost:9090/request/deleteRequest/" + employeeId, {responseType: "text"});
  } 

}
