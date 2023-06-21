import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';
import { Observable } from 'rxjs';

import {
  FIRESTORE_COLLECTION_TOKEN,
  GameSetupEffects,
} from './game-setup.effects';

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
        { provide: FIRESTORE_COLLECTION_TOKEN, useValue: 'setups-test' },
        { provide: AngularFirestore, useValue: AngularFirestore },
      ],
    });

    effects = TestBed.inject(GameSetupEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
