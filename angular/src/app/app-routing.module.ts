// @ts-ignore
import {CheckoutCompleted} from './components/checkout-completed/checkout-completed.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {FAQComponent} from './components/faq/faq.component';

import {TermsOfServiceComponent} from './components/terms-of-service/terms-of-service.component';
import {PrivacyPolicyComponent} from './components/privacy-policy/privacy-policy.component';
import {ReturnPolicyComponent} from './components/return-policy/return-policy.component';
import {ShippingPolicyComponent} from './components/shipping-policy/shipping-policy.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';

import {CartDetailsComponent} from "./components/cart-details/cart-details.component";
import {ProductTrackingComponent} from "./components/product-tracking/product-tracking.component";
import {BasicCareComponent} from "./components/basic-care/basic-care.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "shipping-policy", component: ShippingPolicyComponent},
  {path: "return-policy", component: ReturnPolicyComponent},
  {path: "privacy-policy", component: PrivacyPolicyComponent},
  {path: "contact-us", component: ContactUsComponent},
  {path: "terms-of-service", component: TermsOfServiceComponent},
  {path: "product-tracking", component: ProductTrackingComponent},
  {path: "faq", component: FAQComponent},
  {path: "product/:id/:slug", component: ProductDetailsComponent},
  {path: "cart/detalhes", component: CartDetailsComponent},
  {path: "basic-care", component: BasicCareComponent},
  {path: "checkout-completed", component: CheckoutCompleted},
  {path: "not-found", component: NotFoundComponent},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
