import { SettingsService } from './../../services/settings.service';
import { UtilService } from './../../services/util.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-care',
  templateUrl: './basic-care.component.html',
  styleUrls: ['./basic-care.component.scss']
})
export class BasicCareComponent implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router,
		private utilService: UtilService,
		private metaService: Meta,
		private settingsService: SettingsService
	) {
		this.addMetaTags()
  }

  ngOnInit() {

  }


	addMetaTags() {
		let title = 'Cuidados básicos - NOME-DA-LOJA'
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


}
