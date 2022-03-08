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
} from '../actions/game-setup.actions';
import {
  decrementNumPlayers,
  incrementNumPlayers,
  setNumPlayers,
} from '../actions/num-players.actions';
import { IGameSetsState } from '../reducers/game-sets.reducer';
import { INumPlayersState } from '../reducers/num-players.reducer';

@Injectable()
export class GameSetupEffects {
  generateGameSetup$ = createEffect(() =>
    this._actions$.pipe(
      ofType(
        generateGameSetup,
        setNumPlayers,
        incrementNumPlayers,
        decrementNumPlayers,
        setGameSetsSuccess
      ),
      concatLatestFrom(() => [
        this._store.select((state) => state.gameSets.gameSetIds),
        this._store.select((state) => state.numPlayers.numPlayers),
      ]),
      switchMap(async ([, gameSets, numPlayers]) => {
        const twister = new LibTwister(gameSets);
        return await twister.getSetup(numPlayers);
      }),
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
    }>
  ) {}
}
