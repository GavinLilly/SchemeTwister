import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LibTwister } from '@schemetwister/libtwister';
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
      map((gameSetIds) => this._mapIdsToResult(gameSetIds))
    )
  );

  readonly validateAddGameSet$ = createEffect(() =>
    this._actions$.pipe(
      ofType(gameSetSelectionActions.addGameSet),
      withLatestFrom(this._store.select((state) => state.gameSets.gameSetIds)),
      map(([action, gameSetIds]) => gameSetIds.concat(action.gameSetId)),
      map((gameSetIds) => this._mapIdsToResult(gameSetIds))
    )
  );

  readonly validateRemoveGameSet$ = createEffect(() =>
    this._actions$.pipe(
      ofType(gameSetSelectionActions.removeGameSet),
      withLatestFrom(this._store.select((state) => state.gameSets.gameSetIds)),
      map(([action, gameSets]) => {
        const deleteIdx = gameSets.indexOf(action.gameSetId);

        const firstSection = gameSets.slice(0, deleteIdx);
        const secondSection = gameSets.slice(deleteIdx + 1);

        return [...firstSection, ...secondSection];
      }),
      map((gameSetIds) => this._mapIdsToResult(gameSetIds))
    )
  );

  private readonly _mapIdsToResult = (gameSetIds: string[]) =>
    LibTwister.validateGameSetIds(gameSetIds)
      ? gameSetCheckerActions.setGameSetsSuccess({
          gameSetIds,
        })
      : gameSetCheckerActions.setGameSetsFailure();

  constructor(
    private _actions$: Actions,
    private _store: Store<{
      gameSets: IGameSetsState;
    }>
  ) {}
}
