import { SettingsService } from './../../services/settings.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilService } from './../../services/util.service';
import { Router } from '@angular/router';

import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ProductTrackingService} from "../../services/product-tracking.service";

@Component({
  selector: 'app-product-tracking',
  templateUrl: './product-tracking.component.html',
  styleUrls: ['./product-tracking.component.scss']
})
export class ProductTrackingComponent implements OnInit {

  status: string = '';

  trackID: string = '';
  trackingData: any = '';

  constructor(
      private titleService: Title,
      private productTrackingService: ProductTrackingService,
      private modalService: NgbModal,
      private router: Router,
      private utilService: UtilService,
      private metaService: Meta,
      private spinner: NgxSpinnerService,
      private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.addMetaTags()
  }

  addMetaTags() {
    let title = 'Acompanhar product - NOME-DA-LOJA'
    let description = ''
    let url = this.router.url
    let imageURL = this.settingsService.getSocialShareImageUrl()
    let ogType = 'website'
    let priceAmount = null

    this.utilService.addMetaTags(
      this.titleService,
      this.metaService,
      title,
      description,
      url,
      imageURL,
      ogType,
      priceAmount
    )
  }

  tracking() {
    this.spinner.show()
    //this.trackID = 'PW377894918BR';

    if (this.trackID.length === 13) {
      this.productTrackingService.trackingCorreios(this.trackID).subscribe((res) =>{
        this.trackingData = res;
        this.spinner.hide()
      })
    }
  }


  open(content, evento) {
    if (evento === 'objeto postado') {
      this.status = 'postado';
    } else if (evento === 'objeto encaminhado') {
      this.status = 'encaminhado';
    } else if (evento === 'objeto mal encaminhado') {
      this.status = 'mal_encaminhado';
    } else if (evento === 'objeto aguardando retirada no endereço indicado') {
      this.status = 'aguardando_retirada';
    } else if (evento ==='objeto entregue ao destinatário') {
      this.status = 'entregue_ao_destinatario';
    }

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

    }, (reason) => {

    });
  }

}
