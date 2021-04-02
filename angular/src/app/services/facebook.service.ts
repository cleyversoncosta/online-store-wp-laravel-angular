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

  fbViewContent(produto) {
    fbViewContent(produto)
  }


  fbAddToCart(produto, produtos) {
    let count = 0

      if (produtos !== null) {
        produtos.forEach(p => {
          if (produto.id === p.id) {
            count++
          }
        })
      }

      if (count <= 1) {
        fbAddToCart(produto)
      }

  }

  fbInitiateCheckout(produtosCarrinho, valorDoPedido) {
 
      //console.log(produtosDoCarrinho)

      if (produtosCarrinho !== null) {

        let ids = []
        let contents = []
        produtosCarrinho.forEach(item => {
          ids.push(item.id)

          let data = {
            'id': item.id, // Used For Dynamic Remarketing
            'quantity': 1,
            'price': item.precoAtual
          }

          contents.push(data)
        })

        fbInitiateCheckout(ids, contents, valorDoPedido)

      }
  }


  fbPurchase(produtosCarrinho, valorDoPedido) {
   
    if (produtosCarrinho !== null) {

      let ids = []
      let contents = []
      produtosCarrinho.forEach(item => {
        ids.push(item.id)

        let data = {
          'id': item.id, // Used For Dynamic Remarketing
          'quantity': 1,
          'price': item.precoAtual
        }

        contents.push(data)
      })

      fbPurchase(ids, contents, valorDoPedido)
    }
  }


  fbCompleteRegistration() {
    //return new Promise((resolve, reject) => {
    this.localStorage.getItem('carrinho').subscribe((produtosDoCarrinho: any[]) => {

      //console.log(produtosDoCarrinho)

      if (produtosDoCarrinho !== null) {

        let ids = []
        let contents = []
        produtosDoCarrinho.forEach(item => {
          ids.push(item.id)

          let data = {
            'id': item.id, // Used For Dynamic Remarketing
            'quantity': 1,
            'price': item.precoAtual
          }

          contents.push(data)
        })

        this.cartService.obterValorDoPedido().subscribe((valorDoPedido) => {
          fbCompleteRegistration(ids, contents, valorDoPedido)
        })
      }
    })
    //})
  }

}
