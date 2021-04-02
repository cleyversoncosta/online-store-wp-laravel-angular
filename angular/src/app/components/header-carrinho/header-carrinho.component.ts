import { CartService } from './../../services/cart.service';
import { LojaSettingsService } from './../../services/loja-settings.service'
import { SettingsService } from '../../services/settings.service'
import { Component, OnInit, Input } from '@angular/core'

import { ProdutosService } from '../../services/produtos.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-header-carrinho',
  templateUrl: './header-carrinho.component.html',
  styleUrls: ['./header-carrinho.component.scss']
})
export class HeaderCarrinhoComponent implements OnInit {

  produtosCarrinho : any = []
  mouseOnCart : boolean = false
  valorDoPedido : any = 0
  quantidadeDeItemsNoCarrinho : any = 0

  closeResult = ''
  maxParcelas: any = 0

  constructor(
      private produtosService: ProdutosService, 
      private settingsService: SettingsService,
      private modalService: NgbModal,
      private lojaSettingsService: LojaSettingsService,
      private cartService: CartService
      ) { }

  ngOnInit(): void {

    this.maxParcelas = this.lojaSettingsService.getMaxParcelas()

    this.cartService.obterProdutosDoCarrinho().subscribe(produtosCarrinho => {

      if (produtosCarrinho === null) {produtosCarrinho = []}

      this.produtosCarrinho = produtosCarrinho       
    })    


    this.cartService.obterValorDoPedido().subscribe(valorDoPedido => {
      this.valorDoPedido = valorDoPedido
    })


    this.cartService.obterQuantidadeDeItemsNoCarrinho().subscribe(quantidadeDeItemsNoCarrinho => {
      quantidadeDeItemsNoCarrinho === null ? this.quantidadeDeItemsNoCarrinho = 0 : this.quantidadeDeItemsNoCarrinho = quantidadeDeItemsNoCarrinho.length
    })                  
  }

  excluirProdutoDoCarrinho(index) {
    this.cartService.excluirProdutoDoCarrinho(index).then(() =>{})
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC'
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop'
    } else {
      return `with: ${reason}`
    }
  }    

}
