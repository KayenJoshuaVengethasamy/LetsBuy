import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  roles: string[];
  authority: string;
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
