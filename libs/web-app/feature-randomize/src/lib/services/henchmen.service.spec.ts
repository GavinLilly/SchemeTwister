import { TestBed } from '@angular/core/testing';

import { HenchmenService } from './henchmen.service';

describe('HenchmenService', () => {
  let service: HenchmenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HenchmenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
