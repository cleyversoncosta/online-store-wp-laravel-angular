import { NewsletterFormService } from './../../../services/newsletter-form.service'
import { StoreSettingsService } from '../../../services/store-settings.service'
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
    private storeSettingsService: StoreSettingsService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.newsletterTexto = this.storeSettingsService.getNewsletterTexto();

    this.newsletterTextoResp = this.storeSettingsService.getNewsletterTextoResp();
  }

  onSubmit(form) {
    this.spinner.show();
    this.newsletterFormService.addNewsletterFooterForm(form.value).then(data => {
      this.showNewsletterTextoResp = true
      this.spinner.hide();
    })
  }
}
