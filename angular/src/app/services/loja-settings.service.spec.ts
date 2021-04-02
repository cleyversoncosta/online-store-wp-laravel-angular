import { TestBed } from '@angular/core/testing';

import { LojaSettingsService } from './loja-settings.service';

describe('LojaSettingsService', () => {
  let service: LojaSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LojaSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
