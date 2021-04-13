import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterFormModalComponent } from './newsletter-form-modal.component';

describe('NewsletterFormModalComponent', () => {
  let component: NewsletterFormModalComponent;
  let fixture: ComponentFixture<NewsletterFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
