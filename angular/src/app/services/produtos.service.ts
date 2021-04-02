import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) {}

  getProduto(id: number) {
    return this.http
      .get(this.settingsService.getBaseUrl() + '/api/v1/produtos/' + id)
      .pipe(retry(3));
  }

  getProdutos() {
    return this.http
      .get(this.settingsService.getBaseUrl() + '/api/v1/produtos')
      .pipe(retry(3));
  }
}
