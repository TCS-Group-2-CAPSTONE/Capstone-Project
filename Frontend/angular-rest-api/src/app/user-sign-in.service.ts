import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignIn } from './sign-in';

@Injectable({
  providedIn: 'root'
})
export class UserSignInService {
  constructor(public http:HttpClient) { }

  //
  checkLoginDetails(login:SignIn):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signIn ", login, {responseType:'text'});
  }

  loginAccountCreate(login:SignIn):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signUp",login,
    {responseType:'text'});
  }

  updateUserDetails(updateUser:SignIn):Observable<any>{
    return this.http.put("http://localhost:9090/api/user/updateDetails",updateUser,{responseType:'text'})

  }
}
