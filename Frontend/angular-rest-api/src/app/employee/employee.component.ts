import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

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
  constructor(public router:Router,public employeeSer:EmployeeService) { }

  ngOnInit(): void {
  }


  checkEmp(){
    let login = this.loginRef.value;
    
    
    this.employeeSer.checkLoginDetails(login).subscribe(result=>{
      
      if (result=="found"){
        localStorage.setItem("emp-email",login.email)
        if(login.password == '1234') {
          this.router.navigate(['employee-dashboard', login.email,'edit-profile']);
        }
        else{
        this.router.navigate(['employee-dashboard', login.email]);
        }
      }
      else{
        this.msg = 'Invalid credentials. Please try again.'
      }
    });
  }

  }


