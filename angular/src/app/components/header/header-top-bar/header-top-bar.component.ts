import { CartService } from './../../../services/cart.service';
import { ProductsService } from './../../../services/products.service'
import { StoreSettingsService } from '../../../services/store-settings.service'

import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header-top-bar',
  templateUrl: './header-top-bar.component.html',
  styleUrls: ['./header-top-bar.component.scss']
})
export class HeaderTopBarComponent implements OnInit {

  showTopBar: boolean = false

  showedFireworks = false
  showFireworks = false
  tipoFreteDisponivel : any = null
  freteGratisMinLimit : any = 0
  valorPendenteFreteGratisAnterior: number = 0;
  valorPendenteFreteGratis : number = 0

  constructor(
    private ProductsService: ProductsService,
    private storeSettingsService: StoreSettingsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    this.showTopBar = Boolean(Number(this.storeSettingsService.getShowTopBar()))

    this.tipoFreteDisponivel = this.storeSettingsService.getTipoFreteDisponivel()

    this.freteGratisMinLimit = this.storeSettingsService.getFreteGratisMinLimit()

    this.cartService.getOrderTotals().subscribe((data: any) => {
      this.valorPendenteFreteGratis = this.freteGratisMinLimit - data
    })

    //this.showHideFieworks()

  }


  showHideFieworks() {

    if ((this.showedFireworks) && (this.valorPendenteFreteGratis > 0)) {
      this.showedFireworks = false
    }

    if ((this.valorPendenteFreteGratis <= 0) && (this.showFireworks === false) && (this.showedFireworks === false)) {
        this.showFireworks = true
    }

    if (this.showFireworks) {
      setTimeout(() => {
        this.showedFireworks = true
        this.showFireworks = false
      }, 4000)
    }
  }

}
