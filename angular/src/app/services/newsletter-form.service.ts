import {
  LojaSettingsService
} from './loja-settings.service';
import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';

import {
  SettingsService
} from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class NewsletterFormService {

  constructor(private http: HttpClient, private settingsService: SettingsService, private lojaSettingsService: LojaSettingsService) {}

  addNewsletterFooterForm(data) {
    let promise = new Promise((resolve, reject) => {

      let nData: any = {
        segment: this.lojaSettingsService.getMauticSegmentoNWF(),
        firstname: data.nome,
        email: data.email,
      }

      this.http.post < any > (this.settingsService.getBaseUrl() + '/api/v1/newsletter', nData).subscribe(data => {
        resolve(data);
      })

    })
    return promise;
  }


  addNewsletterModalForm(data) {
    let promise = new Promise((resolve, reject) => {

      let nData: any = {
        segment: this.lojaSettingsService.getMauticSegmentoNWM(),
        firstname: data.nome,
        email: data.email,
      }

      this.http.post < any > (this.settingsService.getBaseUrl() + '/api/v1/newsletter', nData).subscribe(data => {
        resolve(data);
      })
    })
    return promise;
  }
}