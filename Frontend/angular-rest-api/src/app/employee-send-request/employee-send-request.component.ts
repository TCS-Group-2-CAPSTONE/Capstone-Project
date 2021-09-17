import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-send-request',
  templateUrl: './employee-send-request.component.html',
  styleUrls: ['./employee-send-request.component.css']
})
export class EmployeeSendRequestComponent implements OnInit {
  msg:string = '';
  requestRef = new FormGroup({
    name:new FormControl(),
    employeeEmail: new FormControl(),
    resolved:new FormControl(),
    action:new FormControl()
  });
  constructor(public employeeSer:EmployeeService) { }

  ngOnInit(): void {
  }

  addRequest(){
    let request = this.requestRef.value;
    
    this.employeeSer.sendRequest(request).subscribe(result=>{
      
      if (result=="found"){
        alert("Request Sent Successfully!");

      }
      else{
        this.msg = 'Please try again.'
      }
    });
  }

}
