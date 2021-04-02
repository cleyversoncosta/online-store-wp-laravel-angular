import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraConcluidaComponent } from './compra-concluida.component';

describe('CompraConcluidaComponent', () => {
  let component: CompraConcluidaComponent;
  let fixture: ComponentFixture<CompraConcluidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraConcluidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraConcluidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
