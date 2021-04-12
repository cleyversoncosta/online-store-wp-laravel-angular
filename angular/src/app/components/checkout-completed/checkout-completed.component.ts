import {
  FacebookService
} from './../../services/facebook.service';
import {
  CartService
} from './../../services/cart.service';
import {
  ProductsService
} from './../../services/products.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-checkout-completed',
  templateUrl: './checkout-completed.component.html',
  styleUrls: ['./checkout-completed.component.css']
})
export class CheckoutCompleted implements OnInit {

  fbPurchaseCalled: boolean = false

  constructor(private ProductsService: ProductsService, private cartService: CartService, private facebookService: FacebookService) {}

  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe((cartProducts: any[]) => {
      this.cartService.getOrderTotals().subscribe(orderTotals => {

        if (this.fbPurchaseCalled === false) {
          this.facebookService.fbPurchase(cartProducts, orderTotals)
          this.fbPurchaseCalled = true
        }

        this.cartService.emptyCart().then(() => {})
      })
    })
  }
}
