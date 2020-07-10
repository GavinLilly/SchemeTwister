import { TestBed } from '@angular/core/testing';

import { SchemesService } from './schemes.service';

describe('SchemesService', () => {
  let service: SchemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
