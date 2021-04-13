import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {NewsletterFormComponent} from "./newsletter-form/newsletter-form.component";
import {NewsletterModalComponent} from "./newsletter-modal/newsletter-modal.component";
import {NewsletterFormModalComponent} from "./newsletter-form-modal/newsletter-form-modal.component";


@NgModule({
  declarations: [
    NewsletterFormComponent,
    NewsletterModalComponent,
    NewsletterFormModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    //RouterModule
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsletterModule {
}
