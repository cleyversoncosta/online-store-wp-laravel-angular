import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HeaderComponent} from "./header.component";
import {HeaderCarouselComponent} from "./header-carousel/header-carousel.component";
import {HeaderContactComponent} from "./header-contact/header-contact.component";
import {HeaderTopBarComponent} from "./header-top-bar/header-top-bar.component";
import {HeaderCartComponent} from "./header-cart/header-cart.component";


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderCarouselComponent,
    HeaderContactComponent,
    HeaderTopBarComponent,
    HeaderCartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    //FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    HeaderCarouselComponent,
    HeaderContactComponent,
    HeaderTopBarComponent,
    HeaderCartComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule {
}
