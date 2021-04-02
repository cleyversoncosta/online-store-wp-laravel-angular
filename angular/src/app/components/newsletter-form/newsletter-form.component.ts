import { NewsletterFormService } from './../../services/newsletter-form.service'
import { LojaSettingsService } from './../../services/loja-settings.service'
import { Component, OnInit } from '@angular/core'
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent implements OnInit {

  showNewsletterTextoResp: boolean = false
  newsletterTexto: any = ''
  newsletterTextoResp: any = ''

  constructor(
    private newsletterFormService: NewsletterFormService, 
    private lojaSettingsService: LojaSettingsService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.newsletterTexto = this.lojaSettingsService.getNewsletterTexto();

    this.newsletterTextoResp = this.lojaSettingsService.getNewsletterTextoResp();
  }

  onSubmit(form) {
    this.spinner.show();
    this.newsletterFormService.addNewsletterFooterForm(form.value).then(data => {
      this.showNewsletterTextoResp = true
      this.spinner.hide();
    })
  } 
}
