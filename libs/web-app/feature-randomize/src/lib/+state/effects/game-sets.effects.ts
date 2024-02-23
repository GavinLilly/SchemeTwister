import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LibTwister } from '@schemetwister/libtwister';
import { marvelSeries } from '@schemetwister/schemetwister-series-marvel';
import { map, withLatestFrom } from 'rxjs/operators';

import {
  gameSetSelectionActions,
  gameSetCheckerActions,
} from '../actions/game-sets.actions';
import { IGameSetsState } from '../reducers/game-sets.reducer';

@Injectable()
export class GameSetsEffects {
  readonly validateSetGameSets$ = createEffect(() =>
    this._actions$.pipe(
      ofType(gameSetSelectionActions.setGameSets),
      map((action) => action.gameSetIds),
      map((gameSetIds) => GameSetsEffects._mapIdsToResult(gameSetIds))
    )
  );

  readonly validateAddGameSet$ = createEffect(() =>
    this._actions$.pipe(
      ofType(gameSetSelectionActions.addGameSet),
      withLatestFrom(this._store.select((state) => state.gameSets.gameSetIds)),
      map(([action, gameSetIds]) => gameSetIds.concat(action.gameSetId)),
      map((gameSetIds) => GameSetsEffects._mapIdsToResult(gameSetIds))
    )
  );

  readonly validateRemoveGameSet$ = createEffect(() =>
    this._actions$.pipe(
      ofType(gameSetSelectionActions.removeGameSet),
      withLatestFrom(this._store.select((state) => state.gameSets.gameSetIds)),
      map(([action, gameSetIds]) =>
        GameSetsEffects._removeGameSet(gameSetIds, action.gameSetId)
      ),
      map((gameSetIds) => GameSetsEffects._mapIdsToResult(gameSetIds))
    )
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<{
      gameSets: IGameSetsState;
    }>
  ) {}

  private static _removeGameSet(
    gameSetIds: string[],
    gameSetIdToRemove: string
  ): string[] {
    const deleteIdx = gameSetIds.indexOf(gameSetIdToRemove);

    const firstSection = gameSetIds.slice(0, deleteIdx);
    const secondSection = gameSetIds.slice(deleteIdx + 1);

    return [...firstSection, ...secondSection];
  }

  private static readonly _mapIdsToResult = (gameSetIds: string[]) => {
    const libTwister = new LibTwister([marvelSeries]);
    return libTwister.validateGameSetIds(gameSetIds)
      ? gameSetCheckerActions.setGameSetsSuccess({
          gameSetIds,
        })
      : gameSetCheckerActions.setGameSetsFailure();
  };
}
