import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  msg:string = '';
  signUpRef = new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    phoneNumber:new FormControl(),
    address:new FormControl(),
    username:new FormControl(),
    password:new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  addUser(){
    let newUser = this.signUpRef.value;

    this.signUpRef.reset();


    this.msg = 'New Account Created Successfully!'
  }

}
