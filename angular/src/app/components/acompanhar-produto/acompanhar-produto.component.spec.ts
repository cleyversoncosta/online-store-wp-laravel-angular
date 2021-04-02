import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanharProdutoComponent } from './acompanhar-produto.component';

describe('AcompanharProdutoComponent', () => {
  let component: AcompanharProdutoComponent;
  let fixture: ComponentFixture<AcompanharProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanharProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanharProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
