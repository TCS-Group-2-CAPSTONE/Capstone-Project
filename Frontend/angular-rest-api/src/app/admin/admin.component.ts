import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  msg:string = '';
  loginRef = new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  });
  constructor(public router:Router, public adminSer:AdminService) { }

  ngOnInit(): void {
  }

  //function to check admin login credentials. if the result returns found, then admin exists
  checkAdmin(){
    let login = this.loginRef.value;

    this.adminSer.checkLoginDetails(login).subscribe(result=>{
      
      if (result=="found"){
        this.router.navigate(['admin-dashboard', login.username]);
      }
      else {
        this.msg = 'Invalid credentials. Please try again.'
      }
    });
  }

}
