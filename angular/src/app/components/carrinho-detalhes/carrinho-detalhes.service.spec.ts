import { TestBed } from '@angular/core/testing';

import { CarrinhoDetalhesService } from './carrinho-detalhes.service';

describe('CarrinhoDetalhesService', () => {
  let service: CarrinhoDetalhesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoDetalhesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
