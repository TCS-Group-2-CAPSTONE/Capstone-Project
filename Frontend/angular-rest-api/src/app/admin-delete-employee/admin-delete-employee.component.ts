import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-delete-employee',
  templateUrl: './admin-delete-employee.component.html',
  styleUrls: ['./admin-delete-employee.component.css']
})
export class AdminDeleteEmployeeComponent implements OnInit {

  employeeRef = new FormGroup({
    email_address: new FormControl()
  });

  msg?:string;

  constructor(public adminSer:AdminService) { }

  ngOnInit(): void {
  }
  
  deleteEmployee() {
    let employee = this.employeeRef.value; 
    console.log(employee);
    this.adminSer.deleteEmployee(employee).subscribe(result=> {
      this.msg = result;
    })
  }
}
