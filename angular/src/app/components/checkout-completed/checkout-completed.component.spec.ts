import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCompleted } from './checkout-completed.component';

describe('CheckoutCompleted', () => {
  let component: CheckoutCompleted;
  let fixture: ComponentFixture<CheckoutCompleted>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCompleted ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCompleted);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
