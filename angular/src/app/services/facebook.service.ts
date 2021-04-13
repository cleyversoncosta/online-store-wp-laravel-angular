import {
  CartService
} from './cart.service';
import {
  Injectable
} from '@angular/core';
import {
  LocalStorage
} from '@ngx-pwa/local-storage';


declare const fbViewContent: any
declare const fbAddToCart: any
declare const fbInitiateCheckout: any
declare const fbPurchase: any
declare const fbCompleteRegistration: any

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(
    private localStorage: LocalStorage,
    private cartService: CartService
  ) {}

  fbViewContent(product) {
    fbViewContent(product)
  }


  fbAddToCart(product, products) {
    let count = 0

      if (products !== null) {
        products.forEach(p => {
          if (product.id === p.id) {
            count++
          }
        })
      }

      if (count <= 1) {
        fbAddToCart(product)
      }

  }

  fbInitiateCheckout(cartProducts, orderTotals) {

      //console.log(productsDoCart)

      if (cartProducts !== null) {

        let ids = []
        let contents = []
        cartProducts.forEach(item => {
          ids.push(item.id)

          let data = {
            'id': item.id, // Used For Dynamic Remarketing
            'quantity': 1,
            'price': item.precoAtual
          }

          contents.push(data)
        })

        fbInitiateCheckout(ids, contents, orderTotals)

      }
  }


  fbPurchase(cartProducts, orderTotals) {

    if (cartProducts !== null) {

      let ids = []
      let contents = []
      cartProducts.forEach(item => {
        ids.push(item.id)

        let data = {
          'id': item.id, // Used For Dynamic Remarketing
          'quantity': 1,
          'price': item.precoAtual
        }

        contents.push(data)
      })

      fbPurchase(ids, contents, orderTotals)
    }
  }


  fbCompleteRegistration() {
    //return new Promise((resolve, reject) => {
    this.localStorage.getItem('cart').subscribe((productsDoCart: any[]) => {

      //console.log(productsDoCart)

      if (productsDoCart !== null) {

        let ids = []
        let contents = []
        productsDoCart.forEach(item => {
          ids.push(item.id)

          let data = {
            'id': item.id, // Used For Dynamic Remarketing
            'quantity': 1,
            'price': item.precoAtual
          }

          contents.push(data)
        })

        this.cartService.getOrderTotals().subscribe((orderTotals) => {
          fbCompleteRegistration(ids, contents, orderTotals)
        })
      }
    })
    //})
  }

}
