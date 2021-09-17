import { Component, OnInit } from '@angular/core';
import { UserSelctItem } from '../user-selct-item';
import { UserSignInService } from '../user-sign-in.service';

@Component({
  selector: 'app-user-delete-items',
  templateUrl: './user-delete-items.component.html',
  styleUrls: ['./user-delete-items.component.css']
})
export class UserDeleteItemsComponent implements OnInit {

  
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