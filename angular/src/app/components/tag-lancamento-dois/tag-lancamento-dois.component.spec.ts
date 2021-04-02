import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagLancamentoDoisComponent } from './tag-lancamento-dois.component';

describe('TagLancamentoDoisComponent', () => {
  let component: TagLancamentoDoisComponent;
  let fixture: ComponentFixture<TagLancamentoDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagLancamentoDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagLancamentoDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
