import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  userName?:string;
  constructor(public activateRoute:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userName=data.user);
  }

}

