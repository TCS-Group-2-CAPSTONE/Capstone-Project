import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-update-products',
  templateUrl: './admin-update-products.component.html',
  styleUrls: ['./admin-update-products.component.css']
})
export class AdminUpdateProductsComponent implements OnInit {
  productRef = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
    url: new FormControl
  });
  
  msg?:string;

  constructor(public adminSer:AdminService) { }

  ngOnInit(): void {
  }

  updateProduct() {
    let product = this.productRef.value;
    let filteredProduct:any = {};

    for (let key in product) {
      if (product[key] != null && product[key] != "") {
        filteredProduct[key] = product[key];
      }
    }
    
    this.adminSer.updateProduct(filteredProduct).subscribe(result=> {
      this.msg = result;
    });
  }
}
