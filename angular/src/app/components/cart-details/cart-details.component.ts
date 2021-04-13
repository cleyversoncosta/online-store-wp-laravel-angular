import { NgbootstrapService } from './../../services/ngbootstrap.service';
import { FacebookService } from './../../services/facebook.service';
import { CartService } from './../../services/cart.service';
import { UtilService } from './../../services/util.service'
import { Router, ActivatedRoute } from '@angular/router'
import { ClientService } from '../../services/client.service'
import { SettingsService } from './../../services/settings.service'
import { StoreSettingsService } from '../../services/store-settings.service'
import { Component, OnInit, Output, TemplateRef, ViewChild, ElementRef } from '@angular/core'
import { NgbModal, NgbToast } from '@ng-bootstrap/ng-bootstrap'
import { Title, Meta } from '@angular/platform-browser'

import { ProductsService } from './../../services/products.service'
import { NgxSpinnerService } from "ngx-spinner"
import { EventEmitter } from 'events'

declare const openPagarMeCheckout: any

@Component({
	selector: 'app-cart-details',
	templateUrl: './cart-details.component.html',
	styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

	payButtonEnabled: boolean = false
	cartProducts: any = []
	orderTotals: number = 0
	totalsToPay: number = 0

	cupomValue: number = 0

	checkoutItems: any = []

	checkoutData: any

	maxInstallments: any = 0

	userCupom: any = ''

	isCupomEnabled: any = '0'

	isValidCupom: any = null
	cupomDesconto: number = 0

	hasValidCupom: boolean = false

	showToast: boolean = true

	constructor(
		private ProductsService: ProductsService,
		private storeSettingsService: StoreSettingsService,
		private modalService: NgbModal,
		private settingsService: SettingsService,
		private titleService: Title,
		private clientService: ClientService,
		private spinner: NgxSpinnerService,
		private router: Router,
		private utilService: UtilService,
		private metaService: Meta,
		private activatedRoute: ActivatedRoute,
		private cartService: CartService,
		private facebookService: FacebookService,
		private ngbootstrapService: NgbootstrapService

	) {

		this.clientService.popupModal.subscribe(val => {
			if (val === 'close') {
				this.modalService.dismissAll()
			}
		})

		this.addMetaTags()
	}

	ngAfterViewInit() {

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

	ngOnInit(): void {

		this.titleService.setTitle('Finalizar compra - NOME-DA-LOJA')

		this.maxInstallments = this.storeSettingsService.getMaxInstallments()

		this.isCupomEnabled = this.storeSettingsService.getIsCupomEnabled()

		this.isValidCupom = this.storeSettingsService.getIsValidCupomCodigo()

		this.cupomDesconto = this.storeSettingsService.getIsValidCupomDesconto()

		this.cartService.getCartProducts().subscribe((cartProducts: any[]) => {
			this.cartProducts = cartProducts
		})

		this.cartService.getOrderTotals().subscribe(orderTotals => {
			this.orderTotals = orderTotals
			this.totalsToPay = orderTotals

			this.aplicarCupom(this.userCupom)
		})

		this.facebookService.fbInitiateCheckout(this.cartProducts, this.orderTotals)
	}

	receivePayButtonEnabledOutput(event) {
		this.payButtonEnabled = event
	}

	receiveCheckoutDataOutput(event) {
		this.checkoutData = event
		console.log(event)
	}

	aplicarCupom(userCupom) {

		this.spinner.show()
		if (userCupom.toUpperCase() == this.isValidCupom) {
			this.hasValidCupom = true

			this.alteraValorComCupom()

			this.spinner.hide()
		} else {
			this.spinner.hide()
		}
	}

	alteraValorComCupom() {
		if (this.hasValidCupom) {
			this.cupomValue = this.orderTotals - (this.orderTotals * (100 - this.cupomDesconto)) / 100
			this.totalsToPay = this.orderTotals - this.cupomValue
		}

	}

	deleteFromCart(index) {
		this.cartService.deleteFromCart(index).then(() => {
			this.alteraValorComCupom()
		})
	}

	openModalForm(modalContent) {

		this.modalService.open(modalContent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

		}, (reason) => {

		})
	}
}
