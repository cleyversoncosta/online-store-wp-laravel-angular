import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable,
  EventEmitter
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
  StoreSettingsService
} from './store-settings.service';
import {
  SettingsService
} from './settings.service';
import {
  Observable,
  BehaviorSubject
} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any = []

  private cartItems: BehaviorSubject<any>;
  private orderTotals: BehaviorSubject<any>;

  constructor(
    private localStorage: LocalStorage,
    private http: HttpClient,
    private settingsService: SettingsService,
    private clientService: ClientService,
    private router: Router,
    private storeSettingsService: StoreSettingsService,
    private spinner: NgxSpinnerService
  ) {

    this.cartItems = new BehaviorSubject<any>(null)
    this.orderTotals = new BehaviorSubject<any>(null)

  }


  addToCart(product) {
    return new Promise((resolve, reject) => {
      this.localStorage.getItem('cart').subscribe((products: any[]) => {

        if (products === null) products = []

        products.push(product)
        this.localStorage.setItem('cart', products).subscribe(() => {

          this.cartItems.next(products)

          this.updateOrderTotals(products)

          resolve(products)
        })
      })
    })
  }

  updateOrderTotals(products) {
    let orderTotals = 0
    products.forEach(item => {
      orderTotals += parseFloat(item.price)
    })
    this.orderTotals.next(orderTotals)
  }

  getCartProducts(): Observable<any> {
    this.localStorage.getItem('cart').subscribe(products => {
      this.cartItems.next(products)
    })
    return this.cartItems.asObservable();
  }

  getOrderTotals(): Observable<any> {
    this.localStorage.getItem('cart').subscribe((products: any[]) => {
      let orderTotals = 0
      if (products !== null) {
        products.forEach(item => {
          orderTotals += parseFloat(item.price)
        })
      }

      this.orderTotals.next(orderTotals)
    })
    return this.orderTotals.asObservable();
  }


  getAmountCartItems(): Observable<any> {
    return this.cartItems.asObservable();
  }

  deleteFromCart(index) {
    return new Promise((resolve, reject) => {
      this.localStorage.getItem('cart').subscribe((products: any[]) => {
        products.splice(index, 1)

        this.cartItems.next(products)

        let orderTotals = 0
        products.forEach(item => {
          orderTotals += parseFloat(item.price)
        })
        this.orderTotals.next(orderTotals)

        this.localStorage.setItem('cart', products).subscribe(() => {
          resolve('')
        })
      })
    })
  }

  emptyCart() {
    return new Promise((resolve, reject) => {
      this.localStorage.clear().subscribe(res => {

        this.orderTotals.next(0)

        this.cartItems.next([])
        resolve('')
      })
    })
  }
}
