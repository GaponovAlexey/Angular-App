import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { IProduct } from '../modules/product';
@Injectable({
  providedIn: 'root',
})
export class ProductsServices {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
   return this.http.get<IProduct[]>("https://fakestoreapi.com/products")
  }
}
