import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-employee-edit-profile',
  templateUrl: './employee-edit-profile.component.html',
  styleUrls: ['./employee-edit-profile.component.css']
})
export class EmployeeEditProfileComponent implements OnInit {
  employeeRef = new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    email:new FormControl(),
    oldPass:new FormControl(),
    newPass:new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

  updateProfile(){
    let newInfo = this.employeeRef.value;
  }

}
