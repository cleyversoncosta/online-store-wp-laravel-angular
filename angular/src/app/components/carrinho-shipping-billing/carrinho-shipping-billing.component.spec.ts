import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoShippingBillingComponent } from './carrinho-shipping-billing.component';

describe('CarrinhoShippingBillingComponent', () => {
  let component: CarrinhoShippingBillingComponent;
  let fixture: ComponentFixture<CarrinhoShippingBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrinhoShippingBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoShippingBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
