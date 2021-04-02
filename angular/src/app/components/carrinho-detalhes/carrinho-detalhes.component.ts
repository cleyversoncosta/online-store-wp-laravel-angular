import { NgbootstrapService } from './../../services/ngbootstrap.service';
import { FacebookService } from './../../services/facebook.service';
import { CartService } from './../../services/cart.service';
import { UtilService } from './../../services/util.service'
import { Router, ActivatedRoute } from '@angular/router'
import { ClienteService } from './../../services/cliente.service'
import { SettingsService } from './../../services/settings.service'
import { LojaSettingsService } from './../../services/loja-settings.service'
import { Component, OnInit, Output, TemplateRef, ViewChild, ElementRef } from '@angular/core'
import { NgbModal, NgbToast } from '@ng-bootstrap/ng-bootstrap'
import { Title, Meta } from '@angular/platform-browser'

import { ProdutosService } from './../../services/produtos.service'
import { NgxSpinnerService } from "ngx-spinner"
import { EventEmitter } from 'events'

declare const openPagarMeCheckout: any

@Component({
	selector: 'app-carrinho-detalhes',
	templateUrl: './carrinho-detalhes.component.html',
	styleUrls: ['./carrinho-detalhes.component.scss']
})
export class CarrinhoDetalhesComponent implements OnInit {
	
	payButtonEnabled: boolean = false
	produtosCarrinho: any = []
	valorDoPedido: number = 0
	valorAPagar: number = 0

	valorCupomDesconto: number = 0

	itemsCheckout: any = []

	checkoutData: any

	maxParcelas: any = 0

	cupomUsuario: any = ''

	cupomHabilitado: any = '0'

	cupomValido: any = null
	cupomDesconto: number = 0

	possuiCupomValido: boolean = false

	showToast: boolean = true


	constructor(
		private produtosService: ProdutosService,
		private lojaSettingsService: LojaSettingsService,
		private modalService: NgbModal,
		private settingsService: SettingsService,
		private titleService: Title,
		private clienteService: ClienteService,
		private spinner: NgxSpinnerService,
		private router: Router,
		private utilService: UtilService,
		private metaService: Meta,
		private activatedRoute: ActivatedRoute,
		private cartService: CartService,
		private facebookService: FacebookService,
		private ngbootstrapService: NgbootstrapService

	) {

		this.clienteService.popupModal.subscribe(val => {
			if (val === 'close') {
				this.modalService.dismissAll()
			}
		})
		
		this.addMetaTags()
	}

	ngAfterViewInit() {
			
	}

	addMetaTags() {
		let title = 'Acompanhar produto - NOME-DA-LOJA'
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

		this.maxParcelas = this.lojaSettingsService.getMaxParcelas()

		this.cupomHabilitado = this.lojaSettingsService.getCupomHabilitado()

		this.cupomValido = this.lojaSettingsService.getCupomValidoCodigo()

		this.cupomDesconto = this.lojaSettingsService.getCupomValidoDesconto()

		this.cartService.obterProdutosDoCarrinho().subscribe((produtosCarrinho: any[]) => {
			this.produtosCarrinho = produtosCarrinho
		})

		this.cartService.obterValorDoPedido().subscribe(valorDoPedido => {
			this.valorDoPedido = valorDoPedido
			this.valorAPagar = valorDoPedido	

			this.aplicarCupom(this.cupomUsuario)
		})		
		
		this.facebookService.fbInitiateCheckout(this.produtosCarrinho, this.valorDoPedido)	
	}

	receivePayButtonEnabledOutput(event) {
		this.payButtonEnabled = event
	}

	receiveCheckoutDataOutput(event) {
		this.checkoutData = event
		console.log(event)
	}

	aplicarCupom(cupomUsuario) {

		this.spinner.show()
		if (cupomUsuario.toUpperCase() == this.cupomValido) {
			this.possuiCupomValido = true

			this.alteraValorComCupom()

			this.spinner.hide()
		} else {
			this.spinner.hide()
		}	
	}

	alteraValorComCupom() {
		if (this.possuiCupomValido) {
			this.valorCupomDesconto = this.valorDoPedido - (this.valorDoPedido * (100 - this.cupomDesconto)) / 100
			this.valorAPagar = this.valorDoPedido - this.valorCupomDesconto
		}
	
	}

	excluirProdutoDoCarrinho(index) {
		this.cartService.excluirProdutoDoCarrinho(index).then(() => {
			this.alteraValorComCupom()
		})
	}

	openModalForm(modalContent) {

		this.modalService.open(modalContent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

		}, (reason) => {

		})
	}
}
