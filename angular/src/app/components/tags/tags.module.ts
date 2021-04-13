import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {TagSaleComponent} from "./tag-sale/tag-sale.component";
import {TagNewTwoComponent} from "./tag-new-two/tag-new-two.component";
import {TagNewComponent} from "./tag-new/tag-new.component";
import {TagSaleTwoComponent} from "./tag-sale-two/tag-sale-two.component";

@NgModule({
  declarations: [
    TagSaleComponent,
    TagNewComponent,
    TagNewTwoComponent,
    TagSaleTwoComponent,
  ],
  imports: [
    CommonModule,
    //FormsModule,
    //RouterModule
  ],
  exports: [
    TagSaleComponent,
    TagNewComponent,
    TagNewTwoComponent,
    TagSaleTwoComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TagsModule {
}
