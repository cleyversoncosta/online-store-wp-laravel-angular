import { FacebookService } from './../../services/facebook.service'
import { CartService } from './../../services/cart.service'
import { NgxSpinnerService } from 'ngx-spinner'
import { UtilService } from './../../services/util.service'
import { LojaSettingsService } from './../../services/loja-settings.service'
import { SettingsService } from './../../services/settings.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from "@angular/router"
import { Title, Meta }     from '@angular/platform-browser'

import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'

import { ProdutosService } from './../../services/produtos.service'
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class ProdutoDetalhesComponent implements OnInit {

  showNavigationArrows = true
  showNavigationIndicators = true

  produtos : any[] = []
  produto : any = []
  maxParcelas : any = 0

  images : string[] = []  

  constructor(
    private route: ActivatedRoute, 
    private produtosService: ProdutosService, 
    private settingsService: SettingsService,
    private router: Router,
    config: NgbCarouselConfig,
    private lojaSettingsService: LojaSettingsService,
    private titleService: Title,
    private currencyPipe: CurrencyPipe,
		private utilService: UtilService,
    private metaService: Meta,
    private spinner: NgxSpinnerService,
    private cartService: CartService,
    private facebookService: FacebookService
    ) {

      // customize default values of carousels used by this component tree
      config.showNavigationArrows = true
      config.showNavigationIndicators = true    
  }



	addMetaTags(title, imageURL, priceAmount) {
		let description = ''
		let url = this.router.url
		let ogType = 'product'
	
		this.utilService.addMetaTags(
		  this.titleService, 
		  this.metaService,
		  title,
		  description,
		  url,
		  imageURL,
		  ogType,
		  priceAmount
		)    
  }	


  ngOnInit(): void { 

    this.spinner.show()

    this.maxParcelas = this.lojaSettingsService.getMaxParcelas()

    this.route.params.subscribe(params => { 
      
      this.settingsService.scrollTopSmooth()
      
      this.produtosService.getProduto(params['id']).subscribe((produto : any) => {

        //console.log(produto)

        this.facebookService.fbViewContent(produto)

        this.produto = produto

        this.images = []
        this.images.push(produto.images[0].src)   
        
        if (typeof produto.images[1] !== 'undefined') {
          this.images.push(produto.images[1].src)  
        }
        
        this.spinner.hide()
      })
    })

  }

  adicionarAoCarrinho(produto) {
    this.cartService.adicionarAoCarrinho(produto).then(produtos => {
      this.facebookService.fbAddToCart(produto, produtos)
    })
  }


  comprarAgora(produto) {
    this.cartService.esvaziarCarrinho().then(() => {
      this.cartService.adicionarAoCarrinho(produto).then(produtos => {
        this.facebookService.fbAddToCart(produto, produtos)
        
        this.router.navigate(['/carrinho/detalhes'])
      })
    })
  }  

  ngOnChanges() {
    console.log('ngOnChanges')
  }

  ngAfterViewChecked() {
    //console.log('ngAfterViewChecked')
    let title = this.produto.name + ' - ' + this.produto.subtitle + ' | ' + this.maxParcelas + 'x de ' + this.currencyPipe.transform(this.produto.price / this.maxParcelas, 'BRL', true) + ' ou ' + this.currencyPipe.transform(this.produto.price, 'BRL', true) + ' à vista  - NOME-DA-LOJA'
    
    this.addMetaTags(title, this.images[0], this.produto.price)
  }

}
