import { SettingsService } from './../../../services/settings.service';
import { UtilService } from './../../../services/util.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-policy',
  templateUrl: './return-policy.component.html',
  styleUrls: ['./return-policy.component.scss']
})
export class ReturnPolicyComponent implements OnInit {


  constructor(private titleService: Title,
    private router: Router,
		private utilService: UtilService,
		private metaService: Meta,
		private settingsService: SettingsService
	) {
		this.addMetaTags()
  }


	addMetaTags() {
		let title = 'Política de retorno (troca e devolução) - NOME-DA-LOJA'
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


  ngOnInit(): void {

  }

}
