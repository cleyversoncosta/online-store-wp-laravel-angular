import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  baseUrl: any = 'http://127.0.0.1:8000';

  baseUrlImg: any = 'https://dominiodaloja.com.br';
  siteUrl: any = 'https://dominiodaloja.com.br';

  constructor() {}

  getLocale() {
    return 'pt-BR';
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  getbaseUrlImg() {
    return this.baseUrlImg;
  }

  getSiteUrl() {
    return this.siteUrl;
  }

  scrollTopSmooth() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 100); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  getWhatsAppUrl() {
    return 'https://api.whatsapp.com/send?phone=553197977442';
  }

  getSocialShareImageUrl() {
    return 'https://dominiodaloja.com.br/assets/imagens/social-share.jpg';
  }
}
