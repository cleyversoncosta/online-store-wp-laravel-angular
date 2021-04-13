import {
  NgbootstrapService
} from './../../services/ngbootstrap.service';
import {
  CheckoutService
} from './../../services/checkout.service';
import {
  CartService
} from './../../services/cart.service';
import {
  Router
} from '@angular/router'
import {
  ProductsService
} from './../../services/products.service'
import {
  ClientService
} from '../../services/client.service'
import {
  SettingsService
} from './../../services/settings.service'
import {
  NgForm
} from '@angular/forms'
import {
  StoreSettingsService
} from '../../services/store-settings.service'

import {
  UtilService
} from './../../services/util.service'
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core'

import {
  NgxSpinnerService
} from "ngx-spinner"

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  MustMatch
} from '../../_helpers/must-match.validator';
import {
  ValidaCPF
} from '../../_helpers/cpf-valid.validator';
import {
  ValidaDate
} from '../../_helpers/date-valid.validator';
import {
  ValidaCEP
} from '../../_helpers/cep-valid.validator';
import {CartDetailsService} from "../../services/cart-details.service";


@Component({
  selector: 'app-cart-shipping-billing',
  templateUrl: './cart-shipping-billing.component.html',
  styleUrls: ['./cart-shipping-billing.component.css']
})
export class CartShippingBillingComponent implements OnInit {

  @Input('totalsToPay') totalsToPay: any
  @Input('cartProducts') lineItems: any
  @Input('cupomValue') cupomValue: number = 0

  @ViewChild('form') ngForm: NgForm

  billingForm: FormGroup;
  shippingForm: FormGroup;
  submitted = false;

  buyerEqualsShipping: boolean = true

  isValidBirthDate: boolean = false

  states: any

  days: any
  months: any
  years: any

  maxInstallments: any = 0

  customer: any
  billing: any
  shipping: any

  constructor(
    private cartDetailsService: CartDetailsService,
    private utilService: UtilService,
    private storeSettingsService: StoreSettingsService,
    private settingsService: SettingsService,
    private clientService: ClientService,
    private spinner: NgxSpinnerService,
    private ProductsService: ProductsService,
    private router: Router,
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private formBuilder: FormBuilder,
    private ngbootstrapService: NgbootstrapService
  ) {

  }

  ngAfterViewInit() {

    this.billingForm.valueChanges.subscribe(val => {
      this.applyData()
    });
  }

  ngOnInit(): void {

    this.billingForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      email_conf: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      logradouro_numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
    }, {
      validator: [
        MustMatch('email', 'email_conf'),
        ValidaCPF('cpf'),
        ValidaDate('data_nascimento')
      ]
    })

    this.shippingForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      logradouro_numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
    })

    this.days = this.utilService.days()
    this.years = this.utilService.years()

    this.states = this.cartDetailsService.obterStates()

    this.months = this.cartDetailsService.obterMonths()

    this.maxInstallments = this.storeSettingsService.getMaxInstallments()

  }

  // convenience getter for easy access to form fields
  get fb() {
    return this.billingForm.controls;
  }

  get fs() {
    return this.shippingForm.controls;
  }

  applyData() {

    if (this.buyerEqualsShipping) {

      this.shippingForm.patchValue({
        nome: this.billingForm.get('nome').value,
        cep: this.billingForm.get('cep').value,
        logradouro: this.billingForm.get('logradouro').value,
        logradouro_numero: this.billingForm.get('logradouro_numero').value,
        complemento: this.billingForm.get('complemento').value,
        bairro: this.billingForm.get('bairro').value,
        cidade: this.billingForm.get('cidade').value,
        uf: this.billingForm.get('uf').value
      })
    }
  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if ((this.billingForm.invalid) || (this.shippingForm.invalid)) {
      this.ngbootstrapService.show('O formulário precisa ser preenchido corretamente', {
        classname: 'bg-warning text-dark',
        delay: 3000
      });
      return;
    }

    let param = {
      billing: this.billingForm.value,
      shipping: this.shippingForm.value,
      buyerEqualsShipping: this.buyerEqualsShipping
    }

    //console.log(param)

    this.checkoutService.prepareDatatoSubmit(param).then(billingShipping => {

      let param: any = {
        totalsToPay: this.totalsToPay,
        maxInstallments: this.maxInstallments,
        lineItems: this.lineItems,
        billingShipping: billingShipping,
        cuponCode: ""
      }

      if (this.cupomValue > 0) {
        param.cuponCode = this.storeSettingsService.getIsValidCupomCodigo()
      }

      //console.log(param)

      this.checkoutService.onSubmitModalPagarme(param).then(resModal => {
        //console.log(resModal)

        this.router.navigate(['/checkout-completed'])

      })
    })
  }

  obterDadosCEP(cep, tipo) {

    if (cep.replace('-', '').length === 8) {
      this.spinner.show()

      this.cartDetailsService.obterDadosCEP(cep).subscribe((res) => {

        //console.log('obterDadosCEP: ' + JSON.stringify(res))

        if (tipo === 'billing') {
          if (res.length === 0) {
            this.billingForm.controls['cep'].setErrors({
              validaCEPDadosBilling: true
            });
          } else {
            this.billingForm.patchValue({
              logradouro: res.logradouro,
              bairro: res.bairro,
              cidade: res.cidade,
              uf: res.uf.trim()
            })
          }
        }

        if (tipo === 'shipping') {
          if (res.length === 0) {
            this.shippingForm.controls['cep'].setErrors({
              validaCEPDadosShipping: true
            });
          } else {
            this.shippingForm.patchValue({
              logradouro: res.logradouro,
              bairro: res.bairro,
              cidade: res.cidade,
              uf: res.uf.trim()
            })
          }
        }

        this.spinner.hide()

      })
    }
  }

  setShippingAddress() {
    this.buyerEqualsShipping = !this.buyerEqualsShipping
    this.shippingForm.reset()

    if (this.buyerEqualsShipping) this.applyData()
  }
}
