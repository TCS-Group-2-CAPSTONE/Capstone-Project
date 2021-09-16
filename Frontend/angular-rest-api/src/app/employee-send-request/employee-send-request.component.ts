import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-employee-send-request',
  templateUrl: './employee-send-request.component.html',
  styleUrls: ['./employee-send-request.component.css']
})
export class EmployeeSendRequestComponent implements OnInit {
  requestRef = new FormGroup({
    request:new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

  addRequest(){
    let request = this.requestRef.value;
  }

}
