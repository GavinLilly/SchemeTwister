import { TestBed } from '@angular/core/testing';

import { GameSetupStoreService } from './game-setup-store.service';

describe('GameSetupStoreService', () => {
  let service: GameSetupStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameSetupStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
