import { LocalStorage } from '@ngx-pwa/local-storage'
import { StoreSettingsService } from '../../../services/store-settings.service'
import { NewsletterModalService } from '../../../services/newsletter-modal.service'
import { Component, OnInit, ViewEncapsulation, ViewChild  } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

declare const getScrollPosition: any;

@Component({
  selector: 'app-newsletter-modal',
  templateUrl: './newsletter-modal.component.html',
  styleUrls: ['./newsletter-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsletterModalComponent implements OnInit  {

  closeResult: string
  imagem_topo: string = null
  imagem_lado: string = null

  showedModalNewsletterScrollPerc: boolean = false

  @ViewChild('contentModalNewsletter') contentModalNewsletter : any

  constructor(private modalService: NgbModal, private storeSettingsService: StoreSettingsService, private localStorage: LocalStorage) {}

  ngOnInit(): void {

    this.imagem_topo = this.storeSettingsService.getNewsletterModalImagemTopo()

    this.imagem_lado = this.storeSettingsService.getNewsletterModalImagemLado()

    this.localStorage.getItem('showModalNewsletter').subscribe((data: any) => {
      //console.log('data: '+ JSON.stringify(data))
      if (data === null) {
        this.openModal()
      } else {

        let diff = data.expiry - new Date().getTime()

        //console.log('diff: '+ diff)
        if (diff < 0) {
          this.openModal()
        }
      }
    })
  }

  scroll = (event): void => {

    if (this.showedModalNewsletterScrollPerc === false) {

      let scrollPerc = getScrollPosition()

      if (scrollPerc >= this.storeSettingsService.getNewsletterModalTriggerValue()) {
        this.modalService.open(this.contentModalNewsletter, { centered: true })
        this.showedModalNewsletterScrollPerc = true
      }
    }
  };

  openModal() {

    let timestamp = new Date().getTime()
    //console.log('timestamp: '+timestamp)

    let timestampToAdd = this.storeSettingsService.getNewsletterModalExpiry()
    //console.log('timestampToAdd: '+timestampToAdd)

    const item = {
      expiry: timestamp + parseInt(timestampToAdd)
    }

    //console.log('expiry: '+item.expiry)

    this.localStorage.setItem('showModalNewsletter', item).subscribe(() => {
      switch (this.storeSettingsService.getNewsletterModalTrigger()) {
        case 'time': {
          setTimeout(() => {
            this.modalService.open(this.contentModalNewsletter, { centered: true })
          }, this.storeSettingsService.getNewsletterModalTriggerValue())
          break;
        }
        case 'scroll-perc': {
          window.addEventListener('scroll', this.scroll, true); //third parameter
          break;
        }
      }
    })
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

}
