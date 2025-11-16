import { Injectable, inject } from '@angular/core';
import { Actions, OnInitEffects, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { LibTwister } from '@schemetwister/libtwister';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { map, withLatestFrom } from 'rxjs/operators';

import {
  gameSetSelectionActions,
  gameSetCheckerActions,
  seriesSelectionActions,
} from '../actions/game-sets.actions';
import { IGameSetsState } from '../reducers/game-sets.reducer';
import {
  selectGameSetIds,
  selectLibTwister,
} from '../selectors/game-sets.selectors';

@Injectable()
export class GameSetsEffects implements OnInitEffects {
  private readonly _actions$ = inject(Actions);
  private readonly _store = inject<
    Store<{
      gameSets: IGameSetsState;
    }>
  >(Store);
  private readonly _seriesRegister = inject(SERIES_REGISTER_TOKEN);

  readonly validateSetGameSets$ = createEffect(() =>
    this._actions$.pipe(
      ofType(gameSetSelectionActions.setGameSets),
      map((action) => action.gameSetIds),
      withLatestFrom(
        this._store.select(selectLibTwister(this._seriesRegister))
      ),
      map(([gameSetIds, libTwister]) =>
        GameSetsEffects._mapIdsToResult(libTwister, gameSetIds)
      )
    )
  );

  readonly validateAddGameSet$ = createEffect(() =>
    this._actions$.pipe(
      ofType(gameSetSelectionActions.addGameSet),
      withLatestFrom(this._store.select((state) => state.gameSets.gameSetIds)),
      map(([action, gameSetIds]) => gameSetIds.concat(action.gameSetId)),
      withLatestFrom(
        this._store.select(selectLibTwister(this._seriesRegister))
      ),
      map(([gameSetIds, libTwister]) =>
        GameSetsEffects._mapIdsToResult(libTwister, gameSetIds)
      )
    )
  );

  readonly validateRemoveGameSet$ = createEffect(() =>
    this._actions$.pipe(
      ofType(gameSetSelectionActions.removeGameSet),
      withLatestFrom(this._store.select((state) => state.gameSets.gameSetIds)),
      map(([action, gameSetIds]) =>
        GameSetsEffects._removeGameSet(gameSetIds, action.gameSetId)
      ),
      withLatestFrom(
        this._store.select(selectLibTwister(this._seriesRegister))
      ),
      map(([gameSetIds, libTwister]) =>
        GameSetsEffects._mapIdsToResult(libTwister, gameSetIds)
      )
    )
  );

  readonly setAllGameSets$ = createEffect(() =>
    this._actions$.pipe(
      ofType(seriesSelectionActions.setSeries),
      withLatestFrom(this._store.select(selectGameSetIds)),
      map(([action, gameSetIds]) => {
        const allGameSets = this._seriesRegister
          .filter((series) => action.seriesIds.includes(series.seriesMeta.id))
          .flatMap((series) => series.gameSets);

        return gameSetIds.length === 0
          ? allGameSets
          : allGameSets.filter((gameSet) => gameSetIds.includes(gameSet.id));
      }),
      map((gameSets) => gameSets.map((gameSet) => gameSet.id)),
      map((gameSetIds) =>
        gameSetCheckerActions.setGameSetsSuccess({ gameSetIds })
      )
    )
  );

  ngrxOnInitEffects(): Action {
    const seriesIds = this._seriesRegister.map(
      (series) => series.seriesMeta.id
    );
    return seriesSelectionActions.setSeries({ seriesIds });
  }

  private static _removeGameSet(
    gameSetIds: string[],
    gameSetIdToRemove: string
  ): string[] {
    const deleteIdx = gameSetIds.indexOf(gameSetIdToRemove);

    const firstSection = gameSetIds.slice(0, deleteIdx);
    const secondSection = gameSetIds.slice(deleteIdx + 1);

    return [...firstSection, ...secondSection];
  }

  private static readonly _mapIdsToResult = (
    libTwister: LibTwister,
    gameSetIds: string[]
  ) =>
    libTwister.validateGameSetIds(gameSetIds)
      ? gameSetCheckerActions.setGameSetsSuccess({
          gameSetIds,
        })
      : gameSetCheckerActions.setGameSetsFailure();
}
