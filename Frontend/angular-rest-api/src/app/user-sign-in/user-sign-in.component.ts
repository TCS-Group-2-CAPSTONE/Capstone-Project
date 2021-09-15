import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
  msg:string = '';
  loginRef = new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  });
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
    let user = this.loginRef.value;

    if(user.username == "Inan" && user.password == '1234'){
      this.router.navigate(['user-dashboard', user.username]);
    }
    else{
      this.msg = 'Invalid credentials. Please try again.'
    }
  }

}
