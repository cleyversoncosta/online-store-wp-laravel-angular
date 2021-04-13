import { NgbootstrapService } from './ngbootstrap.service';
import { OrdersService } from './orders.service';
import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  LocalStorage
} from '@ngx-pwa/local-storage';
import {
  NgxSpinnerService
} from 'ngx-spinner';
import {
  ClientService
} from './client.service';
import {
  FacebookService
} from './facebook.service';
import {
  StoreSettingsService
} from './store-settings.service';
import {
  SettingsService
} from './settings.service';

declare const openPagarMeCheckout: any


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {


  isFBCompleteRegistrationSet: boolean = false

  constructor(
    private localStorage: LocalStorage,
    private http: HttpClient,
    private settingsService: SettingsService,
    private clientService: ClientService,
    private router: Router,
    private storeSettingsService: StoreSettingsService,
    private spinner: NgxSpinnerService,
    private facebookService: FacebookService,
    private ordersService: OrdersService,
    private ngbootstrapService: NgbootstrapService
  ) {}


  addItemsPagarmeCheckout(cartProducts) {
    return new Promise((resolve, reject) => {

      let checkoutItems: any[] = []

      cartProducts.forEach(product => {
        let item = {
          id: product.id,
          title: product.name,
          unit_price: product.price * 100,
          quantity: 1,
          tangible: true
        }

        checkoutItems.push(item)
      })

      resolve(checkoutItems)
    })
  }

  onSubmitModalPagarme(param) {

    return new Promise((resolve, reject) => {

      //console.log(param)

      this.spinner.show()

      this.addItemsPagarmeCheckout(param.lineItems).then((lineItems) => {

        //console.log(lineItems)

        this.clientService.addCliente(param).subscribe((client: any) => {

          if (client.info === 'new') {
            this.ngbootstrapService.show('Usuário cadastrado com sucesso', { classname: 'bg-success text-light', delay: 3000 });
          } else {
            this.ngbootstrapService.show('Você já possui uma conta na NOME-DA-LOJA', { classname: 'bg-light text-dark', delay: 3000 });
          }

          //console.log(client)

          if (this.isFBCompleteRegistrationSet === false) {
            this.facebookService.fbCompleteRegistration()

            this.isFBCompleteRegistrationSet = true
          }

          //console.log('addCliente: ' + data)
          //let clientID = data

          param.customerID = client.data.id
          param.lineItems = lineItems

          //console.log(param)

          this.ordersService.addPedido(param).subscribe(orderID => {

            this.ngbootstrapService.show('O pedido '+orderID+' foi gerado com sucesso', { classname: 'bg-success text-light', delay: 3000 });

            param.orderID = orderID

            //console.log('orderID: '+JSON.stringify(res))

            //let orderID = res

            setTimeout(() => {
              this.spinner.hide()
            }, 2000)

            openPagarMeCheckout(this.storeSettingsService.getPagarmeEncryptionKey(), param).then(tokenCapturaPgto => {

              this.spinner.show()

              //console.log(tokenCapturaPgto)

              //console.log('openPagarMeCheckout: '+JSON.stringify(res))

              //console.log('dataParam: '+JSON.stringify(dataParam))

              this.clientService.popupModal.next('close')

              this.ordersService.capturarPgto({
                token: tokenCapturaPgto,
                valor: param.totalsToPay * 100
              }).subscribe((captura: any) => {

                if (captura.status === 'success') {

                  this.ordersService.setOrderAsPaid(orderID).subscribe(res => {

                    //console.log('addPedido: '+JSON.stringify(res))
                    this.spinner.hide()
                    resolve('success')
                  })
                }
              })

            })
          })
        })
      })
    })
  }


  prepareDatatoSubmit(param: any) {

    return new Promise((resolve, reject) => {

      let paramBilling = param.billing
      let paramShipping = param.shipping

      let dia = paramBilling.data_nascimento.substring(0, 2)
      let mes = paramBilling.data_nascimento.substring(2, 4)
      let ano = paramBilling.data_nascimento.substring(4, 8)

      let birthdate_ddmmyyyy = `${dia}/${mes}/${ano}`
      let birthdate_yyyymmdd = `${ano}-${mes}-${dia}`

      let billing = {
        billing_address_1: paramBilling.logradouro,
        billing_address_2: paramBilling.complemento,
        billing_birthdate: birthdate_ddmmyyyy,
        billing_cellphone: paramBilling.telefone,
        billing_city: paramBilling.cidade,
        billing_country: 'BR',
        billing_cpf: paramBilling.cpf,
        billing_email: paramBilling.email,
        billing_first_name: paramBilling.nome,
        billing_last_name: '',
        billing_neighborhood: paramBilling.bairro,
        billing_number: paramBilling.logradouro_numero,
        billing_phone: paramBilling.telefone,
        billing_postcode: paramBilling.cep,
        billing_rg: '',
        billing_sex: '',
        billing_state: paramBilling.uf,
      }

      let shipping = {
        shipping_address_1: paramShipping.logradouro,
        shipping_address_2: paramShipping.complemento,
        shipping_number: paramShipping.logradouro_numero,
        shipping_neighborhood: paramShipping.bairro,
        shipping_city: paramShipping.cidade,
        shipping_country: 'BR',
        shipping_first_name: paramShipping.nome,
        shipping_postcode: paramShipping.cep,
        shipping_state: paramShipping.uf,
      }

      let customer_pagarme = {
        external_id: '',
        type: 'individual',
        country: 'BR',

        name: paramBilling.nome,
        email: paramBilling.email,
        documents: [{
          type: 'cpf',
          number: paramBilling.cpf,
        }, ],
        phone_numbers: ['+55' + paramBilling.telefone],
        birthday: birthdate_yyyymmdd,
      }

      let billing_pagarme = {
        name: paramBilling.nome,
        address: {
          country: 'BR',
          state: paramBilling.uf,
          city: paramBilling.cidade,
          neighborhood: paramBilling.bairro,
          street: paramBilling.logradouro,
          street_number: paramBilling.logradouro_numero + ', ' + paramBilling.complemento,
          zipcode: paramBilling.cep
        }
      }

      let shipping_pagarme = {
        name: paramShipping.nome,
        fee: 0,
        address: {
          country: 'BR',
          state: paramShipping.uf,
          city: paramShipping.cidade,
          neighborhood: paramShipping.bairro,
          street: paramShipping.logradouro,
          street_number: paramShipping.logradouro_numero + ', ' + paramShipping.complemento,
          zipcode: paramShipping.cep
        }
      }


      resolve({
        billing: billing,
        shipping: shipping,

        customer_pagarme: customer_pagarme,
        billing_pagarme: billing_pagarme,
        shipping_pagarme: shipping_pagarme
      })
    })

  }
}
