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
  userRef = new FormGroup({
    email:new FormControl(),
    phoneNumber:new FormControl(),
    address:new FormControl(),
    oldPass:new FormControl(),
    newPass:new FormControl()
  });
  constructor(public loginSer:UserSignInService) { }

  ngOnInit(): void {
  }

  updateProfile(){
    let newInfo = this.userRef.value;
  }

}
