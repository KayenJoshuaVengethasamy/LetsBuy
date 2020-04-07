import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../../services/admin-service.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productID: number;
  p: Product;
  constructor(private a: ActivatedRoute, private r: Router, private s: AdminServiceService) { }

  ngOnInit(): void {
    this.p = new Product();

    this.productID = this.a.snapshot.params['productID'];
    this.s.getProduct(this.productID).subscribe(data => {
      console.log(data)
      this.p = data;
    }, error => console.log(error));
  }

  list() {
    this.r.navigate(['admin/product/list']);
  }

  
}