import {ToastsContainer} from './components/toast/toasts-container.component';
import {NgbootstrapService} from './services/ngbootstrap.service';
import {BrowserModule} from '@angular/platform-browser'
import {NgModule, LOCALE_ID, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {HttpClientModule, HttpClient} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import {NgxSpinnerModule} from "ngx-spinner";
import {NgxMaskModule, IConfig} from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
}

import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';

const cookieConfig: NgcCookieConsentConfig = {
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

export function init_app(storeSettingsService: StoreSettingsService) {
  return () => storeSettingsService.setLojaSettings()
}

// LOCALE
import localePt from '@angular/common/locales/pt'
import {
  registerLocaleData,
  CurrencyPipe,
  LocationStrategy,
  HashLocationStrategy,
  PathLocationStrategy
} from '@angular/common'

registerLocaleData(localePt, 'pt')

// PIPES
import {BaseUrlPipe} from './pipes/base-url.pipe'

// SERVICES
import {SettingsService} from './services/settings.service'
import {ProductsService} from './services/products.service'
import {StoreSettingsService} from './services/store-settings.service'
import {HeaderCarouselService} from './services/header-carousel.service'

// COMPONENTS

import {AboutUsComponent} from './components/about-us/about-us.component'
import {FAQComponent} from './components/faq/faq.component'

import {HomeComponent} from './components/home/home.component'
import {NotFoundComponent} from './components/not-found/not-found.component'
import {ProductTrackingComponent} from './components/product-tracking/product-tracking.component'
import {ProductDetailsComponent} from './components/product-details/product-details.component'
import {ProductsListComponent} from './components/products-list/products-list.component'
import {MiniBannerComponent} from './components/mini-banner/mini-banner.component'
import {ContactUsComponent} from './components/contact-us/contact-us.component'
import {WhatsappChatComponent} from './components/whatsapp-chat/whatsapp-chat.component'
import {CartShippingBillingComponent} from './components/cart-shipping-billing/cart-shipping-billing.component'
import {CheckoutCompleted} from './components/checkout-completed/checkout-completed.component';
import {ToastComponent} from './components/toast/toast.component';
import {CartDetailsComponent} from "./components/cart-details/cart-details.component";
import {BasicCareComponent} from "./components/basic-care/basic-care.component";
import {FooterModule} from "./components/footer/footer.module";
import {HeaderModule} from "./components/header/header.module";
import {TagsModule} from "./components/tags/tags.module";
import {PoliciesAndTermsModule} from "./components/policies-and-terms/policies-and-terms.module";
import {NewsletterModule} from "./components/newsletter/newsletter.module";
import {HeaderCarouselComponent} from "./components/header-carousel/header-carousel.component";

@NgModule({
  declarations: [
    AppComponent,

    // App compoments
    HomeComponent,
    AboutUsComponent,
    ProductTrackingComponent,
    FAQComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ProductsListComponent,
    CartDetailsComponent,
    MiniBannerComponent,
    WhatsappChatComponent,
    ContactUsComponent,
    BasicCareComponent,
    CartShippingBillingComponent,
    CheckoutCompleted,
    HeaderCarouselComponent,


    //Pipes
    BaseUrlPipe,

    // Libs
    ToastComponent,
    ToastsContainer
  ],
  imports: [
    TagsModule,
    PoliciesAndTermsModule,
    NewsletterModule,
    FooterModule,
    HeaderModule,

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
    StoreSettingsService,
    {provide: APP_INITIALIZER, useFactory: init_app, deps: [StoreSettingsService], multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    //{provide: LocationStrategy, useClass: PathLocationStrategy},
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    },
    SettingsService,
    HeaderCarouselService,
    ProductsService,
    CurrencyPipe,
    NgbootstrapService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private settingsService: SettingsService) {
  }
}
