import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public product: Product;
  constructor(private http: HttpClient) {}

  // https://165.22.255.58:3000/products
  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'https://asia-east2-simplecloudfirestoreapi.cloudfunctions.net/api?collection=angular-workshop'
    );
  }

  saveProductDetail(product: Product): void {
    this.product = product;
  }

  restoreProductDetail(): Product {
    return this.product;
  }
}
