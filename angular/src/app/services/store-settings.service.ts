import { Injectable, EventEmitter } from '@angular/core';

import { SettingsService } from './settings.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StoreSettingsService {
  showTopBar: any = '';

  freteGratisMinLimit: any = '';

  tipoFreteDisponivel: any = '';

  maxInstallments: any = 10;

  isCupomEnabled: any = '';
  isValidCupomCodigo: any = '';
  isValidCupomDesconto: any = '';

  newsletterTexto: any = '';
  newsletterTextoResp: any = '';
  newsletterModalExpiry: any = '';
  newsletterModalTrigger: any = '';
  newsletterModalTriggerValue: any = '';

  newsletterModalImagemTopo: any = '';
  newsletterModalImagemLado: any = '';

  newsletterModalTexto: any = '';
  newsletterModalTextoResp: any = '';

  mauticSegmentoNWF: any = '';
  mauticSegmentoNWM: any = '';

  pagarmeEncryptionKey: any = '';

  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) {}

  public setLojaSettings(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get<any>(this.settingsService.getBaseUrl() + '/api/v1/loja/settings')
        .subscribe((data) => {
          data.forEach((element) => {
            //console.log(element.tipo)
            switch (element.tipo) {
              case 'frete-gratis-min-limit': {
                this.freteGratisMinLimit = element.valor;
                break;
              }
              case 'frete-disponivel': {
                this.tipoFreteDisponivel = element.valor;
                break;
              }
              case 'max-parcelas': {
                this.maxInstallments = element.valor;
                break;
              }
              case 'cupom-habilitado': {
                this.isCupomEnabled = element.valor;
                break;
              }
              case 'cupom-valido-codigo': {
                this.isValidCupomCodigo = element.valor;
                break;
              }
              case 'cupom-valido-desconto': {
                this.isValidCupomDesconto = element.valor;
                break;
              }
              case 'nw-img-topo': {
                this.newsletterModalImagemTopo = element.valor;
                break;
              }
              case 'nw-img-lado': {
                this.newsletterModalImagemLado = element.valor;
                break;
              }
              case 'newsletter-texto': {
                this.newsletterTexto = element.valor;
                break;
              }
              case 'newsletter-texto-resp': {
                this.newsletterTextoResp = element.valor;
                break;
              }
              case 'newsletter-modal-expiry': {
                this.newsletterModalExpiry = element.valor;
                break;
              }

              case 'newsletter-modal-trigger': {
                this.newsletterModalTrigger = element.valor;
                break;
              }
              case 'newsletter-modal-trigger-value': {
                this.newsletterModalTriggerValue = element.valor;
                break;
              }

              case 'newsletter-modal-texto': {
                this.newsletterModalTexto = element.valor;
                break;
              }
              case 'newsletter-modal-texto-resp': {
                this.newsletterModalTextoResp = element.valor;
                break;
              }

              case 'show-top-bar': {
                element.valor == 1
                  ? (this.showTopBar = true)
                  : (this.showTopBar = false);

                break;
              }
              case 'mautic-segmento-nw-f': {
                this.mauticSegmentoNWF = element.valor;
                break;
              }
              case 'mautic-segmento-nw-m': {
                this.mauticSegmentoNWM = element.valor;
                break;
              }
              case 'pagarme-encryption-key': {
                this.pagarmeEncryptionKey = element.valor;
                break;
              }
            }
          });

          resolve(true);
        });
    });
  }

  getShowTopBar() {
    return this.showTopBar;
  }

  getFreteGratisMinLimit() {
    return this.freteGratisMinLimit;
  }

  getTipoFreteDisponivel() {
    return this.tipoFreteDisponivel;
  }

  getMaxInstallments() {
    return this.maxInstallments;
  }

  getIsCupomEnabled() {
    return this.isCupomEnabled;
  }

  getIsValidCupomCodigo() {
    return this.isValidCupomCodigo;
  }

  getIsValidCupomDesconto() {
    return this.isValidCupomDesconto;
  }

  getNewsletterModalImagemTopo() {
    return this.newsletterModalImagemTopo;
  }

  getNewsletterModalImagemLado() {
    return this.newsletterModalImagemLado;
  }

  getMauticSegmentoNWF() {
    return this.mauticSegmentoNWF;
  }

  getMauticSegmentoNWM() {
    return this.mauticSegmentoNWM;
  }

  getNewsletterTexto() {
    return this.newsletterTexto;
  }

  getNewsletterTextoResp() {
    return this.newsletterTextoResp;
  }

  getNewsletterModalExpiry() {
    return this.newsletterModalExpiry;
  }

  getNewsletterModalTexto() {
    return this.newsletterModalTexto;
  }

  getNewsletterModalTextoResp() {
    return this.newsletterModalTextoResp;
  }

  getNewsletterModalTrigger() {
    return this.newsletterModalTrigger;
  }

  getNewsletterModalTriggerValue() {
    return this.newsletterModalTriggerValue;
  }

  getPagarmeEncryptionKey() {
    return this.pagarmeEncryptionKey;
  }
}
