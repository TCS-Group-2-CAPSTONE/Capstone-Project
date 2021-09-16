import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserSignInService } from '../user-sign-in.service';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

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

  updateUserDetails(){

  }

}
