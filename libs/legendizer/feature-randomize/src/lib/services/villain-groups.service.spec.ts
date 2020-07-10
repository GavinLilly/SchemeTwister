import { TestBed } from '@angular/core/testing';

import { VillainGroupsService } from './villain-groups.service';

describe('VillainGroupsService', () => {
  let service: VillainGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillainGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
