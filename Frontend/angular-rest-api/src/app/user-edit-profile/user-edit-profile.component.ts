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
    userId: new FormControl(),
    email:new FormControl(),
    phoneNumber:new FormControl(),
    dob:new FormControl(),
    address:new FormControl(),
    password:new FormControl()
  });
  constructor(public loginSer:UserSignInService) { }

  ngOnInit(): void {
  }

  updateProfile(){
    let newInfo = this.userRef.value;
    console.log(newInfo);
    let filtered:any = {};

    for (let key in newInfo) {
      if (newInfo[key] != null && newInfo[key] != "") {
        filtered[key] = newInfo[key];
      }
    }
    console.log(filtered);
    this.loginSer.updateUserDetails(filtered).subscribe(result => {
      this.msg = result;
    })

    this.userRef.reset();
  }

}
