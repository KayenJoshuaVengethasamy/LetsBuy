import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { Product } from '../admin/products/product';
import { Observable } from 'rxjs';
import { AdminServiceService } from '../admin/services/admin-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  info: any;
  p: Observable<Product[]>;


  constructor(private token: TokenStorageService, private s: AdminServiceService, private r: Router) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.reloadData();
  }

  reloadData() {
    this.p = this.s.getProductList();
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
