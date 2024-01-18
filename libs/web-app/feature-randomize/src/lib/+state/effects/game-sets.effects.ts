import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LibTwister } from '@schemetwister/libtwister';
import { map, withLatestFrom } from 'rxjs/operators';

import {
  addGameSet,
  removeGameSet,
  setGameSets,
  setGameSetsFailure,
  setGameSetsSuccess,
} from '../actions/game-sets.actions';
import { IGameSetsState } from '../reducers/game-sets.reducer';

@Injectable()
export class GameSetsEffects {
  readonly validateSetGameSets$ = createEffect(() =>
    this._actions$.pipe(
      ofType(setGameSets),
      map((action) =>
        LibTwister.validateGameSetIds(action.gameSetIds)
          ? setGameSetsSuccess({ gameSetIds: action.gameSetIds })
          : setGameSetsFailure()
      )
    )
  );

  readonly validateAddGameSet$ = createEffect(() =>
    this._actions$.pipe(
      ofType(addGameSet),
      withLatestFrom(this._store.select((state) => state.gameSets.gameSetIds)),
      map(([action, gameSetIds]) => {
        const newGameSetIds: string[] = gameSetIds.concat(action.gameSetId);

        return LibTwister.validateGameSetIds(newGameSetIds)
          ? setGameSetsSuccess({ gameSetIds: newGameSetIds })
          : setGameSetsFailure();
      })
    )
  );

  readonly validateRemoveGameSet$ = createEffect(() =>
    this._actions$.pipe(
      ofType(removeGameSet),
      withLatestFrom(this._store.select((state) => state.gameSets.gameSetIds)),
      map(([action, gameSets]) => {
        const deleteIdx = gameSets.indexOf(action.gameSetId);

        const firstSection = gameSets.slice(0, deleteIdx);
        const secondSection = gameSets.slice(deleteIdx + 1);

        const newGameSetIds = [...firstSection, ...secondSection];

        return LibTwister.validateGameSetIds(newGameSetIds)
          ? setGameSetsSuccess({ gameSetIds: newGameSetIds })
          : setGameSetsFailure();
      })
    )
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<{
      gameSets: IGameSetsState;
    }>
  ) {}
}
