import { TestBed } from '@angular/core/testing';

import { SchemeService } from './scheme.service';

describe('SchemeService', () => {
  let service: SchemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
