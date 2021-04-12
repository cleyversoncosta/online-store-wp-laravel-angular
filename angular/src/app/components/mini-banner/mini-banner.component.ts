import { StoreSettingsService } from '../../services/store-settings.service';
import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-mini-banner',
  templateUrl: './mini-banner.component.html',
  styleUrls: ['./mini-banner.component.scss']
})
export class MiniBannerComponent implements OnInit {

  maxInstallments: any = 0;

  constructor(private ProductsService: ProductsService, private storeSettingsService: StoreSettingsService) { }

  ngOnInit(): void {

    this.maxInstallments = this.storeSettingsService.getMaxInstallments()
  }

}
