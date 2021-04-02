import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSaleDoisComponent } from './tag-sale-dois.component';

describe('TagSaleDoisComponent', () => {
  let component: TagSaleDoisComponent;
  let fixture: ComponentFixture<TagSaleDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagSaleDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSaleDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
