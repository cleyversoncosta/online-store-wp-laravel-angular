import { TestBed } from '@angular/core/testing';

import { HeaderCarouselService } from './header-carousel.service';

describe('HeaderCarouselService', () => {
  let service: HeaderCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
