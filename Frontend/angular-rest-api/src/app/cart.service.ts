import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(public http:HttpClient) { }

  
  addtoCart(login:Cart):Observable<any>{
    return this.http.post("http://localhost:9090/addCart/addCartDetails ", login, {responseType:'text'});
  }

  // loginAccountCreate(login:Cart):Observable<any>{
  //   return this.http.post("http://localhost:9090/api/user/signUp",login,
  //   {responseType:'text'});
  // }

  // updateUserDetails(updateUser:Cart):Observable<any>{
  //   return this.http.put("http://localhost:9090/api/user/updateDetails",updateUser,{responseType:'text'})

  // }
}
