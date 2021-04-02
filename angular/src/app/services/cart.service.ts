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
  ClienteService
} from './cliente.service';
import {
  LojaSettingsService
} from './loja-settings.service';
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

  carrinho: any = []

  private itemsCarrinho: BehaviorSubject < any > ;
  private valorDoPedido: BehaviorSubject < any > ;

  constructor(
    private localStorage: LocalStorage,
    private http: HttpClient,
    private settingsService: SettingsService,
    private clienteService: ClienteService,
    private router: Router,
    private lojaSettingsService: LojaSettingsService,
    private spinner: NgxSpinnerService
  ) {

    this.itemsCarrinho = new BehaviorSubject < any > (null)
    this.valorDoPedido = new BehaviorSubject < any > (null)

  }


  adicionarAoCarrinho(produto) {
    return new Promise((resolve, reject) => {
      this.localStorage.getItem('carrinho').subscribe((produtos: any[]) => {

        if (produtos === null) produtos = []

        produtos.push(produto)
        this.localStorage.setItem('carrinho', produtos).subscribe(() => {
          
          this.itemsCarrinho.next(produtos)

          this.atualizaValorDoPedido(produtos)
                    
          resolve(produtos)
        })
      })
    })
  }

  atualizaValorDoPedido(produtos) {
    let valorDoPedido = 0
    produtos.forEach(item => {
      valorDoPedido += parseFloat(item.price)
    })
    this.valorDoPedido.next(valorDoPedido)
  }

  obterProdutosDoCarrinho(): Observable < any > {
    this.localStorage.getItem('carrinho').subscribe(produtos => {
      this.itemsCarrinho.next(produtos)
    })
    return this.itemsCarrinho.asObservable();
  }

  obterValorDoPedido(): Observable < any > {
    this.localStorage.getItem('carrinho').subscribe((produtos: any[]) => {
      let valorDoPedido = 0
      if (produtos !== null) {
        produtos.forEach(item => {
          valorDoPedido += parseFloat(item.price)
        })
      }

      this.valorDoPedido.next(valorDoPedido)
    })
    return this.valorDoPedido.asObservable();
  }


  obterQuantidadeDeItemsNoCarrinho(): Observable < any > {
    return this.itemsCarrinho.asObservable();
  }

  excluirProdutoDoCarrinho(index) {
    return new Promise((resolve, reject) => {
      this.localStorage.getItem('carrinho').subscribe((produtos: any[]) => {
        produtos.splice(index, 1)

        this.itemsCarrinho.next(produtos)

        let valorDoPedido = 0
        produtos.forEach(item => {
          valorDoPedido += parseFloat(item.price)
        })
        this.valorDoPedido.next(valorDoPedido)        

        this.localStorage.setItem('carrinho', produtos).subscribe(() => {
          resolve()
        })
      })
    })
  }

  esvaziarCarrinho() {
    return new Promise((resolve, reject) => {
      this.localStorage.clear().subscribe(res => {
        
        this.valorDoPedido.next(0)

        this.itemsCarrinho.next([])
        resolve()
      })        
    })
  }
}
