import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSaleTwoComponent } from './tag-sale-two.component';

describe('TagSaleTwoComponent', () => {
  let component: TagSaleTwoComponent;
  let fixture: ComponentFixture<TagSaleTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagSaleTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSaleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
