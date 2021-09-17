import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin-add-employee',
  templateUrl: './admin-add-employee.component.html',
  styleUrls: ['./admin-add-employee.component.css']
})
export class AdminAddEmployeeComponent implements OnInit {
  employeeRef = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email_address: new FormControl()
  });

  msg?: string;

  constructor(public adminSer: AdminService) { }

  ngOnInit(): void {
  }

  //function to add employee when button is clicked
  addEmployee() {
    let employee = this.employeeRef.value;
    this.adminSer.addEmployee(employee).subscribe(result => {
      this.msg = result;
    })


  }
}
