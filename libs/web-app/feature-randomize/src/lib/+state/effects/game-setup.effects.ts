import { Injectable } from '@angular/core';
import { increment, Timestamp } from '@angular/fire/firestore';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LibTwister, LiteGameSetup } from '@schemetwister/libtwister';
import {
  IStoredGameSetup,
  StoredSetupsService,
  TWIST_COUNT_NAME,
} from '@schemetwister/web-app/shared';
import { of, from } from 'rxjs';
import {
  catchError,
  map,
  repeat,
  debounceTime,
  mergeMap,
} from 'rxjs/operators';

import { setGameSetsSuccess } from '../actions/game-sets.actions';
import * as fromGameSetupActions from '../actions/game-setup.actions';
import * as fromNumPlayersActions from '../actions/num-players.actions';
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

@Injectable()
export class GameSetupEffects {
  private static _storeSendWaitSeconds = 5;

  constructor(
    private _actions$: Actions,
    private _store: Store<{
      gameSets: IGameSetsState;
      numPlayers: INumPlayersState;
      gameSetup: IGameSetupState;
    }>,
    private _storedSetupsService: StoredSetupsService
  ) {}

  readonly generateGameSetup$ = createEffect(() =>
    this._actions$.pipe(
      ofType(
        fromGameSetupActions.generateGameSetup,
        fromGameSetupActions.setDefinedScheme,
        fromGameSetupActions.setDefinedMastermind,
        fromGameSetupActions.resetDefinedScheme,
        fromGameSetupActions.resetDefinedMastermind,
        fromNumPlayersActions.setNumPlayers,
        fromNumPlayersActions.incrementNumPlayers,
        fromNumPlayersActions.decrementNumPlayers,
        fromNumPlayersActions.setAdvancedSolo,
        setGameSetsSuccess
      ),
      concatLatestFrom(() => [
        this._store.select(selectGameSetIds),
        this._store.select(selectNumPlayers),
        this._store.select(selectDefinedScheme),
        this._store.select(selectDefinedMastermind),
        this._store.select(selectIsAdvancedSolo),
      ]),
      map(
        ([
          ,
          gameSetIds,
          numPlayers,
          definedScheme,
          definedMastermind,
          isAdvancedSolo,
        ]) =>
          LibTwister.of(...gameSetIds).getSetup(
            numPlayers,
            definedScheme,
            definedMastermind,
            isAdvancedSolo
          )
      ),
      map((setup) =>
        fromGameSetupActions.generateGameSetupSuccess({ gameSetup: setup })
      ),
      catchError((error) => {
        console.error('Error while generating setup', error);
        return of(fromGameSetupActions.generateGameSetupFailure(error));
      }),
      repeat()
    )
  );

  readonly storeGameSetup$ = createEffect(() =>
    this._actions$.pipe(
      ofType(fromGameSetupActions.generateGameSetupSuccess),
      debounceTime(GameSetupEffects._storeSendWaitSeconds * 1000),
      map((action) => action.gameSetup),
      mergeMap((setup) => {
        const uid = LiteGameSetup.of(setup).calculateUid();
        return this._storedSetupsService
          .getSetupDocument(uid)
          .pipe(map((queryResult) => ({ queryResult, setup })));
      }),
      map(({ queryResult, setup }) => {
        if (queryResult.exists) {
          return from(queryResult.ref.update(TWIST_COUNT_NAME, increment(1)));
        } else {
          const newSetup = {
            ...LiteGameSetup.of(setup),
            twistCount: 1,
            created: Timestamp.now(),
            updated: Timestamp.now(),
            playCount: 0,
            winCount: 0,
          } as IStoredGameSetup;

          return from(queryResult.ref.set(newSetup));
        }
      }),
      map(() => fromGameSetupActions.saveGameSetupSuccess()),
      catchError((error) => {
        console.error('Error while sending setup to Firestore', error);
        return of(fromGameSetupActions.saveGameSetupFailure(error));
      })
    )
  );
}
