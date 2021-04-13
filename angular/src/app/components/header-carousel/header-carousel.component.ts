import {HeaderCarouselService} from '../../services/header-carousel.service'
import {Component, OnInit} from '@angular/core'

import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HeaderCarouselComponent implements OnInit {

  showNavigationArrows = true
  showNavigationIndicators = true

  imagesMobile: any = null
  imagesDesktop: any = null

  constructor(config: NgbCarouselConfig, private headerCarouselService: HeaderCarouselService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true
    config.showNavigationIndicators = true
  }

  ngOnInit(): void {
    this.headerCarouselService.obterCarouselImgMobile().subscribe(data => {
      this.imagesMobile = data
    })

    this.headerCarouselService.obterCarouselImgDesktop().subscribe(data => {
      this.imagesDesktop = data
    })
  }

}
