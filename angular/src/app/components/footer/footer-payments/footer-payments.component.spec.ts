import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPaymentsComponent } from './footer-payments.component';

describe('FooterPaymentsComponent', () => {
  let component: FooterPaymentsComponent;
  let fixture: ComponentFixture<FooterPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
