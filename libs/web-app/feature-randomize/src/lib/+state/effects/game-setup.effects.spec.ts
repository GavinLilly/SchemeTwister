import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GameSetupEffects } from './game-setup.effects';

describe('GameSetupEffects', () => {
  let actions$: Observable<any>;
  let effects: GameSetupEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameSetupEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(GameSetupEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
