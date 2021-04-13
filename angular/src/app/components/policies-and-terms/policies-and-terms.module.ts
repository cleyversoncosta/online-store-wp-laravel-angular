import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ShippingPolicyComponent} from "./shipping-policy/shipping-policy.component";
import {ReturnPolicyComponent} from "./return-policy/return-policy.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {TermsOfServiceComponent} from "./terms-of-service/terms-of-service.component";


@NgModule({
  declarations: [
    ShippingPolicyComponent,
    ReturnPolicyComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule

    //FormsModule,
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PoliciesAndTermsModule {
}
