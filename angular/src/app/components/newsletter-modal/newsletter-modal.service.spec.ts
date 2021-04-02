import { TestBed } from '@angular/core/testing';

import { NewsletterModalService } from './newsletter-modal.service';

describe('NewsletterModalService', () => {
  let service: NewsletterModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsletterModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
