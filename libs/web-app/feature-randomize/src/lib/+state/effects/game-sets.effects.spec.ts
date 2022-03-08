import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GameSetsEffects } from './game-sets.effects';

describe('GameSetsEffects', () => {
  let actions$: Observable<any>;
  let effects: GameSetsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameSetsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(GameSetsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
