import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from "./header.component";
import {HeaderContactComponent} from "./header-contact/header-contact.component";
import {HeaderTopBarComponent} from "./header-top-bar/header-top-bar.component";
import {HeaderCartComponent} from "./header-cart/header-cart.component";


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderContactComponent,
    HeaderTopBarComponent,
    HeaderCartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule {
}
