import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSaleComponent } from './tag-sale.component';

describe('TagSaleComponent', () => {
  let component: TagSaleComponent;
  let fixture: ComponentFixture<TagSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
