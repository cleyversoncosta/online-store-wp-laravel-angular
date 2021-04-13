import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagNewTwoComponent } from './tag-new-two.component';

describe('TagNewTwoComponent', () => {
  let component: TagNewTwoComponent;
  let fixture: ComponentFixture<TagNewTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagNewTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagNewTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
