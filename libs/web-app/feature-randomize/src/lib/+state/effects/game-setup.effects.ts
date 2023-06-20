import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LibTwister, LiteGameSetup } from '@schemetwister/libtwister';
import firebase from 'firebase/app';
import { of, from } from 'rxjs';
import {
  catchError,
  map,
  repeat,
  switchMap,
  debounceTime,
  mergeMap,
} from 'rxjs/operators';

import {
  IStoredGameSetup,
  TWIST_COUNT_NAME,
} from '../../storedGameSetup.interface';
import { setGameSetsSuccess } from '../actions/game-sets.actions';
import {
  generateGameSetup,
  generateGameSetupFailure,
  generateGameSetupSuccess,
  resetDefinedMastermind,
  resetDefinedScheme,
  saveGameSetupFailure,
  saveGameSetupSuccess,
  setDefinedMastermind,
  setDefinedScheme,
} from '../actions/game-setup.actions';
import {
  decrementNumPlayers,
  incrementNumPlayers,
  setAdvancedSolo,
  setNumPlayers,
} from '../actions/num-players.actions';
import { IGameSetsState } from '../reducers/game-sets.reducer';
import { IGameSetupState } from '../reducers/game-setup.reducer';
import { INumPlayersState } from '../reducers/num-players.reducer';
import { selectGameSetIds } from '../selectors/game-sets.selectors';
import {
  selectDefinedMastermind,
  selectDefinedScheme,
} from '../selectors/game-setup-scheme.selectors';
import {
  selectNumPlayers,
  selectIsAdvancedSolo,
} from '../selectors/num-players.selectors';

export const FIRESTORE_COLLECTION_TOKEN = 'FireStoreCollection';

@Injectable()
export class GameSetupEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store<{
      gameSets: IGameSetsState;
      numPlayers: INumPlayersState;
      gameSetup: IGameSetupState;
    }>,
    private _firestore: AngularFirestore,
    @Inject(FIRESTORE_COLLECTION_TOKEN) private _collectionName: string
  ) {}

  generateGameSetup$ = createEffect(() =>
    this._actions$.pipe(
      ofType(
        generateGameSetup,
        setNumPlayers,
        incrementNumPlayers,
        decrementNumPlayers,
        setGameSetsSuccess,
        setDefinedScheme,
        setDefinedMastermind,
        resetDefinedScheme,
        resetDefinedMastermind,
        setAdvancedSolo
      ),
      concatLatestFrom(() => [
        this._store.select(selectGameSetIds),
        this._store.select(selectNumPlayers),
        this._store.select(selectDefinedScheme),
        this._store.select(selectDefinedMastermind),
        this._store.select(selectIsAdvancedSolo),
      ]),
      switchMap(
        async ([
          ,
          gameSetIds,
          numPlayers,
          definedScheme,
          definedMastermind,
          isAdvancedSolo,
        ]) => {
          const twister = LibTwister.of(...gameSetIds);
          return twister.getSetup(
            numPlayers,
            definedScheme,
            definedMastermind,
            isAdvancedSolo
          );
        }
      ),
      map((setup) => generateGameSetupSuccess({ gameSetup: setup })),
      catchError((error) => {
        console.log(error);
        return of(generateGameSetupFailure(error));
      }),
      repeat()
    )
  );

  storeGameSetup$ = createEffect(() =>
    this._actions$.pipe(
      ofType(generateGameSetupSuccess),
      debounceTime(3000),
      map((action) => action.gameSetup),
      mergeMap((setup) =>
        this._firestore
          .doc<IStoredGameSetup>(
            `${this._collectionName}/${LiteGameSetup.calculateUid(
              setup.getLiteSetup()
            )}`
          )
          .get()
          .pipe(map((queryResult) => ({ queryResult, setup })))
      ),
      map(({ queryResult, setup }) => {
        if (queryResult.exists) {
          return from(
            queryResult.ref.update(
              TWIST_COUNT_NAME,
              firebase.firestore.FieldValue.increment(1)
            )
          );
        } else {
          const newSetup = {
            ...setup.getLiteSetup(),
            twistCount: 1,
          } as IStoredGameSetup;

          return from(queryResult.ref.set(newSetup));
        }
      }),
      map(() => saveGameSetupSuccess()),
      catchError((error) => {
        console.log(error);
        return of(saveGameSetupFailure(error));
      })
    )
  );
}
