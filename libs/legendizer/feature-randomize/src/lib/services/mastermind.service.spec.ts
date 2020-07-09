import { TestBed } from '@angular/core/testing';

import { MastermindService } from './mastermind.service';

describe('MastermindService', () => {
  let service: MastermindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MastermindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
