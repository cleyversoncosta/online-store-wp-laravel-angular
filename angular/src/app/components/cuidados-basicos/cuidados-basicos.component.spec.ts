import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadosBasicosComponent } from './cuidados-basicos.component';

describe('CuidadosBasicosComponent', () => {
  let component: CuidadosBasicosComponent;
  let fixture: ComponentFixture<CuidadosBasicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidadosBasicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
