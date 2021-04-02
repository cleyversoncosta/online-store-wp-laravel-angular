import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SettingsService } from './../../services/settings.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderCarouselService {

  constructor(private settingsService: SettingsService, private http: HttpClient) { }

  obterCarouselImgMobile() {
    return this.http.get(this.settingsService.getBaseUrl() + '/api/v1/carousel/mobile');
  }  
  
  obterCarouselImgDesktop() {
	  return this.http.get(this.settingsService.getBaseUrl() + '/api/v1/carousel/desktop');
  }
}
