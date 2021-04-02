import { NewsletterFormService } from './../../services/newsletter-form.service';
import { TestBed } from '@angular/core/testing';

describe('NewsletterFormService', () => {
  let service: NewsletterFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsletterFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
