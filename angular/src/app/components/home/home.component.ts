import { SettingsService } from './../../services/settings.service';
import { NgbootstrapService } from './../../services/ngbootstrap.service';
import { Router } from '@angular/router';
import { UtilService } from './../../services/util.service';
import { LojaSettingsService } from './../../services/loja-settings.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { ProdutosService } from './../../services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
      private produtosService: ProdutosService, 
      private titleService: Title, 
      private lojaSettingsService: LojaSettingsService,
      private metaService: Meta,
      private utilService: UtilService,
      private router: Router,
      private ngbootstrapService: NgbootstrapService,
      private settingsService: SettingsService
      ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.addMetaTags()
  }

  addMetaTags() {
    let title = 'NOME-DA-LOJA - TÍTULO-DA-LOJA'
    let description = ''
    let url = this.router.url
    let imageURL = this.settingsService.getSocialShareImageUrl()
    let ogType = 'website'
    let priceAmount = null

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

}
