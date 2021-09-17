import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignIn } from './sign-in';
import { Cart } from './cart';
import { UserSelctItem } from './user-selct-item';

@Injectable({
  providedIn: 'root'
})
export class UserSignInService {
  constructor(public http:HttpClient) { }

  //login
  checkLoginDetails(login:SignIn):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signIn ", login, {responseType:'text'});
  }

  loginAccountCreate(login:SignIn):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signUp",login,
    {responseType:'text'});
  }
  //update user details
  updateUserDetails(updateUser:SignIn):Observable<any>{
    return this.http.put("http://localhost:9090/api/user/updateDetails",updateUser,{responseType:'text'})
  }

//add cart
addtoCart(login:Cart):Observable<any>{
  return this.http.post("http://localhost:9090/addCart/addCartDetails ", login, {responseType:'text'});
}

//retrive cart
retrieveAllProductInfo():Observable<UserSelctItem[]>{
  return this.http.get<UserSelctItem[]>("http://localhost:9090/addCart/retriveProduct");
}


//send request for raise Ticket
sendRequest(data:any):Observable<any> {
  return this.http.post(`http://localhost:9090/raiseTicket/sendTicketDetails`, data, {responseType: "text"});
  
}

}
