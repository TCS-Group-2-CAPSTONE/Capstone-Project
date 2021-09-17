import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-add-products',
  templateUrl: './admin-add-products.component.html',
  styleUrls: ['./admin-add-products.component.css']
})
export class AdminAddProductsComponent implements OnInit {
  productRef = new FormGroup({
    name:new FormControl(),
    price:new FormControl(),
    quantity:new FormControl(),
    url:new FormControl()
  });
  msg?:string;
  constructor(public adminSer:AdminService) { }

  ngOnInit(): void {
  }

  //function to add a product when button is clicked. all fields must be filled
  addProduct(){
    let product = this.productRef.value;

    this.adminSer.addProduct(product).subscribe(result=> {
      this.msg = result;
    })
    
  }
}
