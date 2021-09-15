import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  msg:string = '';
  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });
  constructor(public router:Router) { }

  ngOnInit(): void {
  }


  checkEmp(){
    let login = this.loginRef.value;

    if (login.email == 'Raj@gmail.com' && login.password == '1234' ){
      this.router.navigate(['employee-dashboard', login.email]);
    }
    else {
      this.msg = 'Invalid credentials. Please try again.'
    }
  }

}
