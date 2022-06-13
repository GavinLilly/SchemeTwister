import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';
import { Observable } from 'rxjs';

import { GameSetupEffects } from './game-setup.effects';

describe('GameSetupEffects', () => {
  let actions$: Observable<any>;
  const initialState = { gameSetup: GameSetup.empty() };
  let effects: GameSetupEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameSetupEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
      ],
    });

    effects = TestBed.inject(GameSetupEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
