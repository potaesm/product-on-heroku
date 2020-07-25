import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

type Products = Product[];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  public products: Products = [];
  public filterName = '';
  constructor(public service: ProductService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAllProduct().subscribe((products) => {
      const lowerCasedProduct: Product[] = [];
      products.forEach((product) => {
        // console.log('orig:', product);
        // console.log('new:', this.newProduct(product));
        lowerCasedProduct.push(this.newProduct(product));
      });
      return (this.products = products);
    });
  }

  newProduct(obj: any): Product {
    return new Product(
      obj.code,
      obj.name.toLowerCase(),
      obj.price,
      obj.available,
      obj.rating,
      obj.imageUrl
    );
  }

  onRatingClicked(message: string): void {
    alert(message);
  }

  onProductDetail(product: Product): void {
    this.service.saveProductDetail(product);
  }
}
