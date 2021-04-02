import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagLancamentoComponent } from './tag-lancamento.component';

describe('TagLancamentoComponent', () => {
  let component: TagLancamentoComponent;
  let fixture: ComponentFixture<TagLancamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagLancamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
