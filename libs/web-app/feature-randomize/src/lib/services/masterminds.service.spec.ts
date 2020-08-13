import { TestBed } from '@angular/core/testing';

import { MastermindsService } from './masterminds.service';

describe('MastermindsService', () => {
  let service: MastermindsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MastermindsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
