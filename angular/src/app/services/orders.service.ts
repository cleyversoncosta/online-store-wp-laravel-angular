import { SettingsService } from './settings.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) { }

  
  getPedido(orderID) {
    return this.http.get(this.settingsService.getBaseUrl() + '/api/v1/pedidos/'+orderID)
  }
  
  addPedido(data) {
    return this.http.post(this.settingsService.getBaseUrl() + '/api/v1/pedidos', {data: data})
  }

  updatePedido(orderID, data) {
    return this.http.put(this.settingsService.getBaseUrl() + '/api/v1/pedidos/'+orderID, {data: data})
  }

  setOrderAsPaid(orderID) {
    return this.http.put(this.settingsService.getBaseUrl() + '/api/v1/pedidos/set-as-paid/'+orderID, null)
  }

  capturarPgto(data) {
    return this.http.post(this.settingsService.getBaseUrl() + '/api/v1/capturar-pgto', data)
  }
  
}
