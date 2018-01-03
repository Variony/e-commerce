import { ProductFormComponent } from './../product-form/product-form.component';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription: Subscription;
  rows: Product[] = [];

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll()
    .subscribe(
      products => {
        this.products = products;
        this.rows = products;
      });
  }

  filter(query: string) {
    let filteredProducts = (query) ? 
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())): 
      this.products;
    this.rows = filteredProducts;
  }

  ngOnInit() {
  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
