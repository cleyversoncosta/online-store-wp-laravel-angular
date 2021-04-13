import {FacebookService} from './../../services/facebook.service';
import {CartService} from './../../services/cart.service';
import {StoreSettingsService} from '../../services/store-settings.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ProductsService} from './../../services/products.service';
import {SettingsService} from './../../services/settings.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  imgSrc: any;
  products: any[] = [];
  maxInstallments: any = 0;

  constructor(
    private ProductsService: ProductsService,
    private router: Router,
    private storeSettingsService: StoreSettingsService,
    private spinner: NgxSpinnerService,
    private cartService: CartService,
    private facebookService: FacebookService,
    private settingsService: SettingsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.spinner.show();

    this.maxInstallments = this.storeSettingsService.getMaxInstallments();

    this.ProductsService.getProducts().subscribe((data: any[]) => {

      for (let x = 0; x < data.length; x++) {
        data[x].image_default = data[x].images[0].src;
      }
      this.products = data;
      this.spinner.hide();
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product).then((products) => {
      this.facebookService.fbAddToCart(product, products);
    });
  }

  buyNow(product) {
    this.cartService.emptyCart().then(() => {
      this.cartService.addToCart(product).then((products) => {
        this.facebookService.fbAddToCart(product, products);

        this.router.navigate(['/cart/detalhes']);
      });
    });
  }

  showLoading(productID) {
    this.settingsService.scrollTopSmooth();

    this.route.params.subscribe((params) => {
      //console.log(params['id'])
      //console.log(productID)

      if (params['id'] !== productID) {
        this.spinner.show();
        /*
        setTimeout(() => {
          this.spinner.hide()
        }, 3000);
        */
      }
    });
  }
}
