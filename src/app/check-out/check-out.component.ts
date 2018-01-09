import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{
  
  cart$: Observable<ShoppingCart>;
  subscription: Subscription;
  
  constructor(private shoppingCartService: ShoppingCartService) { 
    
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }
 
}
