import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-delete-products',
  templateUrl: './admin-delete-products.component.html',
  styleUrls: ['./admin-delete-products.component.css']
})
export class AdminDeleteProductsComponent implements OnInit {

  constructor(public adminSer:AdminService) { }

  productRef = new FormGroup({
    name: new FormControl()
  })

  msg?:string;

  ngOnInit(): void {
  }

  //function to delete a product based on product name
  deleteProduct() {
    let product = this.productRef.value;
    this.adminSer.deleteProduct(product).subscribe(result=>{
      this.msg = result;
    })
  }
}
