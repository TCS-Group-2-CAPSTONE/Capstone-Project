import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { UserSelctItem } from '../user-selct-item';
import { UserSelectItemService } from '../user-select-item.service';
import { UserSignInService } from '../user-sign-in.service';

@Component({
  selector: 'app-user-select-items',
  templateUrl: './user-select-items.component.html',
  styleUrls: ['./user-select-items.component.css']
})
export class UserSelectItemsComponent implements OnInit {
  // small function used in html template to generate correct amount of item quantity available 
  counter(i: number) {
    return new Array(i);
}
  userName?:string;
  msg?:string;
  productQty?:string;

  //array for the products
  productDetails:Array<UserSelctItem>=[];

  constructor(
    public userSelectService : UserSelectItemService,
    public userService : UserSignInService,
    public activateRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getAllProduct(); 
    this.activateRoute.params.subscribe(data=>this.userName=data.user);
    
  }

  getAllProduct(){
    this.userSelectService.retrieveAllProductInfo().subscribe(result=>{
      this.productDetails = result;
      console.log(result);
    }, error=>console.log(error));
  }
  //To add to cart
  addData(name:any, priceVar:any, url:any){
    
    let element = (document.getElementById(name)) as HTMLSelectElement;
    let sel = element.selectedIndex
    let option = element.options[sel]
    this.productQty = option.value;
    let quantity :any;
    quantity = this.productQty;
    let price = quantity * priceVar;
    
    let filtered:any = {name, quantity, price, url};
    
    console.log(filtered);

  //add cartDetails to   
  this.userService.addtoCart(filtered).subscribe(result =>{
    this.msg = result;
  })

  }

}

