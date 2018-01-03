import { Product } from './../models/product';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [];
  categories;
  filteredProduct;
  category;

  constructor(private productService: ProductService, private categoryService: CategoryService, private route: ActivatedRoute) {

    categoryService.getAll().subscribe(catagories => this.categories = catagories);

    this.route.queryParamMap
      .switchMap(params => {
        this.category = params.get('category');
        return productService.getAll();
      })
      .subscribe(products => {
        this.products = products;
        this.filteredProduct = this.category ? this.products.filter(p => p.category === this.category) : this.products;
      });
}


}
