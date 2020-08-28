import { TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';

import { GameSetupStore } from './game-setup-store';

jest.genMockFromModule('ngx-cookie-service');

describe('GameSetupStore', () => {
  let store: GameSetupStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameSetupStore,
        CookieService
      ]
    })
    store = TestBed.inject(GameSetupStore)
  })


  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });
});
