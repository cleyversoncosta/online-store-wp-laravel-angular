import { ToastsContainer } from './components/toast/toasts-container.component';
import { NgbootstrapService } from './services/ngbootstrap.service';
import { BrowserModule } from '@angular/platform-browser'
import { NgModule, LOCALE_ID, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
}

import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';

const cookieConfig:NgcCookieConsentConfig = {
  "cookie": {
    "domain": "dominiodaloja.com.br"
  },
  "position": "bottom-left",
  "theme": "classic",
  "palette": {
    "popup": {
      "background": "#000000",
      "text": "#ffffff",
      "link": "#ffffff"
    },
    "button": {
      "background": "#f1d600",
      "text": "#000000",
      "border": "transparent"
    }
  },
  "type": "info"
};

export function init_app(lojaSettingsService: LojaSettingsService) {
  return () => lojaSettingsService.setLojaSettings()
}

// LOCALE
import localePt from '@angular/common/locales/pt'
import { registerLocaleData, CurrencyPipe, LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common'
registerLocaleData(localePt, 'pt')

// PIPES
import { BaseUrlPipe } from './pipes/base-url.pipe'

// SERVICES
import { SettingsService } from './services/settings.service'
import { ProdutosService } from './services/produtos.service'
import { HeaderCarouselService } from './components/header-carousel/header-carousel.service'
import { LojaSettingsService } from './services/loja-settings.service'


// COMPONENTS
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component'
import { PoliticaDeEnvioComponent } from './components/politica-de-envio/politica-de-envio.component'
import { PoliticaDeRetornoComponent } from './components/politica-de-retorno/politica-de-retorno.component'
import { PoliticaDePrivacidadeComponent } from './components/politica-de-privacidade/politica-de-privacidade.component'
import { TermosDeServicoComponent } from './components/termos-de-servico/termos-de-servico.component'
import { AcompanharProdutoComponent } from './components/acompanhar-produto/acompanhar-produto.component'
import { PerguntasFrequentesComponent } from './components/perguntas-frequentes/perguntas-frequentes.component'
import { HeaderCarouselComponent } from './components/header-carousel/header-carousel.component'
import { HomeComponent } from './components/home/home.component'
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component'
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component'
import { FooterSocialIconsComponent } from './components/footer-social-icons/footer-social-icons.component'
import { ProdutosListaComponent } from './components/produtos-lista/produtos-lista.component'
import { HeaderCarrinhoComponent } from './components/header-carrinho/header-carrinho.component'
import { CarrinhoDetalhesComponent } from './components/carrinho-detalhes/carrinho-detalhes.component'
import { FaixaMiniComponent } from './components/faixa-mini/faixa-mini.component'
import { HeaderContatoComponent } from './components/header-contato/header-contato.component'
import { HeaderTopBarComponent } from './components/header-top-bar/header-top-bar.component'
import { FaleConoscoComponent } from './components/fale-conosco/fale-conosco.component'
import { TagSaleComponent } from './components/tag-sale/tag-sale.component'
import { TagLancamentoComponent } from './components/tag-lancamento/tag-lancamento.component'
import { WhatsappChatComponent } from './components/whatsapp-chat/whatsapp-chat.component'
import { TagLancamentoDoisComponent } from './components/tag-lancamento-dois/tag-lancamento-dois.component'
import { TagSaleDoisComponent } from './components/tag-sale-dois/tag-sale-dois.component'
import { CuidadosBasicosComponent } from './components/cuidados-basicos/cuidados-basicos.component'
import { NewsletterFormComponent } from './components/newsletter-form/newsletter-form.component'
import { NewsletterModalComponent } from './components/newsletter-modal/newsletter-modal.component'
import { CarrinhoShippingBillingComponent } from './components/carrinho-shipping-billing/carrinho-shipping-billing.component'
import { NewsletterFormModalComponent } from './components/newsletter-form-modal/newsletter-form-modal.component';
import { CompraConcluidaComponent } from './components/compra-concluida/compra-concluida.component';
import { FooterPaymentsComponent } from './components/footer-payments/footer-payments.component';
import { ToastComponent } from './components/toast/toast.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SobreNosComponent,
    PoliticaDeEnvioComponent,
    PoliticaDeRetornoComponent,
    PoliticaDePrivacidadeComponent,
    TermosDeServicoComponent,
    AcompanharProdutoComponent,
    PerguntasFrequentesComponent,
    HeaderCarouselComponent,
    HomeComponent,
    NaoEncontradoComponent,
    ProdutoDetalhesComponent,
    FooterSocialIconsComponent,
    ProdutosListaComponent,
    HeaderCarrinhoComponent,
    CarrinhoDetalhesComponent,
    BaseUrlPipe,
    FaixaMiniComponent,
    HeaderContatoComponent,
    HeaderTopBarComponent,
    FaleConoscoComponent,
    TagSaleComponent,
    TagLancamentoComponent,
    WhatsappChatComponent,
    TagLancamentoDoisComponent,
    TagSaleDoisComponent,
    CuidadosBasicosComponent,
    NewsletterFormComponent,
    NewsletterModalComponent,
    CarrinhoShippingBillingComponent,
    NewsletterFormModalComponent,
    CompraConcluidaComponent,
    FooterPaymentsComponent,
    ToastComponent,
    ToastsContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    NgcCookieConsentModule.forRoot(cookieConfig),
    TranslateModule.forRoot({
      defaultLanguage: 'pt-br',
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    })
    //    ReactiveFormsModule
  ],
  providers: [
    LojaSettingsService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [LojaSettingsService], multi: true },    
    {provide : LocationStrategy , useClass: HashLocationStrategy},
    //{provide: LocationStrategy, useClass: PathLocationStrategy},
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    },
    SettingsService,
    HeaderCarouselService,
    ProdutosService,
    CurrencyPipe,
    NgbootstrapService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private settingsService: SettingsService) { }
}
