import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserSignInService } from '../user-sign-in.service';

@Component({
  selector: 'app-user-raise-ticket',
  templateUrl: './user-raise-ticket.component.html',
  styleUrls: ['./user-raise-ticket.component.css']
})
export class UserRaiseTicketComponent implements OnInit {
    msg:string = '';
    requestRef = new FormGroup({
    userId:new FormControl(),
    email: new FormControl(),
    resolved:new FormControl(),
    action:new FormControl()
  });
  constructor(public employeeSer:UserSignInService) { }

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

