import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../products/product';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


  private baseUrl = 'http://localhost:8080/letsbuy/auth';

  // private productRegisterUrl = 'http://localhost:8080/letsbuy/auth/products/register';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }
  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/users/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`, { responseType: 'text' });
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  registerProduct(info: Product): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/products/registerProduct`, info, httpOptions);
  }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/all`);
  }
  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/getProductById/${id}`);
  }
  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/products/updateProduct/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/products/deleteProducts/${id}`, { responseType: 'text' });
  }
}