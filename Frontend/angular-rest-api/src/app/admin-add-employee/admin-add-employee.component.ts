import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin-add-employee',
  templateUrl: './admin-add-employee.component.html',
  styleUrls: ['./admin-add-employee.component.css']
})
export class AdminAddEmployeeComponent implements OnInit {
  employeeRef = new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    email:new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }
  addEmployee(){
    let product = this.employeeRef.value;

    
  }
}
