import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  userName?:string;
  constructor(public activateRoute:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userName=data.user);
  }

}