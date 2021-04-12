import { CartService } from './../../services/cart.service';
import { StoreSettingsService } from '../../services/store-settings.service'
import { SettingsService } from '../../services/settings.service'
import { Component, OnInit, Input } from '@angular/core'

import { ProductsService } from '../../services/products.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss']
})
export class HeaderCartComponent implements OnInit {

  cartProducts : any = []
  mouseOnCart : boolean = false
  orderTotals : any = 0
  quantidadeDeItemsNoCart : any = 0

  closeResult = ''
  maxInstallments: any = 0

  constructor(
      private ProductsService: ProductsService,
      private settingsService: SettingsService,
      private modalService: NgbModal,
      private storeSettingsService: StoreSettingsService,
      private cartService: CartService
      ) { }

  ngOnInit(): void {

    this.maxInstallments = this.storeSettingsService.getMaxInstallments()

    this.cartService.getCartProducts().subscribe(cartProducts => {

      if (cartProducts === null) {cartProducts = []}

      this.cartProducts = cartProducts
    })


    this.cartService.getOrderTotals().subscribe(orderTotals => {
      this.orderTotals = orderTotals
    })


    this.cartService.getAmountCartItems().subscribe(quantidadeDeItemsNoCart => {
      quantidadeDeItemsNoCart === null ? this.quantidadeDeItemsNoCart = 0 : this.quantidadeDeItemsNoCart = quantidadeDeItemsNoCart.length
    })
  }

  deleteFromCart(index) {
    this.cartService.deleteFromCart(index).then(() =>{})
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
