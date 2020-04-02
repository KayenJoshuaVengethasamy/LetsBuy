import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  implements OnInit { 

roles: string[];
info: any;
pm: boolean;
admin: boolean;
user: boolean;
loggedIn: boolean;

constructor(private tokenStorage: TokenStorageService, private token: TokenStorageService) { }

ngOnInit() {
  this.pm = false;
  this.admin = false;
  this.user = false;
  this.loggedIn = false;
  if (this.tokenStorage.getToken()) {
    this.roles = this.tokenStorage.getAuthorities();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.roles.forEach(r => {
      if (r === "ROLE_PM") {
        this.pm = true;
      }
      if (r === "ROLE_ADMIN") {
        this.admin = true;
      }
      if (r === "ROLE_USER") {
        this.user = true;
      }
    }

    );
    this.loggedIn = true;
  }
  this.info = {
    token: this.token.getToken(),
    username: this.token.getUsername(),
    authorities: this.token.getAuthorities()
  };
}
logout() {
  
  this.loggedIn = false;
  this.token.signOut();
}
}
