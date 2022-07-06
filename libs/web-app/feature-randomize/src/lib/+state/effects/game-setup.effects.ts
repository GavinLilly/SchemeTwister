import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LibTwister } from '@schemetwister/libtwister';
import { of } from 'rxjs';
import { catchError, map, repeat, switchMap } from 'rxjs/operators';

import { setGameSetsSuccess } from '../actions/game-sets.actions';
import {
  generateGameSetup,
  generateGameSetupFailure,
  generateGameSetupSuccess,
  resetDefinedMastermind,
  resetDefinedScheme,
  setDefinedMastermind,
  setDefinedScheme,
} from '../actions/game-setup.actions';
import {
  decrementNumPlayers,
  incrementNumPlayers,
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
import { selectNumPlayers } from '../selectors/num-players.selectors';

@Injectable()
export class GameSetupEffects {
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
        resetDefinedMastermind
      ),
      concatLatestFrom(() => [
        this._store.select(selectGameSetIds),
        this._store.select(selectNumPlayers),
        this._store.select(selectDefinedScheme),
        this._store.select(selectDefinedMastermind),
      ]),
      switchMap(
        async ([
          ,
          gameSetIds,
          numPlayers,
          definedScheme,
          definedMastermind,
        ]) => {
          const twister = LibTwister.withGameSets(gameSetIds);
          return await twister.getSetup(
            numPlayers,
            definedScheme,
            definedMastermind
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

  constructor(
    private _actions$: Actions,
    private _store: Store<{
      gameSets: IGameSetsState;
      numPlayers: INumPlayersState;
      gameSetup: IGameSetupState;
    }>
  ) {}
}
