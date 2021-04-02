import { LojaSettingsService } from './../../services/loja-settings.service';
import { Component, OnInit } from '@angular/core';

import { ProdutosService } from './../../services/produtos.service';

@Component({
  selector: 'app-faixa-mini',
  templateUrl: './faixa-mini.component.html',
  styleUrls: ['./faixa-mini.component.scss']
})
export class FaixaMiniComponent implements OnInit {

  maxParcelas: any = 0;

  constructor(private produtosService: ProdutosService, private lojaSettingsService: LojaSettingsService) { }

  ngOnInit(): void {

    this.maxParcelas = this.lojaSettingsService.getMaxParcelas()
  }

}
