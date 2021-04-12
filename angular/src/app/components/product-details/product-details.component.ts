import {FacebookService} from './../../services/facebook.service'
import {CartService} from './../../services/cart.service'
import {NgxSpinnerService} from 'ngx-spinner'
import {UtilService} from './../../services/util.service'
import {StoreSettingsService} from '../../services/store-settings.service'
import {SettingsService} from './../../services/settings.service'
import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from "@angular/router"
import {Title, Meta} from '@angular/platform-browser'

import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'

import {ProductsService} from './../../services/products.service'
import {CurrencyPipe} from '@angular/common'
import {ProductInterface} from "../../interfaces/product-interface";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class ProductDetailsComponent implements OnInit {

  showNavigationArrows = true
  showNavigationIndicators = true

  products: any[] = []
  product: any = []
  maxInstallments: any = 0

  images: string[] = []

  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService,
    private settingsService: SettingsService,
    private router: Router,
    config: NgbCarouselConfig,
    private storeSettingsService: StoreSettingsService,
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

    this.maxInstallments = this.storeSettingsService.getMaxInstallments()

    this.route.params.subscribe(params => {

      this.settingsService.scrollTopSmooth()

      this.ProductsService.getProduct(params['id'])
        .subscribe(product => {

          this.facebookService.fbViewContent(product)

          this.product = product

          this.images = []
          this.images.push(product.images[0].src)

          if (typeof product.images[1] !== 'undefined') {
            this.images.push(product.images[1].src)
          }

          this.spinner.hide()
        })
    })

  }

  addToCart(product) {
    this.cartService.addToCart(product).then(products => {
      this.facebookService.fbAddToCart(product, products)
    })
  }


  buyNow(product) {
    this.cartService.emptyCart().then(() => {
      this.cartService.addToCart(product).then(products => {
        this.facebookService.fbAddToCart(product, products)

        this.router.navigate(['/cart/detalhes'])
      })
    })
  }

  ngOnChanges() {
    console.log('ngOnChanges')
  }

  ngAfterViewChecked() {
    //console.log('ngAfterViewChecked')
    let title = this.product.name + ' - ' + this.product.subtitle + ' | ' + this.maxInstallments + 'x de ' + this.currencyPipe.transform(this.product.price / this.maxInstallments, 'BRL', true) + ' ou ' + this.currencyPipe.transform(this.product.price, 'BRL', true) + ' à vista  - NOME-DA-LOJA'

    this.addMetaTags(title, this.images[0], this.product.price)
  }

}
