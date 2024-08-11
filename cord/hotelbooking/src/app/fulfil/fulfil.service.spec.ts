import { TestBed } from '@angular/core/testing';

import { FulfilService } from './fulfil.service';

describe('FulfilService', () => {
  let service: FulfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FulfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
