import { ShoppingCartItem } from "./shopping-cart-item";
import { ShoppingCart } from "./shopping-cart";

export class Order{
    datePlaced;
    items;
    constructor(private shipping, private userId, shoppingCart: ShoppingCart) {
        this.datePlaced = new Date().getTime();
        
        this.items = shoppingCart.items.map(i => {
            return {
              product: {
                title: i.title,
                imageUrl: i.imageUrl,
                price: i.price
              },
              quantity: i.quantity,
              totalPrice: i.totalPrice
            }
          });
    }

}