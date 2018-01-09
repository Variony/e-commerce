import { Component, Input, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from './../auth.service';
import { Order } from './../models/order';
import { ShoppingCart } from './../models/shopping-cart';
import { OrderService } from './../order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  
  @Input('cart') cart:ShoppingCart;
  shipping = {};
  userSubscription: Subscription;
  userId: string;

  constructor(private orderService: OrderService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {

    let result = await this.orderService.placeOrder(new Order(this.shipping, this.userId, this.cart));
    this.router.navigate(['/order-success', result.key]);
  }

}
