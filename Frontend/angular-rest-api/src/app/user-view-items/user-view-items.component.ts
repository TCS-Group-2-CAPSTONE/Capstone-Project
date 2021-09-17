import { Component, OnInit } from '@angular/core';
import { UserSelctItem } from '../user-selct-item';
import { UserSignInService } from '../user-sign-in.service';

@Component({
  selector: 'app-user-view-items',
  templateUrl: './user-view-items.component.html',
  styleUrls: ['./user-view-items.component.css']
})
export class UserViewItemsComponent implements OnInit {

  //array for the products
  productDetails:Array<UserSelctItem>=[];
  constructor( public userService : UserSignInService) { }

  ngOnInit(): void {
    this.getAllProduct(); 
  }

  getAllProduct(){
    this.userService.retrieveAllProductInfo().subscribe(result=>{
      this.productDetails = result;
      console.log(result);
    }, error=>console.log(error));
  }
}
