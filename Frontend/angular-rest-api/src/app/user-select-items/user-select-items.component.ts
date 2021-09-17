import { Component, OnInit } from '@angular/core';
import { UserSelctItem } from '../user-selct-item';
import { UserSelectItemService } from '../user-select-item.service';

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

  //array for the products
  productDetails:Array<UserSelctItem>=[];

  //array for addToCart
  cartArr:Array<UserSelctItem>=[];
  constructor(public userSelectService : UserSelectItemService) { }

  ngOnInit(): void {
    this.getAllProduct(); 
  }

  getAllProduct(){
    this.userSelectService.retrieveAllProductInfo().subscribe(result=>{
      this.productDetails = result;
      console.log(result);
    }, error=>console.log(error));
  }
  //To add to cart
  addData(name:any, price:any, url:any){
    let element = (document.getElementById(name)) as HTMLSelectElement;
    let sel = element.selectedIndex
    let option = element.options[sel]
    let quantity = option.value
    console.log(quantity)
    // this.cartArr.push(name,price,quantity,url);
    // console.log(this.cartArr);

  }

}
