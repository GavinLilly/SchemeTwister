import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

import { GameSetsEffects } from './game-sets.effects';

describe('GameSetsEffects', () => {
  let actions$: Observable<any>;
  const initialState = { gameSetup: GameSetup.empty() };
  let effects: GameSetsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameSetsEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        CookieService,
      ],
    });

    effects = TestBed.inject(GameSetsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
