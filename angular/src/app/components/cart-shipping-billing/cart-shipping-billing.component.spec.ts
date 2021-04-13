import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartShippingBillingComponent } from './cart-shipping-billing.component';

describe('CartShippingBillingComponent', () => {
  let component: CartShippingBillingComponent;
  let fixture: ComponentFixture<CartShippingBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartShippingBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartShippingBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
