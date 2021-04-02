import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCarrinhoComponent } from './header-carrinho.component';

describe('HeaderCarrinhoComponent', () => {
  let component: HeaderCarrinhoComponent;
  let fixture: ComponentFixture<HeaderCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
