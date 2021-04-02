import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaixaMiniComponent } from './faixa-mini.component';

describe('FaixaMiniComponent', () => {
  let component: FaixaMiniComponent;
  let fixture: ComponentFixture<FaixaMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaixaMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaixaMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
