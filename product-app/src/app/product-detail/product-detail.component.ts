import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  constructor(public service: ProductService) {}

  ngOnInit(): void {
    this.product = this.service.restoreProductDetail();
    console.log(this.product);
  }

  onRatingClicked(message: string): void {
    alert(message);
  }
}
