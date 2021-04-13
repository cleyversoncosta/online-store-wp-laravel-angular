import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

import { catchError, retry } from 'rxjs/operators';
import {ProductInterface} from "../interfaces/product-interface";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) {}

  getProduct(id: number) {
    return this.http
      .get<ProductInterface>(this.settingsService.getBaseUrl() + '/api/v1/produtos/' + id)
      .pipe(retry(3))
  }

  getProducts() {
    return this.http
      .get<ProductInterface[]>(this.settingsService.getBaseUrl() + '/api/v1/produtos')
      .pipe(retry(3))
  }
}
