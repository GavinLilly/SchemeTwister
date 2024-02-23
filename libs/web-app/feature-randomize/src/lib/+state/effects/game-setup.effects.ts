import { Injectable } from '@angular/core';
import { increment, Timestamp } from '@angular/fire/firestore';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LibTwister, LiteGameSetup } from '@schemetwister/libtwister';
import { marvelSeries } from '@schemetwister/schemetwister-series-marvel';
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

import { gameSetCheckerActions } from '../actions/game-sets.actions';
import {
  randomizePageActions,
  gameSetupGeneratorActions,
  saveGameSetupActions,
} from '../actions/game-setup.actions';
import { numPlayersActions } from '../actions/num-players.actions';
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

  readonly generateGameSetup$ = createEffect(() =>
    this._actions$.pipe(
      ofType(
        randomizePageActions.generateGameSetup,
        randomizePageActions.setDefinedScheme,
        randomizePageActions.setDefinedMastermind,
        randomizePageActions.resetDefinedScheme,
        randomizePageActions.resetDefinedMastermind,
        numPlayersActions.setNumberOfPlayers,
        numPlayersActions.incrementNumberOfPlayers,
        numPlayersActions.decrementNumberOfPlayers,
        numPlayersActions.setAdvancedSolo,
        gameSetCheckerActions.setGameSetsSuccess
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
        ]) => {
          const libTwister = new LibTwister([marvelSeries]);
          libTwister.selectedGameSets =
            libTwister.gameSetIdsToGameSets(gameSetIds);
          return libTwister.getSetup(
            numPlayers,
            definedScheme,
            definedMastermind,
            isAdvancedSolo
          );
        }
      ),
      map((setup) => gameSetupGeneratorActions.success({ gameSetup: setup })),
      catchError((error) => {
        console.error('Error while generating setup', error);
        return of(gameSetupGeneratorActions.failure(error));
      }),
      repeat()
    )
  );

  readonly storeGameSetup$ = createEffect(() =>
    this._actions$.pipe(
      ofType(gameSetupGeneratorActions.success),
      debounceTime(GameSetupEffects._storeSendWaitSeconds * 1000),
      map((action) => action.gameSetup),
      map((gameSetup) => ({
        setup: gameSetup,
        uid: LiteGameSetup.of(gameSetup).calculateUid(),
      })),
      mergeMap(({ setup, uid }) =>
        this._storedSetupsService
          .getSetupDocument(uid)
          .pipe(map((queryResult) => ({ queryResult, setup })))
      ),
      mergeMap(({ queryResult, setup }) => {
        if (queryResult.exists) {
          return from(queryResult.ref.update(TWIST_COUNT_NAME, increment(1)));
        } else {
          const newSetup: IStoredGameSetup = {
            ...LiteGameSetup.of(setup),
            twistCount: 1,
            created: Timestamp.now(),
            updated: Timestamp.now(),
            playCount: 0,
            winCount: 0,
          };

          return from(queryResult.ref.set(newSetup));
        }
      }),
      map(() => saveGameSetupActions.success()),
      catchError((error) => {
        console.error('Error while sending setup to Firestore', error);
        return of(saveGameSetupActions.failure(error));
      })
    )
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<{
      gameSets: IGameSetsState;
      numPlayers: INumPlayersState;
      gameSetup: IGameSetupState;
    }>,
    private _storedSetupsService: StoredSetupsService
  ) {}
}
