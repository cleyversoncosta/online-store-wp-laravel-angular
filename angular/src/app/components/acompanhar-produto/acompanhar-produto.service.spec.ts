import { TestBed } from '@angular/core/testing';

import { AcompanharProdutoService } from './acompanhar-produto.service';

describe('AcompanharProdutoService', () => {
  let service: AcompanharProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcompanharProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
