import { FacebookService } from './../../services/facebook.service';
import { CartService } from './../../services/cart.service';
import { LojaSettingsService } from './../../services/loja-settings.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutosService } from './../../services/produtos.service';
import { SettingsService } from './../../services/settings.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.scss'],
})
export class ProdutosListaComponent implements OnInit {
  imgSrc: any;
  produtos: any[] = [];
  maxParcelas: any = 0;

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private lojaSettingsService: LojaSettingsService,
    private spinner: NgxSpinnerService,
    private cartService: CartService,
    private facebookService: FacebookService,
    private settingsService: SettingsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.spinner.show();

    this.maxParcelas = this.lojaSettingsService.getMaxParcelas();

    this.produtosService.getProdutos().subscribe((data: any[]) => {
      //console.log('getProdutos: '+JSON.stringify(data))

      for (let x = 0; x < data.length; x++) {
        data[x].image_default = data[x].images[0].src;
      }

      //console.log(data)

      this.produtos = data;
      this.spinner.hide();
    });
  }

  adicionarAoCarrinho(produto) {
    this.cartService.adicionarAoCarrinho(produto).then((produtos) => {
      this.facebookService.fbAddToCart(produto, produtos);
    });
  }

  comprarAgora(produto) {
    this.cartService.esvaziarCarrinho().then(() => {
      this.cartService.adicionarAoCarrinho(produto).then((produtos) => {
        this.facebookService.fbAddToCart(produto, produtos);

        this.router.navigate(['/carrinho/detalhes']);
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
