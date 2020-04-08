import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { AdminServiceService } from '../../services/admin-service.service';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;
  dataSource = new ProductDataSource(this.adminService);
  message = ""
  displayedColumns = ['Brand', 'Name', 'Price', 'Quantity', 'Department 1', 'Department 2', 'Department 3', 'Details'];

  constructor(private adminService: AdminServiceService, private r: Router) { }

  ngOnInit(): void {
  }

  reloadData() {
    this.products = this.adminService.getProductList();
    location.reload(); 
  }

  productDetails(productID: number) {
    this.r.navigate([`admin/product/details`,productID])
  }

}
export class ProductDataSource extends DataSource<any> {
  constructor(private s: AdminServiceService) {
    super();
  }
  connect(): Observable<Product[]> {
    return this.s.getProductList();
  }
  disconnect() { }
}