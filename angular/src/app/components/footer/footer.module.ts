import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {FooterComponent} from "./footer.component";
import {FooterSocialIconsComponent} from "./footer-social-icons/footer-social-icons.component";
import {FooterPaymentsComponent} from "./footer-payments/footer-payments.component";

@NgModule({
  declarations: [
    FooterComponent,
    FooterSocialIconsComponent,
    FooterPaymentsComponent,
  ],
  imports: [
    CommonModule,
    //FormsModule,
    //RouterModule
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterModule {
}
