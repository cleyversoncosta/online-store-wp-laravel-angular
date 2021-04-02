import {
  FacebookService
} from './../../services/facebook.service';
import {
  CartService
} from './../../services/cart.service';
import {
  ProdutosService
} from './../../services/produtos.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-compra-concluida',
  templateUrl: './compra-concluida.component.html',
  styleUrls: ['./compra-concluida.component.css']
})
export class CompraConcluidaComponent implements OnInit {

  fbPurchaseCalled: boolean = false

  constructor(private produtosService: ProdutosService, private cartService: CartService, private facebookService: FacebookService) {}

  ngOnInit(): void {
    this.cartService.obterProdutosDoCarrinho().subscribe((produtosCarrinho: any[]) => {
      this.cartService.obterValorDoPedido().subscribe(valorDoPedido => {
        
        if (this.fbPurchaseCalled === false) {
          this.facebookService.fbPurchase(produtosCarrinho, valorDoPedido)
          this.fbPurchaseCalled = true
        }
        
        this.cartService.esvaziarCarrinho().then(() => {})
      })
    })
  }
}
