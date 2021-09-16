import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSignInService } from '../user-sign-in.service';


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  msg:string = '';
  signUpRef = new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    phoneNumber:new FormControl(),
    Address:new FormControl(),
    userId:new FormControl(),
    password:new FormControl()
  });

  constructor(public loginSer:UserSignInService) { }

  ngOnInit(): void {
  }

  addUser(){
    let newUser = this.signUpRef.value;
    this.loginSer.loginAccountCreate(newUser).
    subscribe(result=>this.msg=result,error=>console.log(error));

    this.signUpRef.reset();

  }

}
