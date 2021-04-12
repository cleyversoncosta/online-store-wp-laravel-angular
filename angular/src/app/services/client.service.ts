import { ActivatedRoute } from '@angular/router';
import { SettingsService } from './settings.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  orderID: number = null

  public popupModal: Subject<any> = new Subject<any>()

  constructor(
      private http: HttpClient,
      private settingsService: SettingsService,
      private activatedRoute: ActivatedRoute
    ) { }


  addCliente(data) {
    return this.http.post(this.settingsService.getBaseUrl() + '/api/v1/cliente', {data: data})
  }

  getClient(id) {
    return this.http.get(this.settingsService.getBaseUrl() + '/api/v1/cliente/'+id)
  }


}
