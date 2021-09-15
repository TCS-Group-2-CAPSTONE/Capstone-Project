import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-add-products',
  templateUrl: './admin-add-products.component.html',
  styleUrls: ['./admin-add-products.component.css']
})
export class AdminAddProductsComponent implements OnInit {
  productRef = new FormGroup({
    name:new FormControl(),
    price:new FormControl(),
    qty:new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }
  addProduct(){
    let product = this.productRef.value;

    
  }
}
