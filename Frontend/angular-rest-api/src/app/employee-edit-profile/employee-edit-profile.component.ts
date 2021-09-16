import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit-profile',
  templateUrl: './employee-edit-profile.component.html',
  styleUrls: ['./employee-edit-profile.component.css']
})
export class EmployeeEditProfileComponent implements OnInit {
  msg:string = '';
  employeeRef = new FormGroup({
    oldPass:new FormControl(),
    newPass:new FormControl()
  });
  constructor(public employeeSer:EmployeeService) { }

  ngOnInit(): void {
    this.getEmp();
  }

  getEmp(){
    
    let email = `${localStorage.getItem('emp-email')}`
    
    this.employeeSer.getEmployee(email).subscribe(result=>{
      
    });
  }

  updateProfile(){
    let newInfo = this.employeeRef.value;
    let email = `${localStorage.getItem('emp-email')}`
    this.employeeSer.employeeUpdateDetails(newInfo,email).subscribe(result=>{
      
      if (result=="found"){
        alert("Password has been changed!");

      }
      else{
        this.msg = 'password not upadate. Please try again.'
      }
    });
  }

}
