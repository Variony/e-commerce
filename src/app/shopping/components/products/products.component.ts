import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  filteredProduct;
  category;
  cart$: Observable<ShoppingCart>;

  constructor(private productService: ProductService, private cartService: ShoppingCartService, private route: ActivatedRoute) {


  }

  async ngOnInit() {
    this.cart$ = (await this.cartService.getCart());
    this.populateProducts();
  }

  private applyFilter() {
    this.filteredProduct = this.category ? this.products.filter(p => p.category === this.category) : this.products;
  }

  private populateProducts() {
    this.route.queryParamMap
      .switchMap(params => {
        this.category = params.get('category');
        return this.productService.getAll();
      })
      .subscribe(products => {
        this.products = products;
        this.applyFilter();
      });
  }


}
