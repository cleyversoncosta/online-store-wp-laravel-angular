import { NewsletterFormService } from '../../services/newsletter-form.service';
import { Component, OnInit } from '@angular/core';
import { LojaSettingsService } from './../../services/loja-settings.service';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-newsletter-form-modal',
  templateUrl: './newsletter-form-modal.component.html',
  styleUrls: ['./newsletter-form-modal.component.scss']
})
export class NewsletterFormModalComponent implements OnInit {

  showNewsletterTextoResp: boolean = false;
  newsletterTexto: any = '';
  newsletterTextoResp: any = '';

  constructor(
      private newsletterFormService: NewsletterFormService, 
      private lojaSettingsService: LojaSettingsService,
      private spinner: NgxSpinnerService
      ) { 

  }

  ngOnInit(): void {

    this.newsletterTexto = this.lojaSettingsService.getNewsletterModalTexto();

    this.newsletterTextoResp = this.lojaSettingsService.getNewsletterModalTextoResp();
  }
  
  onSubmit(form) {
    this.spinner.show();
    this.newsletterFormService.addNewsletterModalForm(form.value).then(data => {
      this.showNewsletterTextoResp = true;

      this.spinner.hide();
    });
  } 
}
