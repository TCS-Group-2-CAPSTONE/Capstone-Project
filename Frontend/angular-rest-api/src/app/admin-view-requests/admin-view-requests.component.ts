import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-view-requests',
  templateUrl: './admin-view-requests.component.html',
  styleUrls: ['./admin-view-requests.component.css']
})
export class AdminViewRequestsComponent implements OnInit {

  constructor(public adminSer:AdminService) { }

  requests?:any[];

  ngOnInit(): void {
    this.getRequests();
  }


  //function to pull all requests from request table and display in a table
  getRequests() {
    this.adminSer.getRequests().subscribe(result=>{
      this.requests = JSON.parse(result);
      console.log(this.requests);
    })
  }

  //function to delete request from request table and then refresh the user's visual table
  deleteRequest(requestId:any) {
    this.adminSer.deleteRequest(requestId).subscribe(result=> {
      console.log(result);
      this.getRequests();
    })
  }

}
