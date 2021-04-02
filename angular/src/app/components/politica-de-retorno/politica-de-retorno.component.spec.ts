import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaDeRetornoComponent } from './politica-de-retorno.component';

describe('PoliticaDeRetornoComponent', () => {
  let component: PoliticaDeRetornoComponent;
  let fixture: ComponentFixture<PoliticaDeRetornoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaDeRetornoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaDeRetornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
