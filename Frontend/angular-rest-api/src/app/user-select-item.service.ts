import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { UserSelctItem } from './user-selct-item';

@Injectable({
  providedIn: 'root'
})
export class UserSelectItemService {

  constructor(public http:HttpClient) { }

  // checkLoginDetails(login:UserSelctItem):Observable<any>{
  //   return this.http.post("http://localhost:9090/api/user/signIn ", login, {responseType:'text'});
  // }

  retrieveAllProductInfo():Observable<UserSelctItem[]>{
    return this.http.get<UserSelctItem[]>("http://localhost:9090/api/product/retriveProduct");
  }
}


