import { CartService } from './../../services/cart.service';
import { ProdutosService } from './../../services/produtos.service'
import { Component, OnInit } from '@angular/core'

import { LojaSettingsService } from './../../services/loja-settings.service'

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
    private produtosService: ProdutosService, 
    private lojaSettingsService: LojaSettingsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    this.showTopBar = Boolean(Number(this.lojaSettingsService.getShowTopBar()))

    this.tipoFreteDisponivel = this.lojaSettingsService.getTipoFreteDisponivel()

    this.freteGratisMinLimit = this.lojaSettingsService.getFreteGratisMinLimit()

    this.cartService.obterValorDoPedido().subscribe((data: any) => {
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