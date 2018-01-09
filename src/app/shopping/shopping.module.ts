import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductFilterComponent } from '../../shopping/product-filter/product-filter.component';
import { AuthGuard } from './../shared/services/auth-guard.service';
import { SharedModule } from './../shared/shared.module';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingcartComponent},
      

      { path: 'check-out', component: CheckOutComponent, canActivate:[AuthGuard] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate:[AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate:[AuthGuard] },  
    ])
  ],
  declarations: [
    ProductsComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ShoppingcartComponent
  ]
})
export class ShoppingModule { }
