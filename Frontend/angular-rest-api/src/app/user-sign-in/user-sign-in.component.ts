import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSignInService } from '../user-sign-in.service';


@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
  msg:string = '';
  lockMsg?:string; 
  counter:number = 0; //counter variable for invalid login attempts
  checkUserLogin:boolean = false;

  loginRef = new FormGroup({
    userId:new FormControl(),
    password:new FormControl()
  });
  constructor(public loginSer: UserSignInService, public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
    let user = this.loginRef.value;
    this.loginSer.checkLoginDetails(user).subscribe(result=>
    {
        if (result=="Success"){
          this.router.navigate(['user-dashboard', user.userId]);
        }
      else{
        this.msg = 'Invalid credentials. Please try again.'
        this.counter= this.counter + 1;
        if (this.counter == 3){
          //console.log("Account locked")
          this.lockMsg = "Account Locked due to multiple attempts"
          this.checkUserLogin = true;
        }
      }
    }, 
    error=>console.log(error)
    )
    this.loginRef.reset();
}
}
