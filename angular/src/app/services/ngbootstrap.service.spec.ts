import { TestBed } from '@angular/core/testing';

import { NgbootstrapService } from './ngbootstrap.service';

describe('NgbootstrapService', () => {
  let service: NgbootstrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbootstrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
